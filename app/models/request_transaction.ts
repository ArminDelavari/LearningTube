import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import learnerRequests from './request.js'

export default class RequestTransaction extends BaseModel {
  public static table = 'request_transactions'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'request_id' })
  public requestId!: number

  @column({ columnName: 'transaction_number' })
  public transactionNumber!: string

  @column()
  public amount!: number

  @column({ columnName: 'start_date' })
  public startDate!: string | null

  @column()
  public currency!: string | null

  @column()
  public status!: string | null

  @column()
  public reason!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => learnerRequests, { foreignKey: 'requestId', localKey: 'id' })
  public request!: BelongsTo<typeof learnerRequests>
}
