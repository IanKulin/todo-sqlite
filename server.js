const express = require('express');
const app = express();
const db = require("./db/tasks");
const bodyParser = require( 'body-parser');
 
const hostname = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('index', { title: 'Index'});
});


app.post("/tasks", async (req, res) => {
  const results = await db.createTask(req.body);
  res.status(201).json({ id: results[0] });
});


app.get("/tasks", async (req, res) => {
  const tasks = await db.getAllTasks();
  res.status(200).json({ tasks });
});


app.patch("/tasks/:id", async (req, res) => {
  const id = await db.updateTask(req. params.id, req.body);
  res.status(200).json({ id });
});


app.delete("/tasks/:id", async (req, res) => {
  const id = await db.deleteTask(req. params.id);
  res.status(200).json({ id });
});


//404 handling
app.use(function (req, res, next) {
  res.status(404).render('404', { title: '404', url: req.url });
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});