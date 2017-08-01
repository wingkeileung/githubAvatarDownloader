var getHTML = require('../getHTML');

function printLowerCase (bufferData) {
  console.log(bufferData.toLowerCase());
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
  };

getHTML(requestOptions, printLowerCase);