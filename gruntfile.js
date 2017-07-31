module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['node_modules/jquery/dist/jquery.js','node_modules/owl.carousel/dist/owl.carousel.js','src/js/*.js'],
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
    sass: {                           // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'build/css/main.css': 'src/sass/main.scss'
        }
      }
    },
    imagemin: {
      jpg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif,svg,mp4}'],
          dest: 'build/images'
        }]
      }
    },
    jshint: {
      files: ["*.js","src/js/*.js"],
      options: {
        esnext: true,
        globals: {
          jquery: true
        }
      }
    },
    copy: {
      build: {
        expand: true,
        cwd: 'src/fonts',
        src: [ '**' ],
        dest: 'build/fonts/'
      },
    },
    watch: {
      sass: {
        files: ['src/sass/*.scss','src/sass/**/*.scss'],
        tasks: ['sass'],
      },
      scripts: {
        files: ["*.js","src/js/*.js"],
        tasks: ['uglify'],
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Default task(s).
  grunt.registerTask('build','Generate build folder with compressed images,css,fonts and js', ['sass','imagemin','uglify','copy']);

};