import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Language from './language.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Person from './people.js'

export default class Learner extends BaseModel {
  public static table = 'learners'

  @column({ isPrimary: true })
  public id!: number

  @column({ columnName: 'person_id' })
  public personId!: number

  @column()
  public username!: string

  @manyToMany(() => Language, {
    pivotTable: 'learner_languages', // Define the pivot table
    pivotForeignKey: 'learner_id', // Define the foreign key in the pivot table for this model
    pivotRelatedForeignKey: 'language_id', // Define the foreign key in the pivot table for the related model
  })
  public languages!: ManyToMany<typeof Language>

  @column({ columnName: 'time_zone' })
  public timeZone!: string | null

  @column()
  public password!: string

  @column({ columnName: 'access_tokens' })
  public accessTokens!: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>
}
