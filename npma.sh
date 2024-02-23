#! /bin/bash
set -e

pushd a-package > /dev/null
    npm "$@"
popd > /dev/null