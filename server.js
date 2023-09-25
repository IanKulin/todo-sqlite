const express = require('express');
const app = express();
 
const hostname = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index', { title: 'Index'});
  });


//404 handling
app.use(function (req, res, next) {
  res.status(404).render('404', { title: '404', url: req.url });
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});