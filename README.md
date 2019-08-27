# node-time server

This is a simple display the time and date via a HTTP. I took it from [here][here].
It's a simple example of an app, that you can change around easily.

By default it listens at `localhost:8000` and will display something like:
`2019-08-13 12:47`.

## Running application

### Local Machine

Pre-Reqs:
- `node` installed (tested with > 8)

All you need to do is run `node app.js` and `curl localhost:8000`

If you want to run some load (every random < 10 seconds) against this application:
```bash
$ while true ; do curl localhost:8000 && sleep `echo $(($RANDOM % 10))` ; done
```

### Docker container

Pre-Reqs:
- `docker` installed

Steps:
- `docker build -t node-server .`
- `docker run -p 8000:8000 node-server:latest`

## License & Authors

If you would like to see the detailed LICENCE click [here](./LICENCE).

- Author: JJ Asghar <awesome@ibm.com>

```text
Copyright:: 2019- IBM, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```




[here]: https://gist.github.com/azs06/1514845e739de3dd6803b4c7487e19b6
