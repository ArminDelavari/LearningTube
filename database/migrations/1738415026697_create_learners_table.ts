import { BaseSchema } from '@adonisjs/lucid/schema'
export default class CreateLearners extends BaseSchema {
  protected tableName = 'learners'

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
      table.text('biography').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
