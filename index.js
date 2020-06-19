const childProcess = require('child_process');

const GIT_COMMANDS = {
	latestCommit: 'git log --abbrev-commit HEAD -1',
	allCommits: 'git log --abbrev-commit HEAD',
};

const ERROR_MESSAGES = {
	getLatestCommitFailed: 'Internal error: could not get latest commit unique ID from Git. Try checking your Git installation.',
};

const getCommitIDsFromCommand = (command) => {
	const out = childProcess.execSync(command).toString();
	const outLines = out.split('\n');

	const COMMIT_KEYWORD = 'commit';

	const commitIDs = [];

	outLines.forEach((line) => {
		if(line.startsWith(COMMIT_KEYWORD)) {
			const lineWords = line.split(' ');
			const lineCommitID = lineWords[ lineWords.indexOf(COMMIT_KEYWORD) + 1 ];
			commitIDs.push(lineCommitID);
		}
	});

	return commitIDs;
}

module.exports = {
	latest: () => {
		const latestCommitInArr = getCommitIDsFromCommand(GIT_COMMANDS['latestCommit']);
		
		if(latestCommitInArr.length < 1) {
			throw new Error(ERROR_MESSAGES['getLatestCommitFailed']);
		}

		return latestCommitInArr[0];
	},
	all: () => {
		return getCommitIDsFromCommand(GIT_COMMANDS['allCommits']);
	}
}