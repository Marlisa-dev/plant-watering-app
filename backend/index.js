const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, your server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
