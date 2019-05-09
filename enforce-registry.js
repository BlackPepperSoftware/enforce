#!/usr/bin/env node
const chalk = require('chalk');

const argv = require('yargs')
	.usage('Usage: $0 [options]')
	.describe('url', 'The required registry url')
	.demandOption(['url'])
	.argv;

const actual = require('registry-url')();

const expected = argv.url;

if (actual !== expected) {
	console.error(
		chalk.bold.red('Incorrect registry configured.\n') +
		chalk.dim('Expected: ') + chalk.bold(expected) + '\n' +
		chalk.dim('Actual: ') + chalk.bold(actual) + '\n' +
		chalk.dim('To correct, use:\n') +
		chalk.bold(`$ npm config set registry ${expected}\n`)
	);
	process.exit(1);
}
