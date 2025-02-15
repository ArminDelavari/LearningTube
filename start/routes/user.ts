import router from '@adonisjs/core/services/router'
import User from '#models/user'
import Person from '#models/person'
import { DateTime } from 'luxon'
router
  .group(() => {
    //auth:
    async function checkIfUserExists(username: string) {
      const user = await User.query().where('username', username).first()
      return user ? true : false
    }
    router.post('/auth/checkIfUserExists', async ({ request }) => {
      const username = request.input('username')
      const user = await checkIfUserExists(username)

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

    router.post('/auth/register', async ({ request, response }) => {
      try {
        const userData = request.only(['password', 'username', 'language', 'timeZone'])

        const personData = request.only([
          'firstName',
          'lastName',
          'email',
          'birthDate',
          'address',
          'gender',
        ])
        if (personData.birthDate) {
          personData.birthDate = DateTime.fromISO(personData.birthDate)
        }
        const username = request.input('username')
        const isExists = await checkIfUserExists(username)

        if (isExists) {
          return response.badRequest({
            status: false,
            error: 'Username already exists',
          })
        }

        const person = await Person.create(personData)

        const user = new User()
        user.username = userData.username
        user.personId = person.id
        user.timeZone = userData.timeZone
        user.language = userData.language
        user.password = userData.password
        user.status = 'active'

        await user.save()
        return response.send({
          status: true,
          message: 'User created successfully',
          user,
        })
      } catch (error) {
        return response.badRequest({
          status: false,
          error: 'Failed to create person',
          details: error.message,
        })
      }
    })
  })
  .prefix('/user')
