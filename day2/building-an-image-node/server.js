const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Building a docker image for a node server');
});

const responses = {
  a: 'codecool',
  b: 'mbh',
  c: 'docker',
  d: 'github'
};

app.get('/company/:id', (req, res) => {
  const response = responses[req.params.id] || 'Unknown';
  res.send(response);
});

app.listen(PORT, () => console.log(`Server is listenig on ${PORT}`));
