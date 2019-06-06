import test from 'ava';
import assert from './assert-user-agent';

test(`does nothing when any version required and prefix matches`, (t) => {
    userAgent('x/1.0.0');

    t.falsy(assert('_', 'x', true));
});

test(`returns error when any version required but prefix doesn't match`, (t) => {
    userAgent('x/1.0.0');

    t.truthy(assert('_', 'y', true));
});

test(`returns error when any version required but user agent string is in unknown format`, (t) => {
    userAgent('xx');

    t.truthy(assert('_', 'x', true));
});

test(`does nothing when specific version required and prefix and version match`, (t) => {
    userAgent('x/1.0.0');

    t.falsy(assert('_', 'x', '>=1.0.0'));
});

test(`returns error when specific version required but prefix doesn't match`, (t) => {
    userAgent('x/1.0.0');

    t.truthy(assert('_', 'y', '>=1.0.0'));
});

test(`returns error when specific version required but version doesn't match`, (t) => {
    userAgent('x/1.0.0');

    t.truthy(assert('_', 'x', '>=1.0.1'));
});

test(`returns error when specific version required but user agent string is in unknown format`, (t) => {
    userAgent('xx');

    t.truthy(assert('_', 'x', ">=1.0.0"));
});

test(`does nothing when no version is required and prefix doesn't match`, (t) => {
   userAgent('x/1.0.0');

   t.falsy(assert('_', 'y', false));
});

test(`does nothing when no version required and user agent string is in unknown format`, (t) => {
    userAgent('xx');

    t.falsy(assert('_', 'x', false));
});

test(`returns error when no version required and prefix matches`, (t) => {
    userAgent('x/1.0.0');

    t.truthy(assert('_', 'x', false));
});

function userAgent(ua) {
    process.env.npm_config_user_agent = ua;
}
