#! /bin/bash
set -e

# A shim that forwards npm commands to lib-package and app-package, respectively.

pushd lib-package > /dev/null
    npm "$@"
popd > /dev/null

pushd app-package > /dev/null
    npm "$@"
popd > /dev/null
