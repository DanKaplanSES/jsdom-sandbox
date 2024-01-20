#! /bin/bash
set -e

echo "#########################################"
echo "#   lib-package: rm package-lock.json   #"
echo "#########################################"
rm lib-package/package-lock.json || true

echo "################################"
echo "#   lib-package: npm install   #"
echo "################################"
./npml.sh install

echo "#########################################"
echo "#   app-package: rm package-lock.json   #"
echo "#########################################"
rm app-package/package-lock.json || true


echo "################################"
echo "#   app-package: npm install   #"
echo "################################"
./npma.sh install

