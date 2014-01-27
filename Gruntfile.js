module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    karma: {
      unit: {
        configFile: "karma.conf.js"
      }
    },
    mocha: {
      all: {
        src: ["test/testrunner.html"]
      },
      options: {
        run: true
      }
    },
    simplemocha: {
      options: {
        globals: ["chai"],
        timeout: 8000,
        ignoreLeaks: false,
        ui: "bdd",
        reporter: "tap"
      },
      all: {
        src: ["test/*Spec.js"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-mocha");
  grunt.loadNpmTasks("grunt-karma");
  grunt.loadNpmTasks("grunt-simple-mocha");
};
