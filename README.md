# App and Library projects

This is a boilerplate project that can be used to create simple App/Lib examples for posting on help forums.

## ./npm [arg...]

./npm is a convenience script that runs `npm [args...]` in `lib-package` and `app-package`, respectively.

1. `./npm install`
1. `./npm test`
1. `cd app-package; npm run exec`

## ./setup-env.sh

For convenience, `setup-env.sh` will add `.` to the front of your PATH variable. That way, you don't need to type the `./` before every `./npm` command, you can just write `npm` like you normally would. `setup-env.sh` needs to modify your *user* PATH. To do that, run it like this:

```bash
source setup-env.sh
```
