import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Instructor from './instructor.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Learner from './learner.js'
import CourseDefinition from './course_definition.js'

export default class Request extends BaseModel {
  public static table = 'requests'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'instructor_id' })
  public instructorId!: number

  @column({ columnName: 'learner_id' })
  public learnerId!: number

  @column({ columnName: 'course_defination_id' })
  public courseDefinationId!: number

  @column({ columnName: 'start_date' })
  public startDate!: string | null

  @column({ columnName: 'instructor_action' })
  public instructorAction!: string | null

  @column()
  public status!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Instructor, { foreignKey: 'instructorId', localKey: 'id' })
  public instructor!: BelongsTo<typeof Instructor>

  @belongsTo(() => Learner, { foreignKey: 'learnerId', localKey: 'id' })
  public learner!: BelongsTo<typeof Learner>

  @belongsTo(() => CourseDefinition, { foreignKey: 'courseDefinationId', localKey: 'id' })
  public courseDefinition!: BelongsTo<typeof CourseDefinition>
}
