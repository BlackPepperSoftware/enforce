const chalk = require('chalk');

/**
 *
 * @param {string} name
 * @param {RegExp} pattern
 * @param {boolean} required
 * @returns {string|undefined}
 */
module.exports = (name, pattern, required) => {

    const actual = process.env.npm_config_user_agent;

    if (/* XOR */ pattern.test(actual) !== required) {
        return chalk.bold.red('Incorrect package manager used.\n') +
            chalk.dim(`${name} expected: `) + chalk.bold(required ? 'YES' : 'NO') + '\n' +
            chalk.dim('Actual user agent: ') + chalk.bold(actual);
    }
};
