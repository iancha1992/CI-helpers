const core = require('@actions/core');
const github = require('@actions/github');


const token = core.getInput("token");
const octokit = github.getOctokit(token);

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: 'YOUR-TOKEN'
// })
console.log("Testing adam")
const payload = github.context.payload;
const issue_number = payload.issue.number;


async function myfunction() {
    console.log("Running myfunction")
    const result = await octokit.request(`GET /repos/iancha1992/gh_practice/issues/${issue_number}/comments`, {
        owner: 'OWNER',
        repo: 'REPO',
        // issue_number: '9',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    console.log("Result?")
    console.log(result.data)
    
}

myfunction();


console.log("Javascript hello world!!!!!");




console.log("This is the payload")
console.log(payload);

console.log("This is the issue body")
console.log(payload.issue.body)




// https://api.github.com/repos/iancha1992/gh_practice/issues/8/comments











