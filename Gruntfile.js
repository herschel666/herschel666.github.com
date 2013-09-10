module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		styles: 'assets/styles/',
		scripts: 'assets/scripts/',

		banner: [
			'/*!',
			' * <%= pkg.name %> - v<%= pkg.version %>',
			' *',
			' * <%= grunt.template.today("yyyy-mm-dd") %>',
			' *',
			' * <%= pkg.description %>',
			' *',
			' * <%= pkg.homepage %>',
			' *',
			' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;',
			' * Licensed <%= pkg.license %>',
			'**/',
			''
		].join('\n'),

		sass: {
			prod: {
				options: {
					style: 'expanded',
					precision: 6
				},
				files: {
					'<%= styles %>main.css': '<%= styles %>main.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					precision: 6,
					banner: '<%= banner %>'
				},
				files: {
					'<%= styles %>main.min.css': '<%= styles %>main.scss'
				}
			}
		},

		watch: {
			sass: {
				files: ['<%= styles %>app/**/*.scss'],
				tasks: ['sass:prod']
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js',
				runnerPort: 9876,
				autoWatch: true,
				browsers: ['Chrome']
			}
		},

		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			build: {
				files: {
					'<%= scripts %>app.min.js': ['<%= scripts %>**/*.js', '!<%= scripts %>*.min.js']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['uglify:build', 'sass:dist']);

};