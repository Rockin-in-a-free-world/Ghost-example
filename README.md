# Ghost-example
Docker config for ghost tested on arm64



docker run -d --name ghost-blog -p 2368:2368 -e NODE_ENV=development -e database__client=sqlite3 -e database__connection__filename=/var/lib/ghost/content/data/ghost.db -e database__useNullAsDefault=true ghost:5-alpine


http://localhost:2368


tried but failed
docker run -d --name ghost-blog -p 2368:2368 ghost:5-alpine

doesnt use sql lite by default


<!--

Try a config approach
Fork the official Ghost Docker repo or create a new Dockerfile starting with ghost:5-alpine.

Add your configuration overrides:

Copy your custom config.production.json or config.development.json.

Set default environment variables inside the image with ENV.

Test locally that your custom image runs out-of-the-box (exposes port 2368, uses sqlite or desired backend).

Publish your custom image on Docker Hub or your preferred registry.

In AutoGen, specify just your image name and port 2368—no need for environment variables or volumes if baked in.

--> 
