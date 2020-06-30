<p align="center">
    <img src="logo/logo.png" width='525' max-width='100%' alt="Unique Commit ID">
</p>

<p align="center">
    <a href="https://github.com/xtrp/unique-commit-id/"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/xtrp/unique-commit-id"></a>
    <a href="https://github.com/xtrp/unique-commit-id/"><img alt="GitHub stars" src="https://img.shields.io/github/stars/xtrp/unique-commit-id?style=social"></a>
    <a href="https://github.com/xtrp"><img alt="GitHub followers" src="https://img.shields.io/github/followers/xtrp?label=Follow%20Fred%20Adams&style=social"></a>
    <a href="https://www.npmjs.com/package/unique-commit-id/"><img alt="NPM Downloads" src="https://img.shields.io/npm/dw/unique-commit-id"></a>
    <img alt="Build Status" src="https://travis-ci.com/xtrp/unique-commit-id.svg?token=QZcgzzn9v2iTArb6wSyC&branch=master">
</p>

Get short unique IDs for commits on Git repositories.

## Download

Unique Commit ID can be downloaded from NPM with the command:

```
npm install unique-commit-id
```

or:

```
yarn add unique-commit-id
```

## Basic Example

Basic example to get unique ID of the latest commit on the current repository:

```javascript
const ucid = require('unique-commit-id');

const latestCommit = ucid.latest(); // ex: '01ef00a'

console.log('Latest commit: ' + latestCommit);
```

## Get ID of Latest Commit

The ```ucid.latest(repoPath)``` function is used to get the ID of the latest commit in a repository.

The optional ```repoPath``` argument is used to specify a path to the Git repo to get the latest commit ID from. The ```repoPath``` can link to anywhere inside a Git repo in which the ```git``` command can successfully be run and used in a repository. If not specified, the function will simply get the latest commit ID from the Git repo in the current directory.

## Get ID of All Commits

The ```ucid.all(repoPath)``` function is used to get an array of IDs of commits in a repository.

The returned array is a list of Strings of commit IDs, with the first commit being at the first index, and the latest commit being at the last index.

Similar to the argument in the ```ucid.latest(repoPath)``` function, the optional ```repoPath``` argument is used to specify a path to the Git repo to get the latest commit ID from. The ```repoPath``` can link to anywhere inside a Git repo in which the ```git``` command can successfully be run and used in a repository. If not specified, the function will simply get the latest commit ID from the Git repo in the current directory.

## Tests

Run ```npm run test``` to run tests. To see test coverage along with running tests, run ```npm run test-with-coverage```.

Make sure Git is installed on the machine running tests and that the ```git``` command is accessible.

There is a test case for testing various functions in a directory that is not a Git repo. For this, the parent directory of the clone of this repo is used. So, **make sure the parent directory of the clone of this repo is not a git repo**.

## Third Party Software Used

 - Mocha and Chai for testing and assertion
 - NYC for test coverage

## File Structure

 - `test` &mdash; includes tests and test directories that are run with `npm run test`.
 - `src` &mdash; the main code for the package.
 - `logo` &mdash; used at the top of the README.

## License and Credits

Unique Commit ID was built solely by web developer and student [Fred Adams](https://xtrp.io/).

The code is completely OSS and is MIT Licensed. See LICENSE.txt for details.
