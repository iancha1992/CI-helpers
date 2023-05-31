const core = require('@actions/core');
const github = require('@actions/github');

console.log("Javascript hello world!!!!!");

const payload = github.context.payload;

console.log("This is the payload")
console.log(payload)


