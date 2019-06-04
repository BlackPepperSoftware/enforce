const chalk = require('chalk');

exports.command = ['$0'];

exports.describe = 'Assert configuration is as expected';

exports.builder = {
    registry: {
        description: 'Required registry URL',
        type: 'string',
    },
    npm: {
        description: 'Require npm',
        type: 'boolean',
        default: undefined,
    },
    yarn: {
        description: 'Require Yarn',
        type: 'boolean',
        default: undefined,
    },
};

const assertions = {
    registry: arg => require('../assert/assert-registry')(arg),
    npm: arg => require('../assert/assert-user-agent')('npm', /^npm\//, !!arg),
    yarn: arg => require('../assert/assert-user-agent')('Yarn', /^yarn\//, !!arg),
};

const validations = [
    argv => {
        if (argv.npm && argv.yarn) {
            return chalk.bold.red('Cannot require both npm and Yarn.');
        }
    }
];

exports.handler = function(argv) {
    const enforcements = Object.keys(exports.builder)
        .filter(key => typeof argv[key] !== 'undefined');

    if (!enforcements.length) {
        fail(chalk.bold.red('Nothing specified to enforce.'));
    }

    const validationFailures = validations
        .map(fn => fn(argv))
        .filter(failure => !!failure);

    if (validationFailures.length) {
        fail(validationFailures.join('\n\n'));
    }

    const enforceFailures = enforcements
        .map(enforcement => assertions[enforcement](argv[enforcement]))
        .filter(failure => !!failure);

    if (enforceFailures.length) {
        fail(enforceFailures.join('\n\n'));
    }
};

function fail(message) {
    console.error(`${message}\n`);
    process.exit(1);
}
