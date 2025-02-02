import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Person from './person.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Course from './course.js'

export default class CourseRating extends BaseModel {
  public static table = 'course_ratings'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'person_id' })
  public personId!: number

  @column({ columnName: 'course_id' })
  public courseId!: number

  @column()
  public rate!: number | null

  @column()
  public description!: string | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>

  @belongsTo(() => Course, { foreignKey: 'courseId', localKey: 'id' })
  public course!: BelongsTo<typeof Course>
}
