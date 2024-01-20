#! /bin/bash
set -e

echo "################################"
echo "#   lib-package: npm install   #"
echo "################################"
./npml.sh install
echo "################################"
echo "#   app-package: npm install   #"
echo "################################"
./npma.sh install
