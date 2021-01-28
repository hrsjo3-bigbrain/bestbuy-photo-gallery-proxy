const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
app.use('/products/:id', express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});

module.exports = app;

