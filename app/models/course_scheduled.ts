import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import CourseDefinition from './course_definition.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => CourseDefinition, { foreignKey: 'courseId', localKey: 'id' })
  public course!: BelongsTo<typeof CourseDefinition>
}
