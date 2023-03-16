"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableProducts extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table.bigInteger("category_id").unsigned().references("id").inTable("categories");
      table.string("name", 100).notNullable();
      table.string("description", 100).notNullable();
      table.string("price", 100).notNullable();
      table.string("stock", 100).notNullable();
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
