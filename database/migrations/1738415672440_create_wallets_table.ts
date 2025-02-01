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
      table
        .integer('person_id_as_reviewer')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('people')
        .onDelete('SET NULL')
      table.decimal('rate', 5, 2).nullable()
      table.text('description').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
