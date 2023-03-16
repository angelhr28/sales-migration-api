"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableProductPromotios extends BaseSchema {
  protected tableName = "product_promotions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table.bigInteger("category_id").unsigned().references("id").inTable("categories");
      table.bigInteger("product_id").unsigned().references("id").inTable("products");
      table.text("description").notNullable();
      table.string("discount_amount", 100).notNullable();
      table.string("start_date").notNullable();
      table.string("end_date").notNullable();
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
