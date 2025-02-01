import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import CourseDefinition from './course_definition.js'
import CourseScheduled from './course_scheduled.js'
import CourseRating from './course_rating.js'
import Learner from './learner.js'

export default class Course extends BaseModel {
  public static table = 'courses'

  @column({ isPrimary: true })
  public id!: number

  @column()
  public courseDefinitionId!: number

  @manyToMany(() => Learner, {
    pivotTable: 'learner_courses',
    pivotForeignKey: 'course_id',
    pivotRelatedForeignKey: 'learner_id',
  })
  public participants!: ManyToMany<typeof Learner>

  @hasMany(() => CourseScheduled)
  public scheduledSession!: HasMany<typeof CourseScheduled>

  @column.date()
  public startDate!: DateTime | null

  @column.date()
  public endDate!: DateTime | null

  @column()
  public status!: 'inProgress' | 'completed' | 'cancelled' | 'notStarted'

  @column({
    columnName: 'capacity_status',
  })
  public capacityStatus!: 'closed' | 'open'

  @column()
  public rating!: number

  @hasMany(() => CourseRating)
  public courseRating!: HasMany<typeof CourseRating>

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => CourseDefinition)
  public courseDefinition!: BelongsTo<typeof CourseDefinition>
}
