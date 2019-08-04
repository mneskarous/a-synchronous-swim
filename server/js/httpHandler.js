const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
var http = require('http');

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
  }
  if (req.method === 'GET') {
    // create array of commands
    const directions = ['up', 'down', 'left', 'right'];
    // randomize index
    var index = Math.floor(Math.random() * 4);

    res.writeHead(200, headers);
    // console.log('get got');
    // respond with a random command
    // res.end(directions[index]);
    // dequeue the messagedown
    res.end(messageQueue.dequeue());
    next();
  }
};

