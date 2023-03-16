"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableBranchOfficesXUsers extends BaseSchema {
  protected tableName = "branch_offices_x_users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary();
      table.bigInteger("branch_offices_id").unsigned().references("id").inTable("branch_offices");
      table.bigInteger("user_id").unsigned().references("id").inTable("users");
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
