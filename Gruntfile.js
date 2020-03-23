module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['src/less/*.less'],
                    dest: 'css',
                    rename: function (dst, src) {                     
                        return dst + '/' + src.replace(/^.*[\\\/]/, '').replace('.less', '.css');
                    }
                }]
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
        },
        exec: {
            viewsEngine: {
              cmd: function(firstName, lastName) {
                return 'ViewEngine\\SimpleHtmlViewsEngine.exe "C:\\Users\\María Victoria\\workspace\\DrBinciWebPage"';
              }
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-exec');
  
    // Default task(s).
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'exec']);
  
  };