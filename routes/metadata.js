const express = require('express'),
  moment = require('moment'),
  mysql = require('mysql'),
  axios = require('axios'),
  multer = require('multer'),
  secrets = require('../config'),
  router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Connect to the mysql database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'image_user',
  password: secrets.password,
  database: 'image_search'
});

router.post('/file-upload', (req, res) => {
  console.log(req);
});



module.exports = router;