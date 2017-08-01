var getHTML = require('./getHTML.js');

function printHTML(bufferData) {
  console.log(bufferData);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

getHTML(requestOptions, printHTML);