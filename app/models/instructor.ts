import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Language from './language.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Person from '../models/people.js'

export default class Instructor extends BaseModel {
  public static table = 'instructors'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'people_id' })
  public peopleId!: number

  @manyToMany(() => Language, {
    pivotTable: 'instructor_languages',
    pivotForeignKey: 'instructor_id',
    pivotRelatedForeignKey: 'language_id',
  })
  public languages!: ManyToMany<typeof Language>

  @column()
  public courses!: string | null

  @column({ columnName: 'percentage_of_payment' })
  public percentageOfPayment!: number | null

  @column()
  public calendar!: string | null

  @column()
  public requests!: string | null

  @column()
  public biography!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'peopleId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>
}
