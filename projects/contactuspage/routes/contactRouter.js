const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathUtil');

const contactRouter = express.Router();

contactRouter.get('/contact-us', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

contactRouter.post('/contact-us', (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'contact-added.html'));
});

module.exports = contactRouter;
