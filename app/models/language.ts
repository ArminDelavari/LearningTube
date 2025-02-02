import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Language extends BaseModel {
  public static table = 'languages'

  @column({ isPrimary: true })
  public id!: number

  @column()
  public name!: string

  @column({ columnName: 'code_name' })
  public codeName!: string

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime
}
