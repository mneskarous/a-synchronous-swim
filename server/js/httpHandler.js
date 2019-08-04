const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
var http = require('http');

let messageQueue = require('./messageQueue');
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
  }

  if (req.method === 'GET') {
    if (req.url === '/') {

      // create array of commands
      // const directions = ['up', 'down', 'left', 'right'];
      // randomize index
      // let index = Math.floor(Math.random() * 4);

      res.writeHead(200, headers);

      // respond with a random command
      // res.end(directions[index]);

      // dequeue the messagedown
      res.end(messageQueue.dequeue());
      next();
    } else if (req.url === '/background.jpg') {
      fs.readFile(module.exports.backgroundImageFile, (err, data) => {
        if (err) {
          res.writeHead(404, headers);
        } else {
          res.writeHead(200, headers);
          res.write(data, 'binary');
        }
        res.end();
        next();
      });
    }
  }
  if (req.method === 'POST' && req.url === '/background.jpg') {
    var fileData = Buffer.alloc(0);

    req.on('data', (chunk) => {
      fileData = Buffer.concat([fileData, chunk]);
    });

    req.on('end', () => {
      fs.writeFile(module.exports.backgroundImageFile, fileData, (err) => {
        res.writeHead(err ? 400 : 201, headers);
        res.end();
        next();
      });
    });
  }
};

