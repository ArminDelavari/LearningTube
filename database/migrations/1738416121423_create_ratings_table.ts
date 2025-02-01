import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateRatings extends BaseSchema {
  protected tableName = 'ratings'

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
      table.integer('rate').nullable()
      table.text('comment').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
