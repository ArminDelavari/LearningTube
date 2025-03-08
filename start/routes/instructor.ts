import router from '@adonisjs/core/services/router'
import Instructor from '#models/instructor'
import Request from '#models/request'
import Calendar from '#models/calendar'
import Wallet from '#models/wallet'
import Language from '#models/language'
import CourseDefinition from '#models/course_definition'
import { DateTime } from 'luxon'

router
  .group(() => {
    // Create new instructor
    router.post('/add-instructor', async ({ request }) => {
      const data = request.body()
      const person = await Instructor.create(data)
      return {
        message: 'Instructor created successfully',
        person,
      }
    })

    // Update instructor languages
    router.post('/update-instructor-languages', async ({ request }) => {
      const data = request.body()
      const instructor = await Instructor.find(data.id)
      const x = await instructor?.related('languages').sync(data.languageIds)
      return {
        message: 'Instructor languages have been updated successfully',
        x,
      }
    })

    // Course Definition Management
    router.post('/course-definition', async ({ request }) => {
      const data = request.body()
      const courseDefinition = await CourseDefinition.create({
        instructorId: data.instructorId,
        name: data.name,
        codeName: data.codeName,
        description: data.description,
        courseType: data.courseType,
        totalSession: data.totalSession,
        pricePerSession: data.pricePerSession,
        currency: data.currency,
        maxPerson: data.maxPerson,
        minPerson: data.minPerson,
        titleImage: data.titleImage,
        startDate: data.startDate ? DateTime.fromISO(data.startDate) : null,
      })
      return {
        message: 'Course definition created successfully',
        courseDefinition,
      }
    })

    router.get('/course-definitions/:instructorId', async ({ params }) => {
      const courseDefinitions = await CourseDefinition.query().where(
        'instructorId',
        params.instructorId
      )
      return courseDefinitions
    })

    // Calendar Management
    router.get('/calendar/:instructorId', async ({ params }) => {
      const calendar = await Calendar.query()
        .where('instructorId', params.instructorId)
        .preload('courseScheduled')
      return calendar
    })

    // Open Requests Management
    router.get('/requests/:instructorId', async ({ params }) => {
      const requests = await Request.query()
        .where('instructorId', params.instructorId)
        .preload('learner')
        .preload('courseDefinition')
      return requests
    })

    router.post('/request/update-status', async ({ request }) => {
      const data = request.body()
      const req = await Request.find(data.requestId)
      if (req) {
        req.status = data.status
        await req.save()
      }
      return {
        message: 'Request status updated successfully',
        request: req,
      }
    })

    // Wallet Management
    router.get('/wallet/:instructorId', async ({ params }) => {
      const instructor = await Instructor.find(params.instructorId)
      const person = await instructor?.related('person').query().first()
      const wallet = await Wallet.findBy('personId', person?.id)
      return wallet
    })

    // Update instructor's wallet
    router.post('/wallet/update', async ({ request }) => {
      const data = request.body()
      const instructor = await Instructor.find(data.instructorId)
      const person = await instructor?.related('person').query().first()
      const wallet = await Wallet.findBy('personId', person?.id)
      if (wallet) {
        wallet.amount = data.amount
        wallet.currency = data.currency
        await wallet.save()
      }
      return {
        message: 'Wallet updated successfully',
        wallet,
      }
    })

    // Languages Management
    router.get('/languages/:instructorId', async ({ params }) => {
      const instructor = await Instructor.find(params.instructorId)
      const languages = await instructor?.related('languages').query()
      return languages
    })

    // Settings Management
    router.post('/settings/update', async ({ request }) => {
      const data = request.body()
      const instructor = await Instructor.find(data.instructorId)
      if (instructor) {
        instructor.merge({
          biography: data.biography,
          percentageOfPayment: data.percentageOfPayment,
        })
        await instructor.save()
      }
      return {
        message: 'Settings updated successfully',
        instructor,
      }
    })

    // Get instructor profile
    router.get('/profile/:instructorId', async ({ params }) => {
      const instructor = await Instructor.find(params.instructorId)
      const person = await instructor?.related('person').query().first()
      const wallet = person ? await Wallet.findBy('personId', person.id) : null

      await instructor?.load((loader) => {
        loader
          .load('languages')
          .load('person')
          .load('calendar')
          .load('request')
          .load('courseDefinition')
      })

      return {
        ...instructor?.toJSON(),
        wallet,
      }
    })

    // Active Course Management
    router.get('/active-courses/:instructorId', async ({ params }) => {
      const requests = await Request.query()
        .where('instructorId', params.instructorId)
        .where('status', 'accepted')
        .preload('learner')
        .preload('courseDefinition')
      return requests
    })
  })
  .prefix('/instructor')
