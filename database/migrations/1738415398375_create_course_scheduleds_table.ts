import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateCourseScheduled extends BaseSchema {
  protected tableName = 'course_scheduled'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('course_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('course_definitions')
        .onDelete('CASCADE')
      table.date('date').notNullable()
      table.enum('status', ['free', 'busy']).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
