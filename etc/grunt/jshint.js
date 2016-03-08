'use strict';

module.exports = {
    options: {
        jshintrc: 'etc/jshintrc.json',
        reporter: require('jshint-summary')
    },
    src: {
        src: [
            'gruntfile.js',
            'etc/**/*.js',
            '!dist/**/*.js',
            'test/**/*.js'
        ]
    }
};
