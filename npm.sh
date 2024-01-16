#! /bin/bash
set -e

# A shim that forwards npm commands to lib-package and app-package, respectively.

pushd
    cd lib-package
    npm "$@"
popd

pushd
    cd app-package
    npm "$@"
popd