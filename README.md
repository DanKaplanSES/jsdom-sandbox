# App and Library projects

This is a boilerplate project that can be used to create simple App/Lib examples for posting on help forums.

## Setup

1. `./setup.sh`

## Run

1. `./npma.sh run exec`

## Test

1. `./npm.sh run test`

## Info regarding `npm.sh`, `npma.sh`, and `npmb.sh`

* `./npm.sh [arg...]` is a convenience script that runs `./npmc.sh [arg...]` then `./npmb.sh [arg...]` then `./npma.sh [arg...]`. Note the order: e.g., `./npm.sh run test` will run tests in c-package then b-package then the a-package.
* `./npmc.sh [arg...]` runs `npm [args...]` in `c-package`.
* `./npmb.sh [arg...]` runs `npm [args...]` in `b-package`.
* `./npma.sh [arg...]` runs `npm [args...]` in `a-package`.
