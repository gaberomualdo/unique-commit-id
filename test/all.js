const chai = require('chai')
const expect = chai.expect

const ucid = require('../src/index.js');

describe('Unique Commit ID .all Function', () => {
	describe('With repository at test/test_repo_1/', () => {
		const EXPECTED_COMMIT_IDS = [ '011e914', '9af0b6c', '5579025', 'bf052cd', '962ae7f', 'f3d0960', '5598077', '9f1caac' ]
		it('Should have the expected unique commit IDs', () => {
			expect(ucid.all('test/test_repo_1')).to.deep.equal(EXPECTED_COMMIT_IDS);
		});
	});
	describe('With repository at test/test_repo_2/', () => {
		const EXPECTED_COMMIT_IDS = [ '503a26e', 'dc4187e', '4d2755b', '92c8783', '70f9f90' ];
		it('Should have the expected unique commit IDs', () => {
			expect(ucid.all('test/test_repo_2')).to.deep.equal(EXPECTED_COMMIT_IDS);
		});
	});

	describe('With a directory that is not a repository', () => {
		it('Should throw an error', () => {
			expect(() => {
				ucid.all('../');
			}).to.throw(`Specified directory '../' and any of its parent directories are not Git repositories.`);
		});
	});
	describe('With a directory that does not exist', () => {
		it('Should throw an error', () => {
			expect(() => {
				ucid.all('test/directory_that_does_not_exist');
			}).to.throw(`Specified working directory 'test/directory_that_does_not_exist' does not exist.`);
		});
	});
});