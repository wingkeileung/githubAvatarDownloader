var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

 var body, bufferData = "";

https.get(requestOptions, (response) => {
  response.setEncoding('utf8');

  response.on('data', function(data) {
    bufferData += data;
    console.log(bufferData);
  });
  response.on('end', function() {
    console.log('Response stream complete.' + body);
  });
});
}
function printHTML (htmlData){
  console.log(htmlData);
}
getAndPrintHTML();
