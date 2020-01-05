module.exports = {
  name: 'desktop-tab-menu-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/desktop/tab-menu/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
