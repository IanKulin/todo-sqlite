const knex = require("./knex");

/*
CREATE TABLE "tasks" (
	"id"	INTEGER,
	"task"	TEXT,
	"completed"	INTEGER DEFAULT 0,
	PRIMARY KEY("id" AUTOINCREMENT)
)
*/


function createTask(task) {
    return knex("tasks").insert(task);
};


function getAllTasks() {
    return knex("tasks").select("*");
};


function deleteTask(id) {
    return knex("tasks").where("id", id).del();
};


function updateTask(id, task) {
    return knex("tasks").where("id", id).update(task);
};


module.exports = {
    createTask,
    getAllTasks,
    deleteTask,
    updateTask
};

