'use strict';

module.exports = {
    options: {
        debounceDelay: 250,
        spawn: false
    },
    src: {
        files: ['src/**/*','test/**/*'],
        tasks: ['compile']
    }
};
