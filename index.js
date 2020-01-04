const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log('Server listen at port ', port);
});

