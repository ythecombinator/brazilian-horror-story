#!/usr/bin/env node
'use strict';
var meow, bhs, colors, cli, candidate;
meow = require('meow');
bhs = require('./');
colors = require('chalk');
cli = meow({
  help: ['', 'Options:', '  --help  Guess what? It brings you here.', '  --version  Displays the current version.', '', 'Usage:', '  $ brazilian-horror-story', '']
});
candidate = bhs();
console.log('\n' + 'This is ' + colors.green('Brazilian ' + colors.yellow('Horror ' + colors.blue('Story' + colors.gray(': \n \n' + 'Candidate: ' + candidate.name + '\n' + 'Party: ' + candidate.party + '\n' + 'Quote: ' + candidate.quote)))));