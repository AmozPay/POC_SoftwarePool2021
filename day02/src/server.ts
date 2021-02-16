import StatusCodes from 'http-status-codes';
import * as config from './serverConfig';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const server = express();
server.use(bodyParser.json());
server.use(cookieParser());

server.get('/hello', (req: any, res: any) => {
  if (config.HELLO === 'No Message defined') {
    res.send(StatusCodes.NOT_FOUND, config.HELLO);
  } else {
    res.send(config.HELLO);
  }
});

server.get('/repeat-my-query/', (req: any, res: any) => {
  const { message } = req.query;
  if (message) {
    res.send(StatusCodes.OK, message);
  } else {
    res.send(StatusCodes.BAD_REQUEST, 'Bad request');
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
    res.send(StatusCodes.BAD_REQUEST, 'Bad Request');
  }// upcoming feature
});

server.get('/repeat-my-header', (req: any, res: any) => {
  console.log('request received: header');
  if (req.header('X-message')) {
    const message = req.header('X-message');
    res.send(message);
  } else {
    res.send(StatusCodes.BAD_REQUEST, 'Bad Request');
  } // upcoming feature
});

server.get('/repeat-my-cookie', (req: any, res: any) => {
  console.log('Yummy Cookie');
  if (req.cookies.message) {
    const cookieMessage = req.cookies.message;
    res.send(cookieMessage);
  } else {
    res.send(StatusCodes.BAD_REQUEST, 'Bad Request');
  }
});

console.log('Server Ready!');
server.listen(config.PORT);
