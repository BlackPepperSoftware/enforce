# @blackpepper/enforce

Verify an npm environment is as expected before install.

## Installation

Setup via an npm `preinstall` script. For example:

`package.json`:

```json
{
  "scripts": {
    "preinstall": "ENFORCE_VERSION=1.1.0; ENFORCE_DIR=\"$HOME/.npm/enforce/$ENFORCE_VERSION\"; 
\"$ENFORCE_DIR/bin/enforce\" present || npm i -g --prefix=\"$ENFORCE_DIR\"
@blackpepper/enforce@$ENFORCE_VERSION || exit 1; PATH=\"$ENFORCE_DIR/bin:$PATH\"; 
enforce --npm --registry http://my.com/registry/"
  }
}
```

You can reduce configuration, or use an organisation-wide `enforce` script, by pulling it down from a known location.

`package.json`:
 
```json
{
  "scripts": {
    "preinstall": "curl -s http://my.com/enforce/config | bash"
  }
}
```

## Options

### `--npm [version]`
### `--no-npm`

Enforce, or prohibit, the use of `npm` as a package manager.

In the `--npm` form, resolution of the optional `version` argument uses [semver](https://www.npmjs.com/package/semver). 

```
$ enforce --npm
$ enforce --npm ">=6.9.0"
$ enforce --no-npm
```

### `--yarn [version]`
### `--no-yarn`

Enforce, or prohibit, the use of `yarn` as a package manager.

In the `--yarn` form, resolution of the optional `version` argument uses [semver](https://www.npmjs.com/package/semver).

```
$ enforce --yarn
$ enforce --yarn ">=1.12.3"
$ enforce --no-yarn
```

### `--registry`

Enforce the use of a given registry.

```
$ enforce --registry http://my.com/registry/
```

### `present`

Convenience command to verify `enforce` is installed. Just terminates normally with
a zero exit code.

```
$ enforce present
```
