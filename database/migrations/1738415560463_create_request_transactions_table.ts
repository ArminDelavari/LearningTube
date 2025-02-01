import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateRequestTransactions extends BaseSchema {
  protected tableName = 'request_transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('requests_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('requests')
        .onDelete('CASCADE')
      table.string('transaction_number').notNullable()
      table.decimal('amount', 10, 2).notNullable()
      table.date('start_date').nullable()
      table.string('instructor_action').nullable()
      table.string('target_bank_account').nullable()
      table.string('status').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
