import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'add_columns_to_instructors'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('phone_number', 15).nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('phone_number')
    })
  }
}
