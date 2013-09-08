module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		styles: 'assets/styles/',
		scripts: 'assets/scripts/',

		sass: {
			prod: {
				options: {
					style: 'expanded',
					precision: 6
				},
				files: {
					'<%= styles %>main.css': '<%= styles %>main.scss'
				}
			}
		},

		watch: {
			sass: {
				files: ['<%= styles %>**/*.scss'],
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
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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

	// grunt.registerTask('default', ['uglify']);

};