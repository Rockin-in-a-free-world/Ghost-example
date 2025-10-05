# Ghost No-Database Setup
Ultra-simple Ghost deployment with SQLite database (no external database required)

This can be run locally with docker using:

```Docker config for ghost tested on arm64

docker run -d --name ghost-blog -p 2368:2368 -e NODE_ENV=development -e database__client=sqlite3 -e database__connection__filename=/var/lib/ghost/content/data/ghost.db -e database__useNullAsDefault=true ghost:5-alpine

http://localhost:2368
```

## ⚠️ Important Note
**Data persistence depends on configuration** - this setup can use either:
- **In-memory SQLite** (`:memory:`) - data lost on container restart
- **Persistent SQLite** (file-based) - data survives container restarts

Perfect for:
- Testing deployments
- Temporary setups  
- Platforms that don't support external databases
- Quick demos or prototypes



## Configuration Method Evolution

### Original Approach (Environment Variables)
Initially, Ghost was configured using Docker environment variables:

```bash
docker run -d --name ghost-blog -p 2368:2368 \
  -e NODE_ENV=development \
  -e database__client=sqlite3 \
  -e database__connection__filename=/var/lib/ghost/content/data/ghost.db \
  -e database__useNullAsDefault=true \
  ghost:5-alpine
```

**Limitations:**
- Requires deployment platforms to support custom environment variables
- Not compatible with platforms that only accept image names
- Complex command-line syntax

### Current Approach (Configuration Files)
Now uses mounted configuration files for maximum compatibility:

```bash
docker run -d --name ghost-blog -p 2368:2368 \
  -v /path/to/config.production.json:/var/lib/ghost/config.production.json \
  ghost:5-alpine
```



## Files

- `docker-compose.yml`: Docker Compose setup (uses environment variables)
- `config.production.json`: Complete Ghost configuration for SQLite database
- `config.development.json`: Development mode configuration
- `QUICK-START.md`: Quick reference commands

## Configuration Options

### In-Memory Database (Temporary)
```json
{
  "database": {
    "client": "sqlite3",
    "connection": {
      "filename": ":memory:"
    },
    "useNullAsDefault": true
  }
}
```
**Note:** Data lost on container restart, may have initialization timing issues.

### Persistent Database (Recommended)
```json
{
  "database": {
    "client": "sqlite3",
    "connection": {
      "filename": "/var/lib/ghost/content/data/ghost.db"
    },
    "useNullAsDefault": true
  }
}
```
**Note:** Data persists across container restarts, more reliable.

## Usage

### Method 1: Docker Compose (Environment Variables)
```bash
# Clone this repository
git clone <repository-url>
cd Ghost-no-db

# Start with Docker Compose
docker-compose up -d

# Access Ghost at http://localhost:2368
```

### Method 2: Docker Run (Configuration Files) - Recommended
```bash
# Clone this repository
git clone <repository-url>
cd Ghost-no-db

# Start with configuration file mount
docker run -d --name ghost-blog -p 2368:2368 \
  -v $(pwd)/config.production.json:/var/lib/ghost/config.production.json \
  ghost:5-alpine

# Access Ghost at http://localhost:2368
```

### Method 3: Deployment Platform Compatible
For platforms that only accept image names:
```bash
# Mount the config file and run
docker run -d --name ghost-blog -p 2368:2368 \
  -v /path/to/config.production.json:/var/lib/ghost/config.production.json \
  ghost:5-alpine
```



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

**Remember**: 
- In-memory database: All data will be lost when you stop the container
- Persistent database: Data survives container restarts

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
