# Notifications

Notifications server for HapRamp

### Setting up

```sh
npm install
# run redis
docker pull redis:4-alpine
docker run --name redis -p 6379:6379 -d redis:4-alpine
# set env var
export REDISCLOUD_URL=redis://localhost:6379
npm start
```
