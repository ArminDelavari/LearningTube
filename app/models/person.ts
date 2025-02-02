import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import RoleDefinition from './role_definition.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Person extends BaseModel {
  public static table = 'people'

  @column({
    isPrimary: true,
  })
  public id!: number

  @column({ columnName: 'first_name' })
  public firstName!: string

  @column({ columnName: 'last_name' })
  public lastName!: string

  @column()
  public email!: string

  @column({ columnName: 'birth_date' })
  public birthDate!: DateTime | null

  @column()
  public address!: string | null

  @manyToMany(() => RoleDefinition, {
    pivotTable: 'role_definition_id',
    pivotForeignKey: 'person_id',
    pivotRelatedForeignKey: 'role_definition_id',
  })
  public roles!: ManyToMany<typeof RoleDefinition>

  @column({ columnName: 'bank_account' })
  public bankAccount!: string | null

  @column({ columnName: 'gender' })
  public gender!: string | null

  @column()
  public rating!: number | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime
}
