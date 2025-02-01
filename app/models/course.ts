import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import CourseDefinition from './course_definition.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Instructor from './instructor.js'

export default class Course extends BaseModel {
  public static table = 'courses'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'course_definition_id' })
  public courseDefinitionId!: number

  @column({ columnName: 'instructor_id' })
  public instructorId!: number

  @column({ columnName: 'start_date' })
  public startDate!: string | null

  @column({ columnName: 'end_date' })
  public endDate!: string | null

  @column()
  public status!: 'active' | 'completed' | 'cancelled'

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => CourseDefinition, { foreignKey: 'courseDefinitionId', localKey: 'id' })
  public courseDefinition!: BelongsTo<typeof CourseDefinition>

  @belongsTo(() => Instructor, { foreignKey: 'instructorId', localKey: 'id' })
  public instructor!: BelongsTo<typeof Instructor>
}
