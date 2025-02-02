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

  @column({ columnName: 'transaction_number' })
  public transactionNumber!: string

  @column()
  public amount!: number

  @column()
  public currency!: string

  @column({ columnName: 'start_date' })
  public startDate!: string | null

  @column({ columnName: 'target_bank_account' })
  public targetBankAccount!: string | null

  @column()
  public status!: 'paid' | 'pending'

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Request, { foreignKey: 'requestId', localKey: 'id' })
  public request!: BelongsTo<typeof Request>
}
