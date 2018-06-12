# Notifications

Forked from [busyorg/busy-api](https://github.com/busyorg/busy-api)

Notifications server for HapRamp

### Setting up locally

```sh
npm install
# run redis
docker pull redis:4-alpine
# create volume for persistent storage
docker volume create snf
docker run --name redis -p 6379:6379 -d -v snf:/data redis:4-alpine
# set env var
export REDISCLOUD_URL=redis://localhost:6379
# export ws url
# unsecure required for localhost
export STEEMD_WS_URL=ws://localhost:4000/
npm start
```


### Using the WS server

get notifications and enable login from client

```
{id: 0, jsonrpc: "2.0", method: "get_notifications", params: ["bxute"]}
{"id":1,"jsonrpc":"2.0","method":"login","params":["token"]}
```

You will recieve the notifications list and updates.


### Testing WS

For online, use https://www.websocket.org/echo.html
For local, use [Smart Websocket Client](https://chrome.google.com/webstore/detail/smart-websocket-client/omalebghpgejjiaoknljcfmglgbpocdp/related?utm_source=chrome-app-launcher-info-dialog)
