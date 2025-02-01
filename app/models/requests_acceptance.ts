import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Instructor from './instructor.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import learnerRequests from './request.js'

export default class RequestsAcceptance extends BaseModel {
  public static table = 'requests_acceptance'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'instructor_id' })
  public instructorId!: number

  @column({ columnName: 'request_id' })
  public requestId!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Instructor, { foreignKey: 'instructorId', localKey: 'id' })
  public instructor!: BelongsTo<typeof Instructor>

  @belongsTo(() => learnerRequests, { foreignKey: 'requestId', localKey: 'id' })
  public request!: BelongsTo<typeof learnerRequests>
}
