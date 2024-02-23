#! /bin/bash
set -e

pushd b-package > /dev/null
    npm "$@"
popd > /dev/null
