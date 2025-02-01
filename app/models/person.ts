import {
  BaseModel,
  column,
  manyToMany
} from '@adonisjs/lucid/orm'
import { ManyToMany } from '@adonisjs/lucid/types/relations'
import {
  DateTime
} from 'luxon'

export default class Person extends BaseModel {
  public static table = 'people'

  @column({
    isPrimary: true
  })
  public id!: number

  @column({
    columnName: 'first_name'
  })
  public firstName!: string

  @column({
    columnName: 'last_name'
  })
  public lastName!: string

  @column()
  public email!: string

  @column({
    columnName: 'birth_date'
  })
  public birthDate!: DateTime | null

  @column()
  public address!: string | null

  @manyToMany(() => Language, {
    pivotTable: 'instructor_languages',
    pivotForeignKey: 'instructor_id',
    pivotRelatedForeignKey: 'language_id',
  })
  public roles!: ManyToMany < typeof Language >


    @column({
      columnName: 'bank_account'
    })
  public bankAccount!: string | null

  @column({
    columnName: 'gender'
  })
  public gender!: string | null

  @column()
  public rating!: number | null

  @column.dateTime({
    autoCreate: true
  })
  public createdAt!: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true
  })
  public updatedAt!: DateTime
}
