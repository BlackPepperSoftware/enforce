# @blackpepper/enforce

Verify an npm environment is as expected before install.

## Installation

Setup via an npm `preinstall` script.

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

## Options

### `--npm`, `--no-npm`

Enforce, or prohibit, the use of `npm` as a package manager.

```
$ enforce --npm
$ enforce --no-npm
```

### `--yarn`, `--no-yarn`

Enforce, or prohibit, the use of `yarn` as a package manager.

```
$ enforce --yarn
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
