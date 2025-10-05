# Ghost No-Database Setup

## Platform Configuration (6 Items Required)

1. **Docker Image:** `ghost:5-alpine`
2. **Port:** `2368`
3. **Environment Variables:**
   - `NODE_ENV` = `production`
   - `database__client` = `sqlite3`
   - `database__connection__filename` = `/var/lib/ghost/content/data/ghost.db`
   - `database__useNullAsDefault` = `true`

## What This Does
- Uses Ghost with persistent SQLite database
- No external database required
- Data survives container restarts
- Minimal configuration needed

**Note:** `database__useNullAsDefault` is required for SQLite to properly handle NULL values in Ghost's database schema.