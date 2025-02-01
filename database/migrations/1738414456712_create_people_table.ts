import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreatePeople extends BaseSchema {
  protected tableName = 'people'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.dateTime('birth_date').nullable()
      table.string('address', 1024).nullable()
      table.string('role').nullable()
      table.string('bank_account').nullable()
      table.string('gender').nullable()
      table.integer('rating').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
