import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Instructor from './instructor.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Learner from './learner.js'
import CourseDefinition from './course_definition.js'
import RequestsAcceptance from './requests_acceptance.js'

export default class Request extends BaseModel {
  public static table = 'requests'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'instructor_id' })
  public instructorId!: number

  @column({ columnName: 'learner_id' })
  public learnerId!: number

  @column({ columnName: 'course_definition_id' })
  public courseDefinitionId!: number

  @column({ columnName: 'start_date' })
  public startDate!: string | null

  @column()
  public status!: 'pending' | 'accepted' | 'rejected' | 'open'

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Instructor, { foreignKey: 'instructorId', localKey: 'id' })
  public instructor!: BelongsTo<typeof Instructor>

  @belongsTo(() => Learner, { foreignKey: 'learnerId', localKey: 'id' })
  public learner!: BelongsTo<typeof Learner>

  @belongsTo(() => CourseDefinition, { foreignKey: 'courseDefinationId', localKey: 'id' })
  public courseDefinition!: BelongsTo<typeof CourseDefinition>

  @hasMany(() => RequestsAcceptance)
  public requestsAcceptances!: HasMany<typeof RequestsAcceptance>
}
