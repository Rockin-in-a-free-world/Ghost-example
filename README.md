# Ghost No-Database Setup
Ultra-simple Ghost deployment with SQLite database (no external database required)

## Platform Deployment Configuration

For deployment platforms that only support image, port, and environment variables:

1. **Docker Image:** `ghost:5-alpine`
2. **Port:** `2368`
3. **Environment Variables:**
   - `NODE_ENV` = `production`
   - `database__client` = `sqlite3`
   - `database__connection__filename` = `/var/lib/ghost/content/data/ghost.db`
   - `database__useNullAsDefault` = `true`

**Note:** `database__useNullAsDefault` is required for SQLite to properly handle NULL values in Ghost's database schema.

## ⚠️ Important Note
**Data persistence depends on configuration** - this setup can use either:
- **In-memory SQLite** (`:memory:`) - data lost on container restart
- **Persistent SQLite** (file-based) - data survives container restarts

Perfect for:
- Testing deployments
- Temporary setups  
- Platforms that don't support external databases
- Quick demos or prototypes



## Two Identical Methods

Both methods configure Ghost identically - just different ways to launch Docker:

### Method 1: Platform Deployment (Environment Variables)
```bash
docker run -d --name ghost-blog -p 2368:2368 \
  -e NODE_ENV=production \
  -e database__client=sqlite3 \
  -e database__connection__filename=/var/lib/ghost/content/data/ghost.db \
  -e database__useNullAsDefault=true \
  ghost:5-alpine
```

### Method 2: Local Development (Configuration Files)
```bash
docker-compose up -d
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

**Note:** With the persistent SQLite configuration, your data will survive container restarts.
