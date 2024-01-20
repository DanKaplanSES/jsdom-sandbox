#! /bin/bash
set -e

echo "###########################################"
echo "#   lib-package: npm ci --install-links   #"
echo "###########################################"
./npml.sh ci --install-links
echo "###########################################"
echo "#   app-package: npm ci --install-links   #"
echo "###########################################"
./npma.sh ci --install-links
