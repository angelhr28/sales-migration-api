"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableUsers extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary();
      table.string("username", 100).notNullable();
      table.string("password", 100).notNullable();
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
