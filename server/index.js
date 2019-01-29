const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', (req, rest, next) => {
  console.log('Hello There.')
});

app.listen(3000, () => {
  console.log(`Server runing on port... ${PORT}`);
});