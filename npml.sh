#! /bin/bash
set -e

pushd lib-package > /dev/null
    npm "$@"
popd > /dev/null
