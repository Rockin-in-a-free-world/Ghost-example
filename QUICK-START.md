# Ghost No-Database Setup

## DEPLOYMENT PLATFORM SETTINGS

**Image:** `ghost:5-alpine`

**Port:** `2368`

**Volume Mount:** 
```
/path/to/config.production.json:/var/lib/ghost/config.production.json
```

**Note:** This setup requires SQLite database configuration. If the deployment platform doesn't support volume mounts for configuration files, you'll need to use environment variables or build a custom image with the configuration baked in.

## Alternative: Custom Image with Config

**Dockerfile:**
```dockerfile
FROM ghost:5-alpine
COPY config.production.json /var/lib/ghost/config.production.json
```

**Build Command:**
```bash
docker build -t ghost-no-db .
```

**Deployment Settings:**
- **Image:** `ghost-no-db` (or your custom image name)
- **Port:** `2368`