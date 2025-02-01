import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import CourseDefinition from './course_definition.js'
import CourseScheduled from './course_scheduled.js'
import CourseRating from './course_rating.js'

export default class Course extends BaseModel {
  public static table = 'courses'

  @column({ isPrimary: true })
  public id!: number

  @column()
  public courseDefinitionId!: number

  @column()
  public participants!: number

  @column()
  public scheduledSession!: number

  @column()
  public pricePerSession!: number

  @column.date()
  public startDate!: DateTime | null

  @column.date()
  public endDate!: DateTime | null

  @column()
  public status!: 'active' | 'completed' | 'cancelled'

  @column()
  public rating!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => CourseDefinition)
  public courseDefinition!: BelongsTo<typeof CourseDefinition>

  @belongsTo(() => CourseScheduled)
  public scheduledCourse!: BelongsTo<typeof CourseScheduled>

  @belongsTo(() => CourseRating)
  public courseRating!: BelongsTo<typeof CourseRating>
}