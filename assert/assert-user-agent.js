const chalk = require('chalk');
const semver = require('semver');

/**
 *
 * @param {string} label
 * @param {string} prefix
 * @param {string|boolean} required
 * @returns {string|undefined}
 */
module.exports = (label, prefix, required) => {

    const actual = process.env.npm_config_user_agent;

    const fail = () =>
        chalk.bold.red('Incorrect package manager used.\n') +
        chalk.bold(label) + chalk.dim(` expected: `) + chalk.bold(versionLabel(required)) + '\n' +
        chalk.dim('Actual user agent: ') + chalk.bold(actual);

    const matchResult = /^([^/]+)\/([^ ]+)/.exec(actual);

    if (!matchResult) {
        if (!required) {
            return;
        }

        return fail();
    }

    const [ , actualPrefix, actualVersion ] = matchResult;

    const prefixMatch = prefix === actualPrefix;

    if (
        (typeof required === 'string' && !semver.satisfies(actualVersion, required)) ||
        (required && !prefixMatch) ||
        (!required && prefixMatch)
    ) {
        return fail();
    }
};

function versionLabel(version) {
    if (typeof version === 'string') {
        return version;
    }

    return version ? 'YES' : 'NO';
}
