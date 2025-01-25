/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Person from '#models/person'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/add-person', async ({ request, response }) => {
  const person = await Person.create({
    firstName: 'Armin',
    lastName: 'Delavari',
    email: 'armin.delavari2012@gmail.com',
    birthDay: null, // مقدار اختیاری
    address: 'Some Address',
    phoneNumber: '1234567890',
  })

  return response.json({
    message: 'Person created successfully',
    person,
  })
})
