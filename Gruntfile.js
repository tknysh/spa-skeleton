module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    'websrc/.tmp/main-built.js'
                ],
                dest: 'websrc/.tmp/scripts.js'
            },
            css: {
                src: [
                    'websrc/css/style.css'
                ],
                dest: 'public/css/screen.css'
            }
        },
        uglify: {
            main: {
                files: {
                    'public/js/scripts.js': '<%= concat.js.dest %>'
                }
            }
        },
        compass: {
            watch: {
                options: {
                    basePath: 'websrc/',
                    httpPath: '/',
                    cssDir: 'css',
                    sassDir: 'sass',
                    imagesDir: 'images',
                    javascriptsDir: 'app',
                    fontsDir: 'fonts',
                    fontsPath: 'fonts',
                    environment: 'development'
                },
                dev: {
                    options: {
                        basePath: 'src/',
                        httpPath: '/',
                        cssDir: 'css',
                        sassDir: 'sass',
                        imagesDir: 'images',
                        javascriptsDir: 'app',
                        fontsDir: 'fonts',
                        fontsPath: 'fonts',
                        environment: 'development',
                        force: true
                    }
                }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'websrc/images/', dest: 'public/images/', flatten: false, src: '**' },
                    { expand: true, src: 'websrc/views/*', dest: 'public/views/', flatten: true },
                    { expand: true, src: 'websrc/index.html', dest: 'public/', flatten: true }
                ]
            },
            dev: {
                files: [
                    { expand: true, src: 'websrc/.tmp/scripts.js', dest: 'public/js/', flatten: true }
                ]
            }
        },
        watch: {
            options : {
                reload: true
            },
            sass: {
                files: ['websrc/sass/**/*.scss'],
                tasks: ['compass:watch']
            },
            css: {
                options : {
                    livereload : true
                },
                files: ['websrc/css/**/*.css']
            }
        },
        requirejs: {
            compile : {
                options : {
                    baseUrl : "websrc/app/",
                    name : 'config',
                    mainConfigFile : "websrc/app/config.js",
                    out : "websrc/.tmp/main-built.js",
                    optimize : "none",
                    inlineText : true,
                    findNestedDependencies : true,
                    paths : {
                        requireLib : "lib/requirejs/require"
                    },
                    include : [
                        "requireLib"
                    ]
                }
            }
        },
        "regex-replace": {
            inline: {
                src: ['public/index.html'],
                actions: [
                    {
                        search: '{{appVersion}}',
                        replace: '<%= pkg.version %>'
                    },
                    {
                        search: '<!--start PROD imports',
                        replace: ''
                    },
                    {
                        search: 'end PROD imports-->',
                        replace: ''
                    },
                    {
                        search: ' Development</title>',
                        replace: '</title>'
                    },
                    {
                        search: '<!--start DEV imports-->(.*?(\n))+.*?<!--end DEV imports-->',
                        replace: '',
                        flags: 'img'
                    }
                ]
            }
        },
        clean: {
            build: ["websrc/.tmp"],
            release: ["public"]
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build:prod',['clean:release', 'compass:watch', 'requirejs', 'concat:js', 'concat:css', 'uglify', 'copy:main', 'regex-replace:inline', 'clean:build']);
    grunt.registerTask('build:prod:dev',['clean:release', 'compass:watch', 'requirejs', 'concat:js', 'concat:css', 'copy:main', 'copy:dev', 'regex-replace:inline', 'clean:build']);
    grunt.registerTask('cleanup', ['clean:release']);
    grunt.registerTask('watch:compass', ['watch']);

};
