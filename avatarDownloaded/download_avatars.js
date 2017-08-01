var request = require('request');
var fs = require('fs');

var GITHUB_USER = "wingkeileung"
var GITHUB_TOKEN = "95f23002c8c37a6c0d003a396db47ee326476562;"

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

request.get(requestURL)
  .on('error', function (err) {
      throw err
    console.log("Errors:", err);
  })
  .on('response', function (result) {
    console.log("Result:", result);
    console.log(requestURL);
  });
}
getRepoContributors("jquery", "jquery", function(err, result) {
});