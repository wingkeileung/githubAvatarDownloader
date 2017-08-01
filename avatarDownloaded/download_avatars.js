var request = require('request');
var fs = require('fs');
var newBody = "";
var wtf = process.argv.slice(2);

var GITHUB_USER = "wingkeileung"
var GITHUB_TOKEN = "95f23002c8c37a6c0d003a396db47ee326476562"

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
var options = {
  url: requestURL,
  headers: {"User-Agent": "GitHub Avatar Downloader - Student project"}
}

request(options, function(err, respnose, body) {
  newBody = JSON.parse(body)
  cb(null, newBody)
  // console.log(newBody)
})

}
function downloadImageByURL(url, filepath){
  request.get(url)
    .on('error', function (err) {
      throw err;
    })
    .on('response', function (response) {
      console.log('Response Status Code: ', response.statusCode, response.statusMessage, response.headers['content-type']);
    })
    .pipe(fs.createWriteStream(filepath));
}

getRepoContributors(wtf[0], wtf[1], function(err, result) {
  if (!wtf[0] || !wtf[1] ){
    console.log ("ERROR - NO INPUT")
  } else {
    for (var i = 0; i < result.length; i++) {
    downloadImageByURL(result[i].avatar_url, "avatars/"+result[i].login);
  }
}
});