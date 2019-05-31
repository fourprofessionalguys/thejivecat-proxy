const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

app.get('/', function(req, res) {
  res.redirect(`/listings/${Math.floor(Math.random() * 99) + 1}`);
});

//Middleware
app.use(express.static(__dirname + '/../Public'));

app.get('/listings/:id', function(req, res) {
  const reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});

app.use('/listings/:id',
  proxy({
    target: 'http://127.0.0.1:3001'
  })
);

app.use('/api/listings/:id/tour',
  proxy({
    target: 'http://127.0.0.1:3002'
  })
);

app.use('/amenities/:id',
  proxy({
    target: 'http://127.0.0.1:3003'
  })
);

app.use(
  '/reviews/:id',
  proxy({
    target: 'http://127.0.0.1:3004'
  })
);

app.use('/host/id/:id',
  proxy({
    target: 'http://127.0.0.1:3005'
  })
)

//Start server
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));