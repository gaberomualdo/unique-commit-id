# Unique Commit ID
Get a unique ID for each commit from the current Git repository.

<p align="center">
    <img src="logo.png" height="80" alt="Unique Commit ID">
</p>
<p align="center">
    <a href="https://github.com/xtrp/unique-commit-id/"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/xtrp/unique-commit-id"></a>
    <a href="https://github.com/xtrp/unique-commit-id/"><img alt="GitHub stars" src="https://img.shields.io/github/stars/xtrp/unique-commit-id?style=social"></a>
    <a href="https://github.com/xtrp"><img alt="GitHub followers" src="https://img.shields.io/github/followers/xtrp?label=Follow%20Fred%20Adams&style=social"></a>
    <a href="https://www.npmjs.com/package/unique-commit-id/"><img alt="NPM Downloads" src="https://img.shields.io/npm/dw/unique-commit-id"></a>
</p>

Get a short unique commit ID for commits on Git repositories.

## Download

Unique Commit ID can be downloaded from NPM with the command:

```
npm install unique-commit-id
```

or:

```
yarn install unique-commit-id
```

## Basic Example

Basic example to get unique ID of the latest commit on the current repository:

```
const ucid = require('unique-commit-id');

const latestCommit = ucid.latest(); # ex: '01ef00a'

console.log('Latest commit: ' + latestCommit);
```

## Get ID of Latest Commit

The ```ucid.latest(repoPath)``` function is used to get the ID of the latest commit in a repository.

The optional ```repoPath``` argument is used to specify a path to the Git repo to get the latest commit ID from. The ```repoPath``` can link to anywhere inside a Git repo in which the ```git``` command can successfully be run and used in a repository. If not specified, the function will simply get the latest commit ID from the Git repo in the current directory.

## Get ID of All Commits

The ```ucid.all(repoPath)``` function is used to get an array of IDs of commits in a repository.

The returned array is a list of Strings of commit IDs, with the first commit being at the first index, and the latest commit being at the last index.

Similar to the argument in the ```ucid.latest(repoPath)``` function, the optional ```repoPath``` argument is used to specify a path to the Git repo to get the latest commit ID from. The ```repoPath``` can link to anywhere inside a Git repo in which the ```git``` command can successfully be run and used in a repository. If not specified, the function will simply get the latest commit ID from the Git repo in the current directory.

## More Example Usages

Unique

## Tech Stack

 - HTML, CSS, and Javascript (ES6) &mdash; Public Site
 - PHP &mdash; Public Routes to Update Cases (includes web scraping for cases) and Press Video Data
 - Node.js/Express.js &mdash; Local web server to scrape W.H.O. site for latest press video
 - Python &mdash; Cronjobs to request PHP servers and local servers

## Third Party Software Used

 - Various NPM packages including Express.js, Puppeteer, and more
 - Various Python/PyPi modules including requests, scheduler, and more
 - [NewsAPI](https://newsapi.org/) for fetching latest news
 - [Moment.js](https://momentjs.com/) for displaying dates and times nicely

## File Structure

 - `cronjobs` &mdash; Python programs to create services that run periodically to update data for the site.
 - `scrapers` &mdash; Web scrapers to scrape third-party sites for data.
 - `site` &mdash; The main frontend site written in plain HTML, CSS, and JavaScript.
 - `site/server` &mdash; Files which run on the server to update public data for the frontend site. These files are then called/requested by the cronjobs.

## License and Credits

Unique Commit ID was built solely by web developer and student [Fred Adams](https://xtrp.io/).

The code is completely OSS and is MIT Licensed. See LICENSE.txt for details.