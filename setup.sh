#! /bin/bash
set -e

echo "###########################"
echo "#   c-package: npm ci   #"
echo "###########################"
./npmc.sh ci
echo "###########################"
echo "#   b-package: npm ci   #"
echo "###########################"
./npmb.sh ci
echo "###########################"
echo "#   a-package: npm ci   #"
echo "###########################"
./npma.sh ci
