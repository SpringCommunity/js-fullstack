import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api/index';

const server = express();
/* set view to ejs */
server.set('view engine', 'ejs');
/* handle the home page */
server.get('/', (req, res) => {
  res.send('Hello Express');
});
/* handle index.ejs file */
server.get('/ejs', (req, res) => {
  res.render('index', {
    ejsTitle: 'Hello EJS',
    ejsHeader: 'This is header',
    ejsFooter: 'This is footer',
    randomNumber: Math.random(),
    todayDate: new Date(),
  });
});

/* handle about page */
/*server.get('/about', (req, res) => {
  res.send("This is about page");
});*/

/* handle about html */
server.get('/about', (req, res) => {
  fs.readFile('./about.html', (err, data) => {
     res.send(data.toString());
  });
});

/* handle all html files from public folder */
server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
   console.info('Express listening on port: ', config.port);
});
