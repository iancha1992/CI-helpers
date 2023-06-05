const core = require('@actions/core');
const github = require('@actions/github');


const token = core.getInput("token");
const octokit = github.getOctokit(token);

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: 'YOUR-TOKEN'
// })

// https://api.github.com/repos/bazelbuild/bazel/issues/18305/comments
// https://api.github.com/repos/bazelbuild/bazel/issues/18305
// https://api.github.com/repos/bazelbuild/bazel/issues/18305/events


// 1) closed -> issue (https://api.github.com/repos/bazelbuild/bazel/issues/18305)
// 2) bazel-io fork -> comments (https://api.github.com/repos/bazelbuild/bazel/issues/18305/comments)
// 3) copybara -> events (https://api.github.com/repos/bazelbuild/bazel/issues/18305/events)
// 4) approved -> dont' need...


console.log("Testing adam")
const payload = github.context.payload;
const issue_number = payload.issue.number;


async function myfunction() {
    console.log("Running myfunction")
    const comments = await octokit.request(`GET /repos/iancha1992/gh_practice/issues/${issue_number}/comments`, {
        // owner: 'OWNER',
        // repo: 'REPO',
        // issue_number: '9',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    console.log("Comments?")
    console.log(comments.data)

    for (let comment in comments.data) {
        console.log("guardian")
        console.log(comment)
    }










    // https://api.github.com/repos/bazelbuild/bazel/issues/18305
    const git_issue = await octokit.request(`GET /repos/iancha1992/gh_practice/issues/${issue_number}`, {
        // owner: 'OWNER',
        // repo: 'REPO',
        // issue_number: '9',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    console.log("git_issue?")
    console.log(git_issue.data.state)

    // if (git_issue_data.state == "closed") && (comments.data.) && () {

    // }



}

myfunction();


console.log("Javascript hello world!!!!!");




console.log("This is the payload")
console.log(payload);

console.log("This is the issue body")
console.log(payload.issue.body)














