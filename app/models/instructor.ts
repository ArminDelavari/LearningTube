import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Language from './language.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Person from './person.js'
import Request from './request.js'
import CourseDefinition from './course_definition.js'
import Calendar from './calendar.js'
export default class Instructor extends BaseModel {
  public static table = 'instructors'

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

  @hasMany(() => CourseDefinition)
  public courseDefinition!: HasMany<typeof CourseDefinition>

  @column({ columnName: 'percentage_of_payment' })
  public percentageOfPayment!: number | null

  @hasMany(() => Calendar)
  public calendar!: HasMany<typeof Calendar>


  @hasMany(() => Request)
  public request!: HasMany<typeof Request>


  @column()
  public biography!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>
}
