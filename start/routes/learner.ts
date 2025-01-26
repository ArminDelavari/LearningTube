import router from '@adonisjs/core/services/router'
import Learner from '#models/learner'

router
  .group(() => {
    router.post('/add-learner', async ({ request }) => {
      const data = request.body()
      const person = await Learner.create(data)
      return {
        message: 'Learner created successfully',
        person,
      }
    })

    router.post('/update-learner-languages', async ({ request }) => {
      const data = request.body()
      const learner = await Learner.find(data.id)
      const x = await learner?.related('languages').sync(data.languageIds)
      return {
        message: 'Learner languages have been updated successfully',
        x,
      }
    })
  })
  .prefix('/learner')
