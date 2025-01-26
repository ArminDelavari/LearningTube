import People from '#models/people'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/add-person', async ({ request }) => {
      const data = request.body()
      const person = await People.create(data)
      return {
        message: 'Person created successfully',
        person,
      }
    })
  })
  .prefix('/admin')
