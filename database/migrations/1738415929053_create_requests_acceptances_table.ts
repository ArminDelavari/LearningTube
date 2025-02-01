import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateRequestsAcceptance extends BaseSchema {
  protected tableName = 'requests_acceptance'

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
        .integer('request_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('requests')
        .onDelete('CASCADE')
      table.timestamp('expire_date', { useTz: true }).nullable()
      table.enum('status', ['pending', 'accepted', 'rejected']).notNullable().defaultTo('pending')
      table.string('reason', 255).nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}