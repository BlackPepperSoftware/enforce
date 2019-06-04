#!/usr/bin/env node
const chalk = require('chalk');

console.error(chalk.yellow('Deprecated: use `enforce --registry URL` instead.'));

const argv = require('yargs')
	.usage('Usage: $0 [options]')
	.describe('url', 'The required registry url')
	.demandOption(['url'])
	.argv;

const err = require('./assert/assert-registry')(argv.url);

if (err) {
	console.error(`${err}\n`);
	process.exit(1);
}
