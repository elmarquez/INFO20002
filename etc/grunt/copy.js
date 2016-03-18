'use strict';

module.exports = {
  srcCss: {
    cwd: 'src/css',
    src: [ '**/*' ],
    dest: 'dist/css',
    expand: true
  },
  srcHtml: {
    cwd: 'src/html',
    src: [ '**/*' ],
    dest: 'dist/html',
    expand: true
  },
  stylesCss: {
    cwd: 'src',
    src: [ 'styles.css' ],
    dest: 'dist/css',
    expand: true
  },
  stylesHtml: {
    cwd: 'src',
    src: [ 'styles.css' ],
    dest: 'dist/html',
    expand: true
  },
  vendorCss: {
    cwd: 'vendor',
    src: [ '**/*' ],
    dest: 'dist/css',
    expand: true
  },
  vendorHtml: {
    cwd: 'vendor',
    src: [ '**/*' ],
    dest: 'dist/html',
    expand: true
  }
};
