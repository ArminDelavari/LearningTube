import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class People extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public first_name!: string

  @column()
  public last_name!: string

  @column()
  public email!: string

  @column.dateTime()
  public birth_day!: DateTime | null

  @column()
  public address!: string | null

  @column()
  public person_type!: number

  @column.dateTime({ autoCreate: true })
  public created_at!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at!: DateTime
}
