"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableRoles extends BaseSchema {
  protected tableName = "roles";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
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
