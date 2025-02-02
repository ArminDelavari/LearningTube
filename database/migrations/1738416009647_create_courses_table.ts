import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateCourses extends BaseSchema {
  protected tableName = 'courses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('course_definition_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('course_definitions')
        .onDelete('CASCADE')
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      table
        .enum('status', ['inProgress', 'completed', 'cancelled', 'notStarted'])
        .notNullable()
        .defaultTo('active')
      table.enum('capacity_status', ['closed', 'open']).notNullable().defaultTo('open')
      table.float('rating').notNullable().defaultTo(0)
      table.timestamp('created_at', {
        useTz: true,
      })
      table.timestamp('updated_at', {
        useTz: true,
      })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
