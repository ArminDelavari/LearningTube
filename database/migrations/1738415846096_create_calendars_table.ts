import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateCalendars extends BaseSchema {
  protected tableName = 'calendars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('instructor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructors')
        .onDelete('CASCADE')
      table
        .integer('learner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('learners')
        .onDelete('CASCADE')
      table
        .integer('course_defination_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('course_definitions')
        .onDelete('CASCADE')
      table.dateTime('date_time').notNullable()
      table.enum('status', ['free', 'busy']).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
