const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const server = express();

server.use(bodyParser.json());
server.use(cookieParser());

server.get('/Hello', (req: any, res: any) => {
  res.send(200, 'world');
});

server.get('/repeat-my-query/', (req: any, res: any) => {
  const { message } = req.query;
  if (message) {
    res.send(200, message);
  } else {
    res.send(400, 'Bad request');
  }
});

server.get('/repeat-my-param/:message', (req: any, res: any) => {
  const params = req.params.message;
  res.send(params);
});

server.post('/repeat-my-body', (req: any, res: any) => {
  console.log('post detected');
  if (req.body.message) {
    res.send(req.body.message);
  } else {
    res.send(400, 'Bad Request');
  }// upcoming feature
});

server.get('/repeat-my-header', (req: any, res: any) => {
  console.log('request received: header');
  if (req.header('X-message')) {
    const message = req.header('X-message');
    res.send(message);
  } else {
    res.send(400, 'Bad Request');
  } // upcoming feature
});

server.get('/repeat-my-cookie', (req: any, res: any) => {
  console.log('Yummy Cookie');
  if (req.cookies.message) {
    const cookieMessage = req.cookies.message;
    res.send(cookieMessage);
  } else {
    res.send(400, 'Bad Request');
  }
});

console.log('Server Ready!');
server.listen(8080);
