#!/usr/bin/env node

var program = require('commander');
var start = require('./commands/start');
var mock = require('./commands/mock');
var pkg = require('./package.json');
var cwd = process.cwd();
var path = require('path');
var config = require(path.resolve(cwd, 'mock.json'));

var commands = {
  	start: start,
  	mock: mock
};

function initCommands() {
  	program.version(pkg.version);

  	Object.keys(commands).forEach(function(key) {
    	program
      		.command(key)
      		.action(commands[key].bind(this, config || {}));
  	});

  	program.parse(process.argv);
}

initCommands();