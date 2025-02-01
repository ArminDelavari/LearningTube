import {
  BaseSchema
} from '@adonisjs/lucid/schema'

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
      table.integer('participants').notNullable().defaultTo(0)
      table
        .integer('scheduled_session')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('course_scheduled')
        .onDelete('CASCADE')
      table.decimal('price_per_session', 10, 2).notNullable().defaultTo(0)
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      table.enum('status', ['active', 'completed', 'cancelled']).notNullable().defaultTo('active')
      table
        .integer('rating')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('course_ratings')
        .onDelete('CASCADE')
      table.timestamp('created_at', {
        useTz: true
      })
      table.timestamp('updated_at', {
        useTz: true
      })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
