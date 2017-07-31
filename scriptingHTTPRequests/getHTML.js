var bufferData = "";

module.exports = function getHTML(url, callback) {
  var https = require('https');

https.get(url, function(response) {
  response.setEncoding('utf8');

  response.on('data', function(data) {
    bufferData += data;
    // console.log(bufferData);
  });
  response.on('end', function() {
    return callback (bufferData);
  });
});
}

// function printHTML(bufferData){
//   console.log(bufferData);
// }

// getHTML(requestOptions, printHTML);