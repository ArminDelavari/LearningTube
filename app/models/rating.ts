import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Instructor from './instructor.js'
import Learner from './learner.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Rating extends BaseModel {
  public static table = 'ratings'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'instructor_id' })
  public instructorId!: number

  @column({ columnName: 'learner_id' })
  public learnerId!: number

  @column()
  public rate!: number | null

  @column()
  public comment!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Instructor, { foreignKey: 'instructorId', localKey: 'id' })
  public instructor!: BelongsTo<typeof Instructor>

  @belongsTo(() => Learner, { foreignKey: 'learnerId', localKey: 'id' })
  public learner!: BelongsTo<typeof Learner>
}
