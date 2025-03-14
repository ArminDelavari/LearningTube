import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Language from './language.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Person from './person.js'
import Request from './request.js'
import Course from './course.js'
import Calendar from './calendar.js'

export default class Learner extends BaseModel {
  public static table = 'learners'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'person_id' })
  public personId!: number

  @manyToMany(() => Language, {
    pivotTable: 'instructor_languages',
    pivotForeignKey: 'instructor_id',
    pivotRelatedForeignKey: 'language_id',
  })
  public languages!: ManyToMany<typeof Language>

  @manyToMany(() => Course, {
    pivotTable: 'learner_courses',
    pivotForeignKey: 'learner_id',
    pivotRelatedForeignKey: 'course_id',
  })
  public courses!: ManyToMany<typeof Course>

  @hasMany(() => Calendar)
  public calendar!: HasMany<typeof Calendar>

  @hasMany(() => Request)
  public request!: HasMany<typeof Request>

  @column()
  public biography!: string | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>
}
