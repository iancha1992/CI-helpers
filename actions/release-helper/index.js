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
    const commentsResponse = await octokit.request(`GET /repos/iancha1992/gh_practice/issues/${issue_number}/comments`, {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    console.log("Comments?")
    console.log(commentsResponse.data)

    function hasForkComment(comments) {
        for (comment of comments) {
            if (comment.body.includes("bazel-io fork")) {
                return true
            }
        }
        return false
    }

    // https://api.github.com/repos/bazelbuild/bazel/issues/18305
    // const git_issue = await octokit.request(`GET /repos/iancha1992/gh_practice/issues/${issue_number}`, {
    //     // owner: 'OWNER',
    //     // repo: 'REPO',
    //     // issue_number: '9',
    //     headers: {
    //         'X-GitHub-Api-Version': '2022-11-28'
    //     }
    // });
    // console.log("git_issue?")
    // console.log(git_issue.data.state)




    if ((payload.issue.state == "closed") && (hasForkComment(commentsResponse.data) == true)) {
        console.log("Good to cherrypick!")
    }



}

myfunction();


console.log("Javascript hello world!!!!!");




console.log("This is the payload")
console.log(payload);

console.log("This is the issue body")
console.log(payload.issue.body)




