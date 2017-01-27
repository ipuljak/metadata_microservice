// Server requirements
const express = require('express'),
  bodyparser = require('body-parser'),
  methodOverride = require('method-override'),
  cors = require('cors'),
  app = express();

// Routes requirements
const metadata = require('./routes/metadata');

// Server setup
app.use(cors());
app.use(bodyparser.json({ type: '*/*' }));
app.use(methodOverride('_method'));

// Server index file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Server routes
app.use('/', metadata);

// Server port listen
app.listen(5004, process.env.IP, () => {
  console.log('File Metadata server started on port 5004.');
});