const knex = require( "knex");

const connectedKnex = knex({
    client: "sqlite",
    connection: {
        filename: "todo-items.sqlite3"
    }
});

module.exports = connectedKnex;