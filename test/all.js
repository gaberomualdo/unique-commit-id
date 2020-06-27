const chai = require('chai');
const expect = chai.expect;

const ucid = require('../src/index.js');

const { mvGitDir, mvGitDirBack } = require('./moveGitDir');

describe('Unique Commit ID .all Function', () => {
  beforeEach(mvGitDir);
  afterEach(mvGitDirBack);

  describe('With abbreviated (which is the default) commit IDs', () => {
    describe('With repository at test/test_repo_1/', () => {
      const EXPECTED_COMMIT_IDS = ['011e914', '9af0b6c', '5579025', 'bf052cd', '962ae7f', 'f3d0960', '5598077', '9f1caac'];
      it('Should have the expected unique commit IDs', () => {
        expect(ucid.all('test/test_repo_1')).to.deep.equal(EXPECTED_COMMIT_IDS);
      });
    });
    describe('With repository at test/test_repo_2/', () => {
      const EXPECTED_COMMIT_IDS = ['503a26e', 'dc4187e', '4d2755b', '92c8783', '70f9f90'];
      it('Should have the expected unique commit IDs', () => {
        expect(ucid.all('test/test_repo_2')).to.deep.equal(EXPECTED_COMMIT_IDS);
      });
    });
  });

  describe('With full (not abbreviated) commit IDs', () => {
    describe('With repository at test/test_repo_1/', () => {
      const EXPECTED_COMMIT_IDS = [
        '011e91457f0136f4fec37906d20140469ff27197',
        '9af0b6c57c6e29aaa6b4960263fd5e25b22622e8',
        '557902516ec59910c2a62215c12606b91a32cb7a',
        'bf052cd0790eb6190cbb13763830df8848c32b5d',
        '962ae7fbba88cc1311213de90bbdffa936b33474',
        'f3d0960f6da6e7f40e32882f4f0977daf2585287',
        '5598077b05f29fd617cb44c1dca3f7a5192efd91',
        '9f1caacb6ddfda72e9b79f470db484a50aae26bc',
      ];
      it('Should have the expected unique commit IDs', () => {
        expect(ucid.all('test/test_repo_1', { abbreviate: false })).to.deep.equal(EXPECTED_COMMIT_IDS);
      });
    });
    describe('With repository at test/test_repo_2/', () => {
      const EXPECTED_COMMIT_IDS = [
        '503a26e185603e298bac7b6a7c74e0942007a7d2',
        'dc4187e2c943ef0d002c2b1f332d57497bbf727a',
        '4d2755ba67912388dbd2d91a5b96f487b95d826e',
        '92c8783ff53494ca80ea913957ef96d424e0b0be',
        '70f9f90d72a7cd2d89f0794ebab88890f0d4cac1',
      ];
      it('Should have the expected unique commit IDs', () => {
        expect(ucid.all('test/test_repo_2', { abbreviate: false })).to.deep.equal(EXPECTED_COMMIT_IDS);
      });
    });
  });
});
