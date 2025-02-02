import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Course from './course.js'

export default class CourseScheduled extends BaseModel {
  public static table = 'course_scheduled'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'course_id' })
  public courseId!: number

  @column()
  public date!: string

  @column()
  public status!: 'done' | 'canceled' | 'rescheduled' | 'scheduled'

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Course, { foreignKey: 'courseId', localKey: 'id' })
  public course!: BelongsTo<typeof Course>
}
