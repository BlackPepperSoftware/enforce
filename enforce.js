#!/usr/bin/env node
require('yargs')
	.commandDir('command')
	.demandCommand()
	.help()
	.parse();
