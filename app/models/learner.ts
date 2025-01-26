import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Language from './language.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Learner extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public peopleId!: number

  @manyToMany(() => Language, {
    pivotTable: 'learner_languages', // Define the pivot table
    pivotForeignKey: 'learner_id', // Define the foreign key in the pivot table for this model
    pivotRelatedForeignKey: 'language_id', // Define the foreign key in the pivot table for the related model
  })
  public languages!: ManyToMany<typeof Language>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
