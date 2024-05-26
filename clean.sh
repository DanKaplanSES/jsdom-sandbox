#! /bin/bash
set -e

echo "###############################"
echo "#   clean c-package: npm ci   #"
echo "###############################"
rm -f c-package/package-lock.json || true
rm -rf c-package/node_modules || true
echo "###############################"
echo "#   clean b-package: npm ci   #"
echo "###############################"
rm -f b-package/package-lock.json || true
rm -rf b-package/node_modules || true
echo "###############################"
echo "#   clean a-package: npm ci   #"
echo "###############################"
rm -f a-package/package-lock.json || true
rm -rf a-package/node_modules || true
