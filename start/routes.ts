/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import './routes/admin.js'
import './routes/instructor.js'
import './routes/learner.js'
import './routes/course.js'
import './routes/user.js'
// import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

// router.post('/auth/register', UsersController.store)
router.get('/', async () => {
  return {
    hello: 'world',
  }
})
