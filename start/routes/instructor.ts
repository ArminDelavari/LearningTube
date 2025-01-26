import router from '@adonisjs/core/services/router'
import Instructor from '#models/instructor'

router
  .group(() => {
    router.post('/add-instructor', async ({ request }) => {
      const data = request.body()
      const person = await Instructor.create(data)
      return {
        message: 'Instructor created successfully',
        person,
      }
    })

    router.post('/update-instructor-languages', async ({ request }) => {
      const data = request.body()
      const instructor = await Instructor.find(data.id)
      console.log(instructor?.id)
      const x = await instructor?.related('languages').sync(data.languageIds)
      return {
        message: 'Instructor languages have been updated successfully',
        x,
      }
    })
  })
  .prefix('/instructor')
