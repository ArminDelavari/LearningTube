import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddColumnToPersons extends BaseSchema {
  protected tableName = 'persons'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('personType').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('personType')
    })
  }
}
