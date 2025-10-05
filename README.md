# Ghost No-Database Setup
Ultra-simple Ghost deployment with SQLite database (no external database required)

## ⚠️ Important Note
**Data persistence depends on configuration** - this setup can use either:
- **In-memory SQLite** (`:memory:`) - data lost on container restart
- **Persistent SQLite** (file-based) - data survives container restarts

Perfect for:
- Testing deployments
- Temporary setups  
- Platforms that don't support external databases
- Quick demos or prototypes


## Three Identical Methods

All three methods configure Ghost identically - just different ways to launch:

### Method 1: Platform Deployment
**See [QUICK-START.md](QUICK-START.md) for platform configuration details**
- Image: `ghost:5-alpine`
- Port: `2368`
- Environment Variables: `NODE_ENV`, `database__client`, `database__connection__filename`, `database__useNullAsDefault`

### Method 2: Local Testing (Docker Run)
```bash
docker run -d --name ghost-blog -p 2368:2368 \
  -v $(pwd)/config.production.json:/var/lib/ghost/config.production.json \
  -e NODE_ENV=production \
  ghost:5-alpine
```

### Method 3: Local Testing (Docker Compose)
```bash
sudo docker-compose up -d
```

**Same result:** Ghost with persistent SQLite database on port 2368



## Files

- `docker-compose.yml`: Docker Compose setup (uses configuration files)
- `config.production.json`: Complete Ghost configuration for SQLite database
- `config.development.json`: Development mode configuration
- `QUICK-START.md`: Quick reference for platform deployment



## Stopping

### Docker Compose
```bash
docker-compose down
```

### Docker Run
```bash
docker stop ghost-blog
docker rm ghost-blog
```

**Note:** With the persistent SQLite configuration, your data will survive container restarts IF the db is not deleted.
