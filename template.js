/*
 * grunt-gbase
 * https://goliatone.com/
 *
 * Copyright (c) 2013 goliatone
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a base library template.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ should not contain "jquery" or "js" and ' +
  'should be a unique ID not already in use at plugins.jquery.com. _Project ' +
  'title_ should be a human-readable title, and doesn\'t need to contain ' +
  'the word "jQuery", although it may. For example, a plugin titled "Awesome ' +
  'Plugin" might have the name "awesome-plugin".';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _sudo npm ' +
  'install && bower install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'gbase'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'The most awesome shit ever.'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name', 'goliatone'),
    init.prompt('author_email', 'hello@goliatone.com'),
    init.prompt('author_url', 'http://goliatone.com')
    // init.prompt('requirejs')
  ], function(err, props) {
    // A few additional properties.
    props.packageName = 'package.json';
    props.dependencies = {require: props.requirejs || '~2.1.4'};
    props.destpath = init.destpath();

    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: 'jquery-plugin',
      version: '0.0.0-ignored',
      npm_test: 'grunt karma:ci',
      // TODO: pull from grunt's package.json
      node_version: '>= 0.8.0',
      devDependencies: {
        'grunt': '~0.4',
        'grunt-cli': '~0.1',
        'grunt-contrib-copy': '~0.4.0',
        'grunt-contrib-concat': '~0.1.3',
        'grunt-contrib-uglify': '~0.2.0',
        'grunt-contrib-jshint': '~0.3.0',
        'grunt-contrib-connect': '~0.2.0',
        'grunt-contrib-clean': '~0.4.0',
        'grunt-contrib-livereload': '~0.1.2',
        'grunt-bower-requirejs': '~0.4.1',
        'grunt-regarde': '~0.1.1',
        'grunt-karma': '~0.3.0',
        'grunt-open': '~0.2.0',
        'matchdep': '~0.1.1',
        'grunt-google-cdn': '~0.1.1',
        'markdown': '~0.4.0'
      }
    });

    // All done!
    done();
  });

};
