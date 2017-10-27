module.exports = function (grunt) {
  const fs = require('fs');

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-karma');

  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['app/**/**.js']
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });
  
  grunt.registerTask('default', ['eslint', 'karma']);
};