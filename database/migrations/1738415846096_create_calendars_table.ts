import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateCalendars extends BaseSchema {
  protected tableName = 'calendars'

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
        .integer('course_scheduled_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('course_scheduled')
        .onDelete('CASCADE')
      table.string('agenda').nullable()
      table.dateTime('start_time').notNullable()
      table.integer('duration').notNullable()
      table.enum('status', ['free', 'busy', 'doNotDisturbe', 'outOfOffice']).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
