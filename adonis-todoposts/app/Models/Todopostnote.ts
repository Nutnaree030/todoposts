import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Todopost from './Todopost'


export default class Todopostnote extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public todopost_id: number
  @column()
  public note: string

  @belongsTo(() => Todopost)
  public todopost: BelongsTo<typeof Todopost>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
