import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import CourseScheduled from './course_scheduled.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Person from './person.js'

export default class Calendar extends BaseModel {
  public static table = 'calendars'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'person_id' })
  public personId!: number

  @column({ columnName: 'course_scheduled_id' })
  public courseScheduledId!: number

  @column()
  public agenda!: String | null

  @column({ columnName: 'start_time' })
  public startTime!: DateTime

  @column()
  public duration!: Number

  @column()
  public status!: 'free' | 'busy' | 'doNotDisturb' | 'outOfOffice'

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>

  @belongsTo(() => CourseScheduled, { foreignKey: 'courseScheduledId', localKey: 'id' })
  public courseScheduled!: BelongsTo<typeof CourseScheduled>
}
