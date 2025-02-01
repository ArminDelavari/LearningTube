import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateInstructorLanguages extends BaseSchema {
  protected tableName = 'instructor_languages'

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
        .integer('language_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('languages')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
