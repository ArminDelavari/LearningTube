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
      table.string('username').notNullable()
      table.string('languages').nullable() // اگر چند زبان به صورت متنی ذخیره شود
      table.string('time_zone').nullable()
      table.string('password').notNullable()
      table.text('access_tokens').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
