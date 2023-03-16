"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTableOrders extends BaseSchema {
  protected tableName = "orders";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table.bigInteger("order_state_id").unsigned().references("id").inTable("order_states");
      table.bigInteger("payment_method_id").unsigned().references("id").inTable("payment_methods");
      table.string("cliente_name", 100).notNullable();
      table.string("cliente_document_number", 100).notNullable();
      table.string("address", 100);
      table.enum("sales_type", ["Presencial", "Delivery"]).defaultTo("Presencial");
      table.string("total_amount", 100).notNullable();
      table.string("total_quantity", 100).notNullable();
      table.string("total_discount", 100).notNullable();
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
