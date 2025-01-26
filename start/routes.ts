/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Instructor from '#models/instructor'
import Learner from '#models/learner'
import people from '#models/people'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/add-person', async ({ request }) => {
  const data = request.body()
  const person = await people.create(data)
  return {
    message: 'Person created successfully',
    person,
  }
})

router.post('/add-instructor', async ({ request }) => {
  const data = request.body()
  const person = await Instructor.create(data)

  return {
    message: 'Instructor created successfully',
    person,
  }
})

router.post('/add-learner', async ({ request }) => {
  debugger
  const data = request.body()
  const person = await Learner.create(data)

  return {
    message: 'Learner created successfully',
    person,
  }
})

router.get('/run', async () => {
  //   const results = await people.query().select(
  //     Knex.raw("CONCAT(people.first_name, ' ', people.last_name) AS full_name"),
  //     Knex.raw("STRING_AGG(languages.name, ', ') AS preferences")
  //   )
  //   .innerJoin('instructors', 'instructors.people_id', 'people.id')
  //   .innerJoin('instructor_languages', 'instructor_languages.instructor_id', 'instructors.id')
  //   .innerJoin('languages', 'languages.id', 'instructor_languages.language_id')
  //   .groupBy('full_name')
  // console.log(results)
})
