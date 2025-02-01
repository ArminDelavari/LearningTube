import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Person from './people.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Wallet extends BaseModel {
  public static table = 'wallets'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'person_id' })
  public personId!: number

  @column({ columnName: 'person_id_as_reviewer' })
  public personIdAsReviewer!: number | null

  @column()
  public rate!: number | null

  @column()
  public description!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>
}
