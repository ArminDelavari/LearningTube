import router from '@adonisjs/core/services/router'
import User from '#models/user'

router
  .group(() => {
    router.post('/check-username', async ({
      request
    }) => {
      const username = request.input('username')
      const user = await User.query().where('username', username).first()

      if (user) {
        return {
          status: false,
          message: 'Username already exists',
        }
      } else {
        return {
          status: true,
          message: 'Username is available',
        }
      }
    })

  })
  .prefix('/user')
