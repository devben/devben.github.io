var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 4000;

var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

     var yeomanConfig = {
      tmp: '.',
    };
    grunt.initConfig({
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },
        less: {
            local: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                      sourceMapURL: 'assets/themes/mine/all.css',
                      sourceMapFilename: 'assets/themes/mine/all.css.map'
                },
                files: {
                    "assets/themes/mine/all.css": "assets/themes/mine/all.less",
                     "assets/number-reel/css/demo.css": "assets/number-reel/css/demo.less",
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: SERVER_PORT
                    , base: '_site'
                    , hostname: '*'
                }
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, yeomanConfig.tmp)
                        ];
                    }
                }
            },
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.server.options.port %>'
            }
        },
        watch: {
            less: {
                files: ['assets/{,**/}*.less'],
                tasks: ['less']
            },
            css: {
                files: ['assets/{,**/}*.css']
            },
            shell: {
                files: [
                '_config.yml',
                'index.html',
                '_layouts/**',
                '_posts/**',
                '_includes/**',
                'assets/{,**/}*.js'
                ],
                tasks: ['shell:jekyllBuild']
            },
          livereload: {
            files: [
            '_config.yml',
                'index.html',
                '_layouts/**',
                '_posts/**',
                '_includes/**',
                'assets/{,**/}*.js',
                'assets/{,**/}*.css',
                'assets/{,**/}*.js'
            ],
            tasks: ['shell:jekyllBuild'],
            options: { livereload: true }
            
          },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less','shell', 'connect', 'open', 'watch'])
}