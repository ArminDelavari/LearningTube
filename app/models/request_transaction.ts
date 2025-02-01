import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Request from './request.js'

export default class RequestTransaction extends BaseModel {
  public static table = 'request_transactions'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'requests_id' })
  public requestId!: number

  @column()
  public transactionNumber!: string

  @column()
  public amount!: number

  @column()
  public startDate!: string | null

  @column()
  public instructorAction!: string | null

  @column()
  public targetBankAccount!: string | null

  @column()
  public status!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Request, { foreignKey: 'requestId', localKey: 'id' })
  public request!: BelongsTo<typeof Request>
}