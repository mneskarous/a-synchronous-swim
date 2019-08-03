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

const randomizeDirection = function() {
  var dirs = ['up', 'down', 'left', 'right'];
  var dirIndex = Math.floor(Math.random() * 4);
  return dirs[dirIndex];
}



module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'OPTIONS') {
    console.log('request receive');
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(randomizeDirection());
    res.end();
  } else {
    console.log('get failed')
    // console.log(req.method);
    res.writeHead(404, headers);
    res.end();
  }
  next(); // invoke next() at the end of a request to help with testing!
};

