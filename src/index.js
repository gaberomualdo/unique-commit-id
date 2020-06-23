const childProcess = require('child_process');
const fs = require('fs');

const GIT_COMMANDS = {
  latestCommit: 'git log --abbrev-commit -1',
  allCommits: 'git log --abbrev-commit',
};

const getCommitIDsFromCommand = (command, workingDir) => {
  if (!fs.existsSync(workingDir)) {
    throw new Error(`Specified working directory '${workingDir}' does not exist.`);
  }

  let out;

  (() => {
    const commandWords = command.split(' ');
    const spawnCommand = childProcess.spawnSync(commandWords[0], commandWords.slice(1, commandWords.length), {
      cwd: workingDir,
    });

    const commandErrors = spawnCommand.stderr.toString().trim();

    if (commandErrors) {
      if (commandErrors.startsWith('fatal: not a git repository')) {
        throw new Error(`Specified directory '${workingDir}' and any of its parent directories are not Git repositories.`);
      } else {
        throw new Error(commandErrors);
      }
    }

    out = spawnCommand.stdout.toString().trim();
  })();

  const outLines = out.split('\n');

  const COMMIT_KEYWORD = 'commit';

  const commitIDs = [];

  outLines.forEach((line) => {
    if (line.startsWith(COMMIT_KEYWORD)) {
      const lineWords = line.split(' ');
      const lineCommitID = lineWords[lineWords.indexOf(COMMIT_KEYWORD) + 1];
      commitIDs.push(lineCommitID);
    }
  });

  return commitIDs;
};

module.exports = {
  latest: (repoDir = './') => {
    const latestCommitAsArr = getCommitIDsFromCommand(GIT_COMMANDS['latestCommit'], repoDir);
    return latestCommitAsArr[0];
  },
  all: (repoDir = './') => {
    const commitsLatestToFirst = getCommitIDsFromCommand(GIT_COMMANDS['allCommits'], repoDir);

    const commitsFirstToLatest = commitsLatestToFirst.reverse();
    return commitsFirstToLatest;
  },
};
