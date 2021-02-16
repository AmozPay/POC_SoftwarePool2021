const express = require('express');
const server = express();

server.get('/Hello', (req: any, res: any) => {
  res.send('world');
});
let obj  = {
  name: 'json object',
  description: 'This is a json object'
};

server.get('/obj', (req: any, res: any) => {
  res.send(obj);
})
console.log('Server Ready!');
server.listen(8080);
