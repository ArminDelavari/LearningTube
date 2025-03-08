import router from '@adonisjs/core/services/router'
import Course from '#models/course'
import CourseRating from '#models/course_rating'
import CourseScheduled from '#models/course_scheduled'
import { DateTime } from 'luxon'

router
  .group(() => {
    // Create new course
    router.post('/create', async ({ request }) => {
      const data = request.body()
      const course = await Course.create({
        courseDefinitionId: data.courseDefinitionId,
        startDate: data.startDate ? DateTime.fromISO(data.startDate) : null,
        endDate: data.endDate ? DateTime.fromISO(data.endDate) : null,
        status: 'notStarted',
        capacityStatus: 'open',
        rating: 0,
      })
      return {
        message: 'Course created successfully',
        course,
      }
    })

    // Get course details
    router.get('/:courseId', async ({ params }) => {
      const course = await Course.find(params.courseId)
      await course?.load((loader) => {
        loader
          .load('courseDefinition')
          .load('participants')
          .load('scheduledSession')
          .load('courseRating')
      })
      return course
    })

    // Update course status
    router.post('/update-status', async ({ request }) => {
      const data = request.body()
      const course = await Course.find(data.courseId)
      if (course) {
        course.status = data.status
        await course.save()
      }
      return {
        message: 'Course status updated successfully',
        course,
      }
    })

    // Update course capacity status
    router.post('/update-capacity', async ({ request }) => {
      const data = request.body()
      const course = await Course.find(data.courseId)
      if (course) {
        course.capacityStatus = data.capacityStatus
        await course.save()
      }
      return {
        message: 'Course capacity status updated successfully',
        course,
      }
    })

    // Add/Update course rating
    router.post('/rating', async ({ request }) => {
      const data = request.body()
      const courseRating = await CourseRating.create({
        courseId: data.courseId,
        personId: data.personId,
        rate: data.rate,
        description: data.description,
      })

      // Update course average rating
      const course = await Course.find(data.courseId)
      if (course) {
        const ratings = await CourseRating.query()
          .where('courseId', data.courseId)
          .whereNotNull('rate')

        const totalRating = ratings.reduce((sum, rating) => sum + (rating.rate || 0), 0)
        course.rating = totalRating / ratings.length
        await course.save()
      }

      return {
        message: 'Course rating added successfully',
        courseRating,
      }
    })

    // Get course ratings
    router.get('/ratings/:courseId', async ({ params }) => {
      const ratings = await CourseRating.query()
        .where('courseId', params.courseId)
        .preload('person')
      return ratings
    })

    // Schedule course session
    router.post('/schedule-session', async ({ request }) => {
      const data = request.body()
      const session = await CourseScheduled.create({
        courseId: data.courseId,
        date: data.date,
        status: 'scheduled',
      })
      return {
        message: 'Course session scheduled successfully',
        session,
      }
    })

    // Update session status
    router.post('/update-session-status', async ({ request }) => {
      const data = request.body()
      const session = await CourseScheduled.find(data.sessionId)
      if (session) {
        session.status = data.status
        await session.save()
      }
      return {
        message: 'Session status updated successfully',
        session,
      }
    })

    // Get course schedule
    router.get('/schedule/:courseId', async ({ params }) => {
      const schedule = await CourseScheduled.query()
        .where('courseId', params.courseId)
        .orderBy('date', 'asc')
      return schedule
    })

    // Add participant to course
    router.post('/add-participant', async ({ request }) => {
      const data = request.body()
      const course = await Course.find(data.courseId)
      await course?.related('participants').attach([data.learnerId])
      return {
        message: 'Participant added successfully',
        course,
      }
    })

    // Remove participant from course
    router.post('/remove-participant', async ({ request }) => {
      const data = request.body()
      const course = await Course.find(data.courseId)
      await course?.related('participants').detach([data.learnerId])
      return {
        message: 'Participant removed successfully',
        course,
      }
    })

    // Get course participants
    router.get('/participants/:courseId', async ({ params }) => {
      const course = await Course.find(params.courseId)
      await course?.load('participants')
      return course?.participants
    })
  })
  .prefix('/course')
