import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Wallet from './wallet.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Transaction extends BaseModel {
  public static table = 'transactions'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'wallet_id' })
  public walletId!: number

  @column({ columnName: 'transaction_number' })
  public transactionNumber!: string

  @column()
  public amount!: number

  @column()
  public targetBankAccount!: string

  @column()
  public action!: string

  @column()
  public status!: string | null

  @column()
  public description!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Wallet, { foreignKey: 'walletId', localKey: 'id' })
  public wallet!: BelongsTo<typeof Wallet>
}