import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import EnvironmentEntity from './environment_entity.js'

export default class RoleDefinition extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'logical_name' })
  declare logicalName: string

  @column()
  declare description?: string

  @manyToMany(() => EnvironmentEntity, {
    pivotTable: 'role_entities_assignments',
    pivotForeignKey: 'role_definition_id',
    pivotRelatedForeignKey: 'entity_id',
  })
  public assignedEntities!: ManyToMany<typeof EnvironmentEntity>

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}
