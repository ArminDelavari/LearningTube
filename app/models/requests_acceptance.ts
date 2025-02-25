import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Instructor from './instructor.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Request from './request.js'

export default class RequestsAcceptance extends BaseModel {
  public static table = 'requests_acceptance'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'instructor_id' })
  public instructorId!: number

  @column({ columnName: 'request_id' })
  public requestId!: number

  @column.dateTime({ columnName: 'expire_date' })
  public expireDate!: DateTime | null

  @column()
  public status!: 'pending' | 'accepted' | 'rejected'

  @column()
  public reason!: string | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Instructor, { foreignKey: 'instructorId', localKey: 'id' })
  public instructor!: BelongsTo<typeof Instructor>

  @belongsTo(() => Request, { foreignKey: 'requestId', localKey: 'id' })
  public request!: BelongsTo<typeof Request>
}
