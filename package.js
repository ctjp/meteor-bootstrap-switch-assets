Package.describe({
  name: 'ctjp:meteor-bootstrap-switch-assets',
  summary: 'Assets from https://github.com/nostalgiaz/bootstrap-switch',
  version: '3.3.1_1',
  git: 'https://github.com/ctjp/meteor-bootstrap-switch-assets.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  //== Add files
  // Client only
  api.addFiles('bootstrap-switch/dist/js/bootstrap-switch.js', 'client');

  // Server only
  api.addFiles('bootstrap-switch-assets.js', 'server');

  // Assets
  api.addFiles([
    // Bootstrap 2 Theme
    'bootstrap-switch/src/less/bootstrap2/bootstrap-switch.less',
    'bootstrap-switch/src/less/bootstrap2/build.less',
    'bootstrap-switch/src/less/bootstrap2/mixins.less',
    'bootstrap-switch/src/less/bootstrap2/variables.less',

    // Bootstrap 3 Theme
    'bootstrap-switch/src/less/bootstrap3/bootstrap-switch.less',
    'bootstrap-switch/src/less/bootstrap3/build.less',
    'bootstrap-switch/src/less/bootstrap3/mixins.less',
    'bootstrap-switch/src/less/bootstrap3/variables.less'
  ], 'server', { isAsset: true });

  api.export(['BootstrapSwitchAssets']);
});
