function getHTML (url, printHTML) {
  var https = require('https');
  var bufferData = "";

https.get(url, function(response) {
  response.setEncoding('utf8');

  response.on('data', function(data) {
    bufferData += data;
  });
  response.on('end', function() {
    printHTML(bufferData);
  });
});
}

function printHTML(bufferData){
  console.log(bufferData);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
getHTML(requestOptions, printHTML);
