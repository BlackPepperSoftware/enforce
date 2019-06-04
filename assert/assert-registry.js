const chalk = require('chalk');

/**
 *
 * @param {string} expected
 * @returns {string|undefined}
 */
module.exports = (expected) => {

    const actual = require('registry-url')();

    if (actual !== expected) {
        return chalk.bold.red('Incorrect registry configured.\n') +
            chalk.dim('Expected: ') + chalk.bold(expected) + '\n' +
            chalk.dim('Actual: ') + chalk.bold(actual) + '\n' +
            chalk.dim('To correct, use:\n') +
            chalk.bold(`$ npm config set registry ${expected}`);
    }
};
