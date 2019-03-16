import http from 'http';

const server = http.createServer();
server.on('request', (req, res) => {
   res.write('Hello http 8081');
   res.end();
});

const newServer = http.createServer((req, res) => {
   res.write('Hello http 8082\n');
   setTimeout(() => {
     res.write('I can stream after 5 sec');
     res.end();
   }, 5000);
});

server.listen(8081);
newServer.listen(8082);
