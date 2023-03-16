"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTablePermissions extends BaseSchema {
  protected tableName = "permissions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table.string("key", 100).notNullable();
      table.string("name", 100).notNullable();
      table.text("description");
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
