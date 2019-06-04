#!/usr/bin/env node
const chalk = require('chalk');

console.error(chalk.yellow('Deprecated: use `enforce --yarn` / `enforce --no-yarn` instead.'));

const argv = require('yargs')
	.usage('Usage: $0 [options]')
	.boolean('prohibit')
	.default('prohibit', false)
	.describe('prohibit', 'Set to prohibit (rather than enforce) running with yarn')
	.argv;

const err = require('./assert/assert-user-agent')('Yarn', /^Yarn\//, argv.prohibit);

if (err) {
	console.error(`${err}\n`);
	process.exit(1);
}
