import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Person from './person.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Rating extends BaseModel {
  public static table = 'ratings'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'person_id' })
  public personId!: number

  @column({ columnName: 'person_id_as_reviewer' })
  public personIdAsReviewer!: number

  @column()
  public rate!: number

  @column()
  public description!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public ratee!: BelongsTo<typeof Person>

  @belongsTo(() => Person, { foreignKey: 'personIdAsReviewer', localKey: 'id' })
  public rater!: BelongsTo<typeof Person>
}
