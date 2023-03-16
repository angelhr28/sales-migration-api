"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTablePeople extends BaseSchema {
  protected tableName = "people";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table.bigInteger("user_id").unsigned().references("id").inTable("users");
      table.bigInteger("rol_id").unsigned().references("id").inTable("roles");
      table.string("name", 100).notNullable();
      table.string("surname", 100).notNullable();
      table.string("surname_second", 100);
      table.string("document_number", 100).notNullable();
      table.string("phone_number", 100).notNullable();
      table.string("email", 100).notNullable();
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
