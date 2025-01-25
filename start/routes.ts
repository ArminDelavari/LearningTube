/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Instructor from '#models/instructor'
import people from '#models/people'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/add-person', async () => {
  debugger
  const person = await people.create({
    first_name: 'Armin',
    last_name: 'Delavari',
    email: 'armin.delavari2012@gmail.com',
    birth_day: null,
    address: null,
    person_type: 2,
  })

  return {
    message: 'Person created successfully',
    person,
  }
})

router.get('/add-instructor', async () => {
  debugger
  const person = await Instructor.create({
    people_id: '1',
  })

  return {
    message: 'Instructor created successfully',
    person,
  }
})
