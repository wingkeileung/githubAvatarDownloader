var getHTML = require('../getHTML');

function printUpperCase (bufferData) {
  console.log(bufferData.toUpperCase());
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };

getHTML(requestOptions, printUpperCase);