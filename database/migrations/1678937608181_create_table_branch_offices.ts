"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableBranchOffices extends BaseSchema {
  protected tableName = "branch_offices";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary();
      table.bigInteger("company_id").unsigned().references("id").inTable("companies");
      table.string("name", 100).nullable();
      table.string("address", 100);
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
