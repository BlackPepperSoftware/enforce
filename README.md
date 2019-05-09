# @blackpepper/enforce

Verify an npm environment is as expected.

## Installation

Setup via an npm `preinstall` script.

`package.json`:

```json
{
  "scripts": {
    "preinstall": "npm i --no-save --loglevel=error @blackpepper/enforce
&& enforce-yarn && enforce-registry --url http://my.com/registry/"
  }
}
```

## Scripts

### enforce-yarn

Enforce, or prohibit, the use of `yarn` as a package manager.

```
$ enforce-yarn [ --prohibit ]
```

#### Arguments

* `--prohibit` - specify to *prohibit* Yarn. Default is to *enforce*.

### enforce-registry

Enforce the use of a given registry.

```
$ enforce-registry --url http://my.com/registry/
```

#### Arguments

* `--url` - Required. The base URL of the registry to enforce.
