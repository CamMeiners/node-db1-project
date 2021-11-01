const express = require('express');

const router = require('./accounts/accounts-router');

const server = express();

server.use(express.json());
server.use('/api/acounts', router);
server.use('*', (req, res) => {
  res.status(404).json({
    message: 'it didnt work man!',
  });
});
module.exports = server;
