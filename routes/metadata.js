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

/**
 *  POST route to upload file to the server. 
 *    To use, select a file through the form and click submit.
 */
router.post('/file_upload', upload.single('givenFile'), (req, res, next) => {
  // Send the information to the user
  res.send({
    filename: req.file.originalname,
    size: req.file.size,
    type: req.file.mimetype
  });
});

module.exports = router;