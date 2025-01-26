import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Learner from './learner.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Language extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public name!: string

  @column()
  public codeName!: string

  @manyToMany(() => Learner, {
    pivotTable: 'learner_languages', // Define the pivot table
    pivotForeignKey: 'language_id', // Define the foreign key in the pivot table for this model
    pivotRelatedForeignKey: 'learner_id', // Define the foreign key in the pivot table for the related model
  })
  public learners!: ManyToMany<typeof Learner>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
