import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Person from './person.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['personId'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({
    isPrimary: true,
  })
  declare id: number

  @column()
  declare username: string

  @column({
    columnName: 'person_id',
  })
  public personId!: number

  @column()
  declare timeZone: string

  @column()
  declare language: string

  @column({
    serializeAs: null,
  })
  declare password: string

  @column()
  public status!: 'active' | 'deactive' | 'suspended' | 'deleted'

  @column.dateTime({
    autoCreate: true,
  })
  declare createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
  })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)
  @belongsTo(() => Person, { foreignKey: 'personId', localKey: 'id' })
  public person!: BelongsTo<typeof Person>
}
