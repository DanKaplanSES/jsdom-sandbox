#! /bin/bash
set -e

pushd app-package > /dev/null
    npm "$@"
popd > /dev/null