
module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            lib: {
                files: [{
                    expand: true,
                    src: '**/*.js',
                    dest: 'lib',
                    cwd: 'src'
                }]
            }
        },
        browserify: {
            app: {
                files: {
                    'dist/grunt/app.js': 'lib/app.js'
                }
            }
        },
        clean: ['dist/grunt', 'lib']
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'babel', 'browserify']);
};