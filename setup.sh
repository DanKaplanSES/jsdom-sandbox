#! /bin/bash
set -e

echo "###########################"
echo "#   lib-package: npm ci   #"
echo "###########################"
./npml.sh ci
echo "###########################"
echo "#   app-package: npm ci   #"
echo "###########################"
./npma.sh ci
