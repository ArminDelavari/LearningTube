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

router.get('/run', async () => {
  //   const results = await people.query().select(
  //     knex.raw("CONCAT(people.first_name, ' ', people.last_name) AS full_name"),
  //     knex.raw("STRING_AGG(languages.name, ', ') AS preferences")
  //   )
  //   .innerJoin('instructors', 'instructors.people_id', 'people.id')
  //   .innerJoin('instructor_languages', 'instructor_languages.instructor_id', 'instructors.id')
  //   .innerJoin('languages', 'languages.id', 'instructor_languages.language_id')
  //   .groupBy('full_name')
  // console.log(results)
})
