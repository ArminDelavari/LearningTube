import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'environment_entities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('logical_name').notNullable()
      table.string('display_name').notNullable()
      table.enum('entity_type', ['app', 'table', 'route', 'func']).notNullable().defaultTo('app')
      table.boolean('read').notNullable().defaultTo(false)
      table.boolean('write').notNullable().defaultTo(false)
      table.boolean('delete').notNullable().defaultTo(false)
      table.boolean('create').notNullable().defaultTo(false)
      table.enum('access_mode', ['self', 'all']).notNullable().defaultTo('self')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
