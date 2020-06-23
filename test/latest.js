const chai = require('chai');
const expect = chai.expect;

const ucid = require('../src/index.js');

const { mvGitDir, mvGitDirBack } = require('./moveGitDir');

describe('Unique Commit ID .latest Function', () => {
  beforeEach(mvGitDir);
  afterEach(mvGitDirBack);

  describe('With repository at test/test_repo_1/', () => {
    const REPO_LATEST_COMMIT_UID = '9f1caac';
    it('Should have the expected latest unique commit ID', () => {
      expect(ucid.latest('test/test_repo_1')).to.equal(REPO_LATEST_COMMIT_UID);
    });
  });
  describe('With repository at test/test_repo_2/', () => {
    const REPO_LATEST_COMMIT_UID = '70f9f90';
    it('Should have the expected latest unique commit ID', () => {
      expect(ucid.latest('test/test_repo_2')).to.equal(REPO_LATEST_COMMIT_UID);
    });
  });
});
