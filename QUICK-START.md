# Ghost No-Database Setup

## ⚠️ Important Note
**Data will be lost when the container restarts** - this setup uses an in-memory database with no persistence.

## Platform Configuration (4 Items Required)

1. **Docker Image:** `ghost:5-alpine`
2. **Port:** `2368`
3. **Volume Mount:** `config.production.json` → `/var/lib/ghost/config.production.json`
4. **Environment Variable:** `NODE_ENV=production`

## Files Needed
- `config.production.json` (included in this repo)

## Access
After deployment: `http://localhost:2368` (or your platform's assigned URL)

## What This Does
- Uses Ghost with in-memory SQLite database (`:memory:`)
- No persistent storage needed
- No external database required
- Minimal configuration

**Remember**: All data will be lost when the container stops.