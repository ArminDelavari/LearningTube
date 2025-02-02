import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Instructor from './instructor.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class CourseDefinition extends BaseModel {
  public static table = 'course_definitions'

  @column({ isPrimary: true })
  public id!: number

  @column()
  public name!: string

  @column({ columnName: 'code_name' })
  public codeName!: string

  @column({ columnName: 'instructor_id' })
  public instructorId!: number

  @column({ columnName: 'course_type' })
  public courseType!: 'private' | 'general'

  @column({ columnName: 'total_session' })
  public totalSession!: number | null

  @column({ columnName: 'price_per_session' })
  public pricePerSession!: number | null

  @column({ columnName: 'currency' })
  public currency!: string | null

  @column({ columnName: 'max_person' })
  public maxPerson!: number | null

  @column({ columnName: 'min_person' })
  public minPerson!: number | null

  @column()
  public description!: string | null

  @column({ columnName: 'title_image' })
  public titleImage!: string | null

  @column({ columnName: 'start_date' })
  public startDate!: DateTime | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Instructor, { foreignKey: 'instructorId', localKey: 'id' })
  public instructor!: BelongsTo<typeof Instructor>
}
