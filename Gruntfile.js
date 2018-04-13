module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				options: {
					style: 'compressed',
					cacheLocation: 'Sass/.sass-cache'
				},
				files: {
					'style.css': 'Sass/style.scss'
				}
			}
		},
		
		uglify: {
			min: {
				options: {
					nameCache: '.grunt/grunt-uglify-cache.json'
				},
				files: [{
					expand: true,
					cwd: 'JsSource',
					src: ['**/*.js'],
					dest: 'Js',
					ext: '.min.js'
				}]
			}
		},

		watch: {
			css: {
				files: 'Sass/**/*.scss',
				tasks: ['sass'],
				options: {
					// Start a live reload server on the default port 35729
					livereload: true,
				},
			},
			scripts: {
				files: ['JsSource/**/*.js'],
				tasks: ['uglify'],
				options: {
					debounceDelay: 10,
				},
			}
		},
	});

	// Load the plugin that provides the "sass" task.
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};