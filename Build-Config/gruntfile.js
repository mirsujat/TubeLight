module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        distdir: './.tmp/',
        src: {
          angularJS: [
            './src/client/common/**/*.js',
            './src/client/app/**/*.js'
          ],
          angularTpl: ['<%= distdir %>/templates/**/*.js'],
          angularHtml: {
            app: ['./src/client/app/**/*.tpl.html'],
            common: ['./src/client/common/**/*.tpl.html']
          }
        },    
        html2js: {
            app: {
              options: {
                base: './src/client/app/'
              },
              src: ['<%= src.angularHtml.app %>'],
              dest: '<%= distdir %>/templates/templates.js',
              module: 'templates.app'
            },
            common: {
             options: {
                base: './src/client/common'
             },
             src: ['<%= src.angularHtml.common %>'],
             dest: '<%= distdir %>/templates/common.js',
             module: 'templates.common'
            }
        },
    });   
    
    grunt.registerTask('template-cache', ['html2js']);
    
};