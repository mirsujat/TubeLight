'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
    /**
    * File Paths
    */
    var temp = './.tmp/';
    
  var client = {
      lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        // endbower
      ],
      js: [
        // bower:js
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-bootstrap/ui-bootstrap.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-touch/angular-touch.js',
        'client/bower_components/moment/moment.js'
        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      './src/client/assets/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      './src/client/assets/sass/*.scss'
    ],
    js: [
      './src/client/common/directives/**/*.js',
      './src/client/common/security/**/*.js',
      './src/client/common/services/**/*.js',
      './src/client/app/core/**/*.js',
      './src/client/app/**/*index.js',
      './src/client/app/**/*.js',
      './src/client/app/**/*app.js',
      './.tmp/templates/**/*.js'
    ],
    img: [
        './src/client/assets/img/**/*.*'
    ],
    font: ['./src/client/assets/css/font-awesome-4.7.0/fonts/**/*.*'],
    templates: ['build/templates.js'],
    index: './src/client/index.html',
    optimize: {
       app: 'app.js',
       lib: 'lib.js'
    }
    vendor: {
    js : [
        'vendor/jquery.js',
        'vendor/angular.js',
        'vendor/angular-animate.js',
        'vendor/ui-bootstrap.js',
        'vendor/ui-bootstrap-tpls.js',
        'vendor/angular-cookies.js',
        'vendor/angular-resource.js',
        'vendor/angular-route.js',
        'vendor/angular-sanitize.js',
        'vendor/angular-touch.js',
        'vendor/moment.js',
        
    ]
    },
    build: './build/',
    temp: temp
  };
  
  return client;
  

};
