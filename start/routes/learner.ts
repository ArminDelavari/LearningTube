import router from '@adonisjs/core/services/router'
import Learner from '#models/learner'
import Request from '#models/request'
import Calendar from '#models/calendar'
import Wallet from '#models/wallet'
import Language from '#models/language'
import { DateTime } from 'luxon'

router
  .group(() => {
    // Create new learner
    router.post('/add-learner', async ({ request }) => {
      const data = request.body()
      const person = await Learner.create(data)
      return {
        message: 'Learner created successfully',
        person,
      }
    })

    // Update learner languages
    router.post('/update-learner-languages', async ({ request }) => {
      const data = request.body()
      const learner = await Learner.find(data.id)
      const x = await learner?.related('languages').sync(data.languageIds)
      return {
        message: 'Learner languages have been updated successfully',
        x,
      }
    })

    // Submit new request
    router.post('/submit-request', async ({ request }) => {
      const data = request.body()
      const newRequest = await Request.create({
        learnerId: data.learnerId,
        courseDefinitionId: data.courseDefinitionId,
        status: 'pending',
        startDate: data.startDate,
        instructorId: data.instructorId,
      })
      return {
        message: 'Request submitted successfully',
        request: newRequest,
      }
    })

    // Get learner's calendar
    router.get('/calendar/:learnerId', async ({ params }) => {
      const calendar = await Calendar.query()
        .where('learnerId', params.learnerId)
        .preload('courseScheduled')
      return calendar
    })

    // Get learner's open requests
    router.get('/requests/:learnerId', async ({ params }) => {
      const requests = await Request.query()
        .where('learnerId', params.learnerId)
        .preload('courseDefinition')
      return requests
    })

    // Get learner's wallet
    router.get('/wallet/:learnerId', async ({ params }) => {
      const learner = await Learner.find(params.learnerId)
      const person = await learner?.related('person').query().first()
      const wallet = await Wallet.findBy('personId', person?.id)
      return wallet
    })

    // Update learner's wallet
    router.post('/wallet/update', async ({ request }) => {
      const data = request.body()
      const learner = await Learner.find(data.learnerId)
      const person = await learner?.related('person').query().first()
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

    // Get learner's languages
    router.get('/languages/:learnerId', async ({ params }) => {
      const learner = await Learner.find(params.learnerId)
      const languages = await learner?.related('languages').query()
      return languages
    })

    // Update learner settings
    router.post('/settings/update', async ({ request }) => {
      const data = request.body()
      const learner = await Learner.find(data.learnerId)
      if (learner) {
        learner.merge(data)
        await learner.save()
      }
      return {
        message: 'Settings updated successfully',
        learner,
      }
    })

    // Get learner profile
    router.get('/profile/:learnerId', async ({ params }) => {
      const learner = await Learner.find(params.learnerId)
      const person = await learner?.related('person').query().first()
      const wallet = person ? await Wallet.findBy('personId', person.id) : null

      await learner?.load((loader) => {
        loader.load('languages').load('person').load('calendar').load('request')
      })

      return {
        ...learner?.toJSON(),
        wallet,
      }
    })
  })
  .prefix('/learner')
