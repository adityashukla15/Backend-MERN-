const path = require('path');
const rootDir = require('./utils/pathUtil');
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

// Fix 1: urlencoded should be a function
app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(contactRouter);

// 404 page
app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3001;

// Fix 2: remove stray text
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
