#!/usr/bin/env node
const chalk = require('chalk');

const argv = require('yargs')
	.usage('Usage: $0 [options]')
	.boolean('prohibit')
	.default('prohibit', false)
	.describe('prohibit', 'Set to prohibit (rather than enforce) running with yarn')
	.argv;

const npmExecPath = process.env.npm_execpath;

const found = !!npmExecPath && npmExecPath.indexOf('yarn') !== -1;

if (argv.prohibit === found) {
	console.error(
		chalk.bold.red('Incorrect package manager used.\n') +
		chalk.dim('Yarn expected: ') + chalk.bold(argv.prohibit ? 'NO' : 'YES') + '\n' +
		chalk.dim('Actual npm exec path: ') + chalk.bold(npmExecPath) + '\n'
	);
	process.exit(1);
}
