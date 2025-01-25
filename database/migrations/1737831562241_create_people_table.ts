import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'people'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstName', 255).notNullable()
      table.string('lastName', 255).notNullable()
      table.string('email', 500).notNullable().unique()
      table.dateTime('birthDay').nullable()
      table.string('address', 1024).nullable()
      table.string('personType').nullable()

      table.timestamp('createdAt', { useTz: true })
      table.timestamp('updatedAt', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
