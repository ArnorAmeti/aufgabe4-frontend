const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/M152-Projekt-Frontend'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/M152-Projekt-Frontend/index.html');
});

// default Heroku port
app.listen(process.env.PORT || 5000);

