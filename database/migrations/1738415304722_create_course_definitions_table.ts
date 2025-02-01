import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateCourseDefinitions extends BaseSchema {
  protected tableName = 'course_definitions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('code_name').notNullable()
      table
        .integer('instructor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructors')
        .onDelete('CASCADE')
      table.enum('course_type', ['private', 'general']).nullable()
      table.integer('total_session').nullable()
      table.string('currency').nullable()
      table.decimal('price_per_session', 11, 2).nullable()
      table.integer('max_person').nullable()
      table.integer('min_person').nullable()
      table.text('description').nullable()
      table.string('title_image').nullable()
      table.date('start_date').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
