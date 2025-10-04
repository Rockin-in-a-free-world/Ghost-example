# Ghost No-Database Setup
# This runs Ghost with an in-memory SQLite database (no persistent storage)

# Using Docker Compose (Recommended)
docker-compose up -d

# Using Docker Run command
docker run -d --name ghost-blog -p 2368:2368 \
  -v $(pwd)/config.production.json:/var/lib/ghost/config.production.json \
  -v $(pwd)/config.development.json:/var/lib/ghost/config.development.json \
  -e NODE_ENV=production \
  ghost:5-alpine

# Access Ghost at http://localhost:2368

# Note: This setup uses in-memory SQLite database
# Data will be lost when the container restarts
# Perfect for testing or temporary deployments
