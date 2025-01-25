import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Person extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public firstName!: string

  @column()
  public lastName!: string

  @column()
  public email!: string

  @column.dateTime()
  public birthDay!: DateTime | null

  @column()
  public address!: string | null

  @column()
  public personType!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}
