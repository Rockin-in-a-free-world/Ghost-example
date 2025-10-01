# Ghost-example
Docker config for ghost tested on arm64



docker run -d --name ghost-blog -p 2368:2368 -e NODE_ENV=development -e database__client=sqlite3 -e database__connection__filename=/var/lib/ghost/content/data/ghost.db -e database__useNullAsDefault=true ghost:5-alpine


http://localhost:2368


tried but failed
docker run -d --name ghost-blog -p 2368:2368 ghost:5-alpine

doesnt use sql lite by default