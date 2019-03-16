import config from './config';
import express from 'express';

const server = express();
server.get('/', (req, res) => {
  res.send("Hello Express");
}).listen(3000);
