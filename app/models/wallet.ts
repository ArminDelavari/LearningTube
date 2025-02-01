import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Person from './person.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Transaction from './transaction.js';
export default class Wallet extends BaseModel {
  public static table = 'wallets'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'person_id' })
  public personId!: number

  @column()
  public amount!: number

  @column()
  public currency!: string

  @column()
  public status!: 'active' | 'inactive' | 'suspended'

  @hasMany(() => Transaction)
  public transactions!: HasMany<typeof Transaction>

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>
}