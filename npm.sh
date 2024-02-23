#! /bin/bash
set -e

# A shim that forwards npm commands to c-package and b-package and a-package, respectively.

pushd c-package > /dev/null
    npm "$@"
popd > /dev/null

pushd b-package > /dev/null
    npm "$@"
popd > /dev/null

pushd a-package > /dev/null
    npm "$@"
popd > /dev/null
