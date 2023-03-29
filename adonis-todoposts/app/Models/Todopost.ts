import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Todopostnote from './Todopostnote'

export default class Todopost extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string
  @column()
  public status: string

  @hasMany(()=>Todopostnote,{foreignKey: 'todopost_id'})
  public notes: HasMany<typeof Todopostnote>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
