"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableCompanies extends BaseSchema {
  protected tableName = "companies";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary();
      table.string("name", 100).nullable();
      table.string("document_number", 32).nullable();
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
