const chai = require('chai');
const expect = chai.expect;

const ucid = require('../src/index.js');

const { mvGitDir, mvGitDirBack } = require('./moveGitDir');

describe('Unique Commit ID .latest Function', () => {
  beforeEach(mvGitDir);
  afterEach(mvGitDirBack);

  describe('With an abbreviated (which is the default) commit ID', () => {
    describe('With repository at test/test_repo_1/', () => {
      const EXPECTED_LATEST_COMMIT_ID = '9f1caac';
      it('Should have the expected latest unique commit ID', () => {
        expect(ucid.latest('test/test_repo_1')).to.equal(EXPECTED_LATEST_COMMIT_ID);
      });
    });
    describe('With repository at test/test_repo_2/', () => {
      const EXPECTED_LATEST_COMMIT_ID = '70f9f90';
      it('Should have the expected latest unique commit ID', () => {
        expect(ucid.latest('test/test_repo_2')).to.equal(EXPECTED_LATEST_COMMIT_ID);
      });
    });
  });

  describe('With a full (not abbreviated) commit ID', () => {
    describe('With repository at test/test_repo_1/', () => {
      const EXPECTED_LATEST_COMMIT_ID = '9f1caacb6ddfda72e9b79f470db484a50aae26bc';
      it('Should have the expected unique commit IDs', () => {
        expect(ucid.latest('test/test_repo_1', { abbreviate: false })).to.deep.equal(EXPECTED_LATEST_COMMIT_ID);
      });
    });
    describe('With repository at test/test_repo_2/', () => {
      const EXPECTED_LATEST_COMMIT_ID = '70f9f90d72a7cd2d89f0794ebab88890f0d4cac1';
      it('Should have the expected unique commit IDs', () => {
        expect(ucid.latest('test/test_repo_2', { abbreviate: false })).to.deep.equal(EXPECTED_LATEST_COMMIT_ID);
      });
    });
  });
});
