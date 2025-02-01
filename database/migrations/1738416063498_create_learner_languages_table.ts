import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateLearnerLanguages extends BaseSchema {
  protected tableName = 'learner_languages'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('learner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('learners')
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
