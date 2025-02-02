import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import RoleDefinition from './role_definition.js'

export default class EnvironmentEntity extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'logical_name' })
  declare logicalName: string

  @column({ columnName: 'display_name' })
  declare displayName: string

  @column({ columnName: 'entity_type' })
  declare entityType: String

  @manyToMany(() => RoleDefinition, {
    pivotTable: 'role_entities_assignments',
    pivotForeignKey: 'entity_id',
    pivotRelatedForeignKey: 'role_definition_id',
  })
  public assignedRoles!: ManyToMany<typeof RoleDefinition>

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}
