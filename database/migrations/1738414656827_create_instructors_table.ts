import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateInstructors extends BaseSchema {
  protected tableName = 'instructors'

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
      table.string('languages').nullable()
      table.string('courses').nullable()
      table.decimal('percentage_of_payment', 5, 2).nullable()
      table.string('calendar').nullable()
      table.string('requests').nullable()
      table.text('biography').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
