"use strict";

import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateTablePermissionsXRol extends BaseSchema {
  protected tableName = "permissions_x_rol";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table.bigInteger("permission_id").unsigned().references("id").inTable("permissions");
      table.bigInteger("rol_id").unsigned().references("id").inTable("roles");
      table.enum("status", [0, 1]).defaultTo(1);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
