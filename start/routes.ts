/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import People from '#models/people'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/add-person', async () => {
  debugger
  const person = await People.create({
    firstName: 'Armin',
    lastName: 'Delavari',
    email: 'armin.delavari2012@gmail.com',
    birthDay: null,
    address: 'Some Address',
  })

  return {
    message: 'Person created successfully',
    person,
  }
})
