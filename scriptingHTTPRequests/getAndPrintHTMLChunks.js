var https = require('https');

function getAndPrintHTMLChunks (host) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

var body = "";

https.get(requestOptions, (response) => {
  response.setEncoding('utf8');

  response.on('data', function(data) {
    console.log('Chunk Received.', data + "\n");
  });

  response.on('end', function() {
    console.log('Response stream complete.' + body);
  });
});
}
function printHTML (htmlData){
  console.log(htmlData);
}
getAndPrintHTMLChunks();