import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateWallets extends BaseSchema {
  protected tableName = 'wallets'

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
      table.decimal('amount').notNullable().defaultTo(0)
      table.string('currency').notNullable()
      table.enum('status', ['active', 'inactive', 'suspended']).notNullable().defaultTo('active')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}