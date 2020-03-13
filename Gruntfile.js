module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'css/styles.css': 'src/less/styles.less'
                }
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            dev: {
                files: [{
                    expand: true,
                    src: ['src/js/*.js'],
                    dest: 'js',
                    cwd: '.',
                    rename: function (dst, src) {
                        
                        return dst + '/' + src.replace(/^.*[\\\/]/, '').replace('.js', '.min.js');
                    }
                }]
              }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    // Default task(s).
    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
  
  };