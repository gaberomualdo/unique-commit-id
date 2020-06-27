const chai = require('chai');
const expect = chai.expect;

const ucid = require('../src/index.js');

const { mvGitDir, mvGitDirBack } = require('./moveGitDir');

describe('Errors with Unique Commit ID Functions', () => {
  beforeEach(mvGitDir);
  afterEach(mvGitDirBack);

  describe('With a directory that is not a repository', () => {
    it('Should throw an error', () => {
      const EXPECTED_ERROR_DESC = `Specified directory '../' and any of its parent directories are not Git repositories.`;

      expect(() => {
        ucid.all('../');
      }).to.throw(EXPECTED_ERROR_DESC);
      expect(() => {
        ucid.latest('../');
      }).to.throw(EXPECTED_ERROR_DESC);
    });
  });
  describe('With a directory that does not exist', () => {
    it('Should throw an error', () => {
      const EXPECTED_ERROR_DESC = `Specified working directory 'test/directory_that_does_not_exist' does not exist.`;

      expect(() => {
        ucid.all('test/directory_that_does_not_exist');
      }).to.throw(EXPECTED_ERROR_DESC);
      expect(() => {
        ucid.latest('test/directory_that_does_not_exist');
      }).to.throw(EXPECTED_ERROR_DESC);
    });
  });

  /*

    |  Some Git installations do not throw an error when attempting to log from a repo that doesn't have any commits.
    |  This test has therefore been commented until any further review.

  describe('With a repository that is malformed (with no commits)', () => {
    it('Should throw an error', () => {
      const EXPECTED_ERROR_DESC = `fatal: your current branch 'master' does not have any commits yet`;
      expect(() => {
        ucid.all('test/test_repo_no_commits');
      }).to.throw(EXPECTED_ERROR_DESC);
    });
  });

  */
});
