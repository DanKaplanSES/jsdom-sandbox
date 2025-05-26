# App and Library projects

This is a boilerplate project that can be used to create simple App/Lib examples for posting on help forums.

## Setup and Execute

1. `./setup.sh && ./npm.sh t`

## Info regarding `npm.sh`, `npma.sh`, and `npmb.sh`

* `./npm.sh [arg...]` is a convenience script that runs `./npmc.sh [arg...]` then `./npmb.sh [arg...]` then `./npma.sh [arg...]`. Note the order: e.g., `./npm.sh run test` will run tests in b-package then the a-package.
* `./npmb.sh [arg...]` runs `npm [args...]` in `b-package`.
* `./npma.sh [arg...]` runs `npm [args...]` in `a-package`.
