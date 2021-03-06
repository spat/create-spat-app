#!/usr/bin/env node

console.log('Hello, spat!');

var ghdownload = require('github-download');

var dir = process.argv[2];

if (dir) {
  ghdownload({ user: 'spat', repo: 'spat-template', ref: 'develop'}, dir)
    .on('end', () => {
      console.log('finish!');
    });
}
else {
  console.log('ディレクトリ名を指定してください');
}
