var request = require('request');
var fs = require('fs');
var newBody = "";

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
  cb(err, newBody)
  console.log(newBody)
})

}
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log(newBody)
});