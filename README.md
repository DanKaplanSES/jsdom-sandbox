# App and Library projects

This is a boilerplate project that can be used to create simple App/Lib examples for posting on help forums.

## Setup

1. `./setup.sh`

## Run

1. `./npma.sh run exec`

## Test

1. `./npm.sh run test`

## Info regarding `npm.sh`, `npma.sh`, and `npml.sh`

* `./npm.sh [arg...]` is a convenience script that runs `./npml.sh [arg...]` then `./npma.sh [arg...]`.
* `./npml.sh [arg...]` runs `npm [args...]` in `lib-package`.
* `./npma.sh [arg...]` runs `npm [args...]` in `app-package`.
