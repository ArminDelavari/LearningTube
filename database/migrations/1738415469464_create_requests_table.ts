import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateRequests extends BaseSchema {
  protected tableName = 'requests'

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
      table.date('start_date').nullable()
      table.enum('status', ['pending', 'accepted', 'rejected', 'open']).nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
