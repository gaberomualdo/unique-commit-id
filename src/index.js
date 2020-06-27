const childProcess = require('child_process');
const fs = require('fs');

const GIT_COMMAND_DATA = {
  latestCommit: 'git log -1',
  allCommits: 'git log',
  abbreviateFlag: '--abbrev-commit',
};

const DEFAULT_OPTIONS = {
  abbreviate: true,
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

const createCommand = (command, options) => {
  options = evaluateOptions(options);

  if (options.abbreviate) {
    return [command, GIT_COMMAND_DATA['abbreviateFlag']].join(' ');
  }

  return command;
};

const evaluateOptions = (options) => {
  const toReturn = {};
  Object.keys(DEFAULT_OPTIONS).forEach((key) => {
    if (options.hasOwnProperty(key)) {
      toReturn[key] = options[key];
    } else {
      toReturn[key] = DEFAULT_OPTIONS[key];
    }
  });

  return toReturn;
};

module.exports = {
  latest: (repoDir = './', options = {}) => {
    const command = createCommand(GIT_COMMAND_DATA['latestCommit'], options);
    const latestCommitAsArr = getCommitIDsFromCommand(command, repoDir);
    return latestCommitAsArr[0];
  },
  all: (repoDir = './', options = {}) => {
    const command = createCommand(GIT_COMMAND_DATA['allCommits'], options);
    const commitsLatestToFirst = getCommitIDsFromCommand(command, repoDir);

    const commitsFirstToLatest = commitsLatestToFirst.reverse();
    return commitsFirstToLatest;
  },
};
