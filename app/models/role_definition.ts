import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import EnvironmentEntity from './environment_entity.js'

export default class RoleDefinition extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'logical_name' })
  public logicalName!: string

  @column()
  public description!: string

  @manyToMany(() => EnvironmentEntity, {
    pivotTable: 'role_entities_assignments',
    pivotForeignKey: 'role_definition_id',
    pivotRelatedForeignKey: 'entity_id',
  })
  public assignedEntities!: ManyToMany<typeof EnvironmentEntity>

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime
}
