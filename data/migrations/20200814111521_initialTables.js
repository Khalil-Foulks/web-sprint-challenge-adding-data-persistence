
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
        tbl.increments("id");
        tbl.string("project_name", 255).notNullable().unique();
        tbl.text("description");
        tbl.boolean("completed").defaultTo(false);
    })
    .createTable("resources", tbl => {
        tbl.increments("id");
        tbl.string("resource_name", 255).notNullable().unique();
        tbl.text("description");
    })
    .createTable("tasks", tbl => {
        tbl.increments("id");
        tbl.string("description").notNullable();
        tbl.text("notes");
        tbl.boolean("completed").defaultTo(false);
        tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("project_resources", tbl => {
        tbl.increments("id");
        tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects")
};
