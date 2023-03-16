"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableOrderDetails extends BaseSchema {
  protected tableName = "order_details";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table.bigInteger("product_id").unsigned().references("id").inTable("products");
      table.bigInteger("order_id").unsigned().references("id").inTable("orders");
      table.string("quantity", 100).notNullable();
      table.string("price", 100).notNullable();
      table.enum("discount_type", ["porcentaje", "monto"]).notNullable();
      table.string("discount_amount", 100).notNullable();
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
