const childProcess = require('child_process');

const GET_LATEST_COMMAND = 'git log --abbrev-commit HEAD -1';
const GET_ALL_COMMAND = 'git log --abbrev-commit HEAD';

const findCommitIDs = (command) => {
	const out = childProcess.execSync(command).toString();
	const outLines = out.split('\n');

	const COMMIT_KEYWORD = 'commit';

	const commitIDs = [];

	outLines.forEach((line) => {
		if(line.startsWith(COMMIT_KEYWORD)) {
			const lineWords = line.split(" ");
			const lineCommitID = lineWords[ lineWords.indexOf(COMMIT_KEYWORD) + 1 ];
			commitIDs.push(lineCommitID);
		}
	});

	return commitIDs;
}

module.exports = {
	latest: () => {
		const latestCommitInArr = findCommitIDs(GET_LATEST_COMMAND);
		
		if(latestCommitInArr.length < 1) {
			throw new Error('Internal error: could not get latest commit unique ID from Git. Try checking your Git installation.');
		}

		return latestCommitInArr[0];
	},
	all: () => {
		return findCommitIDs(GET_ALL_COMMAND);
	}
}