const core = require('@actions/core');
const github = require('@actions/github');

console.log("Javascript hello world!!!!!");

const payload = github.context.payload;

console.log("This is the payload")
console.log(payload);


console.log("This is the issue!!!!!")
console.log(payload.issue.number)








// https://api.github.com/repos/iancha1992/gh_practice/issues/8/comments
