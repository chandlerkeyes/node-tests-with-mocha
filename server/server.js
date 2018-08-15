const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

//GET /users
// Give users a name property and an age property.

app.get('/users', (req, res) => {
  res.send([{
    name: 'Chandler',
    age: 56
  }, {
    name: 'Bob',
    age: 21
  }]);
});

app.listen(3000);

module.exports.app = app;
