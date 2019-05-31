const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middleware
console.log(__dirname);
app.use(express.static(__dirname + '/../Public'));
app.use(bodyParser.json());

//Start server
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));