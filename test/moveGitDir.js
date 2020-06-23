const fs = require('fs');
const path = require('path');

const gitRepos = ['test_repo_1/', 'test_repo_2/', 'test_repo_no_commits/'];

const gitReposAbs = gitRepos.map((e) => './test/' + e);

module.exports = {
  mvGitDir: () => {
    gitReposAbs.forEach((repo) => {
      fs.renameSync(repo + '.git_dir_placeholder', repo + '.git');
    });
  },
  mvGitDirBack: () => {
    gitReposAbs.forEach((repo) => {
      fs.renameSync(repo + '.git', repo + '.git_dir_placeholder');
    });
  },
};
