#! /bin/bash
set -e

echo "###########################"
echo "#   b-package: npm ci   #"
echo "###########################"
./npmb.sh ci
echo "###########################"
echo "#   a-package: npm ci   #"
echo "###########################"
./npma.sh ci
