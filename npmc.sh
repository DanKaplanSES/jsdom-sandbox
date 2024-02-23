#! /bin/bash
set -e

pushd c-package > /dev/null
    npm "$@"
popd > /dev/null
