import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateCourseRatings extends BaseSchema {
  protected tableName = 'course_ratings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('person_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('people')
        .onDelete('CASCADE')
      table
        .integer('course_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('course_definitions')
        .onDelete('CASCADE')
      table.integer('rate').nullable()
      table.text('description').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
