'use strict';

module.exports = function(grunt) {

  // wrap配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // 加载配置文件
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> \n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    clean: { // 清空dist目录
      dist: ['dist/**/*', "!dist/**/*.svn"]
    },

    cssmin: { // css压缩、合并
      options: {
        banner: '<%= banner %>'
      },
      main: {
        files: {
          'dist/css/main.css': 'css/main.css'
        }
      }
    },

    uglify: { // js混淆
      options: {
        mangle: true,
        banner: '<%= banner %>'
      },
      
      /*压缩所有的js*/
      all:{
        expand:true,
        cwd:'js',
        src:'**/*.js',
        dest:'dist/js'
      },
      base: {
        files: {
            'dist/js/base.min.js': ['dist/js/basejs/jquery.js', 'dist/js/basejs/prototype.js', 'dist/js/basejs/require.js']
        }
      }
    },

    imagemin: { // 批量无损压缩图片
      images: {
        options: {
          optimizationLevel: 3 //定义 图片优化水平
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 image 目录下所有 png/jpg/jpeg/gif 图片
          dest: 'images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
        }]
      }
    },

    requirejs: {
      main: {
        options: {
          banner: '<%= banner %>',
          baseUrl: "dist/js",
          paths: {
            //Core Libraries
            'jQuery': 'basejs/jquery',
            'text': 'plugin/text', //require插件，用于加载html
            'artTemplate': 'basejs/template'
          },
          //配置依赖项
          shim: {
            'jQuery': {
              'exports': '$'
            },
            'artTemplate': {
              'exports': 'artTemplate'
            }
          },
          include: [
            'basejs/require.config.js'
          ],
          out:"dist/js/require.config.min.js"
        }
      }
    },
  });

  // 加载需要的Grunt插件
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify'); // 压缩js
  grunt.loadNpmTasks('grunt-contrib-watch'); // 监听文件变化

  // 发布任务
  grunt.registerTask('default', ['clean', 'cssmin', 'uglify', 'requirejs', 'imagemin']);

};