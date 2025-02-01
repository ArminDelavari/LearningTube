import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreatePeople extends BaseSchema {
  protected tableName = 'people'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.dateTime('birth_day').nullable()
      table.string('address', 1024).nullable()
      table.string('person_type').nullable() // مثلا نقش: instructor, learner, …
      table.string('bank_account').nullable() // مثال اضافی
      table.string('gernder').nullable() // اگر منظور gender است؛ در صورت تمایل تغییر نام دهید
      table.integer('rating').nullable() // امتیاز کلی
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
