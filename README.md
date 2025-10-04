# Ghost No-Database Setup
Ultra-simple Ghost deployment with in-memory SQLite database

## ⚠️ Important Note
**Data will be lost when the container restarts** - this setup uses an in-memory database with no persistence. Perfect for:
- Testing deployments
- Temporary setups  
- Platforms that don't support persistent storage
- Quick demos or prototypes

## Quick Start

```bash
# Start Ghost with in-memory database
docker-compose up -d

# Access Ghost at http://localhost:2368
```

## What This Does

- Uses Ghost with in-memory SQLite database (`:memory:`)
- No persistent storage or volumes needed
- No complex database configurations
- No command-line environment variables required
- Minimal Docker Compose setup

## Files

- `docker-compose.yml`: Minimal Ghost setup with in-memory database
- `config.production.json`: Ghost configuration for in-memory SQLite
- `config.development.json`: Ghost configuration for development mode

## Usage

1. Clone this repository
2. Run `docker-compose up -d`
3. Access Ghost at `http://localhost:2368`
4. Set up your Ghost admin account
5. Start creating content!

## Stopping

```bash
docker-compose down
```

**Remember**: All data will be lost when you stop the container.
