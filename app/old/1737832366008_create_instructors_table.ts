import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Instructors extends BaseSchema {
  protected tableName = 'instructors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('people_id')
        .unsigned()
        .references('id')
        .inTable('people')
        .onDelete('CASCADE')
        .notNullable()

      table.string('department', 255).nullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
