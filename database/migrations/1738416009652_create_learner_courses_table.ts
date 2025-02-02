import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateLearnerCourses extends BaseSchema {
  protected tableName = 'learner_courses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('learner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('learners')
        .onDelete('CASCADE')
      table
        .integer('course_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('course_definitions')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
