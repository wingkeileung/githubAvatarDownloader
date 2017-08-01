var getHTML = require('../getHTML');

function reverse (bufferData) {
  console.log(bufferData.split().reverse().join());
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

getHTML(requestOptions, reverse);