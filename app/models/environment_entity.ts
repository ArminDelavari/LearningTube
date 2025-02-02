import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import RoleDefinition from './role_definition.js'

export default class EnvironmentEntity extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'logical_name' })
  public logicalName!: string

  @column({ columnName: 'display_name' })
  public displayName!: string

  @column({ columnName: 'entity_type' })
  public entityType!: String

  @column()
  public read!: boolean

  @column()
  public write!: boolean

  @column({ columnName: 'delete' })
  public canDelete!: boolean

  @column()
  public create!: boolean

  @column({ columnName: 'access_mode' })
  public accessMode!: 'self' | 'all'

  @manyToMany(() => RoleDefinition, {
    pivotTable: 'role_entities_assignments',
    pivotForeignKey: 'entity_id',
    pivotRelatedForeignKey: 'role_definition_id',
  })
  public assignedRoles!: ManyToMany<typeof RoleDefinition>

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime
}
