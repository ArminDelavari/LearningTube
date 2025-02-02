import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'role_entities_assignments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('entity_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('environment_entities')
        .onDelete('CASCADE')

      table
        .integer('role_definition_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('role_definitions')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
