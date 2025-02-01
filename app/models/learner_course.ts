import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Learner from './learner.js'
import CourseDefinition from './course_definition.js'

export default class LearnerCourse extends BaseModel {
  public static table = 'learner_courses'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'learner_id' })
  public learnerId!: number

  @column({ columnName: 'course_id' })
  public courseId!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Learner, { foreignKey: 'learnerId', localKey: 'id' })
  public learner!: BelongsTo<typeof Learner>

  @belongsTo(() => CourseDefinition, { foreignKey: 'courseId', localKey: 'id' })
  public course!: BelongsTo<typeof CourseDefinition>
}
