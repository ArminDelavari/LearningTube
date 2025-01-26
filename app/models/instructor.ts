import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Language from './language.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Instructor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public people_id!: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Language, {
    pivotTable: 'instructor_languages',
    pivotForeignKey: 'instructor_id',
    pivotRelatedForeignKey: 'language_id',
  })
  public languages!: ManyToMany<typeof Language>
}
