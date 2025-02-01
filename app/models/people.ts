import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Person extends BaseModel {
  public static table = 'people'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'first_name' })
  public firstName!: string

  @column({ columnName: 'last_name' })
  public lastName!: string

  @column()
  public email!: string

  @column({ columnName: 'birth_day' })
  public birthDay!: DateTime | null

  @column()
  public address!: string | null

  @column({ columnName: 'person_type' })
  public personType!: string | null

  @column({ columnName: 'bank_account' })
  public bankAccount!: string | null

  @column({ columnName: 'gernder' })
  public gender!: string | null

  @column()
  public rating!: number | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}
