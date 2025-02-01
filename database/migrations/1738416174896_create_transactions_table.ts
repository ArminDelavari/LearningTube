import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateTransactions extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('wallet_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('wallets')
        .onDelete('CASCADE')
      table.string('transaction_number').notNullable()
      table.decimal('amount', 10, 2).notNullable()
      table.string('currency').nullable()
      table.string('status').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
