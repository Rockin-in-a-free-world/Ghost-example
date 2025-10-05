# Ghost Backend API Service

## Purpose
This is a backend-only Ghost instance that serves as a headless CMS API.

## Features
- **Content API**: Available at `/ghost/api/content/`
- **Admin API**: Available at `/ghost/api/admin/`
- **Admin Panel**: Available at `/ghost/` for content management
- **Private Site Mode**: Public frontend disabled (API-only)

## Local Testing

### Start Backend
```bash
sudo docker-compose up -d
```

### Access Points
- **Admin Panel**: http://localhost:2368/ghost/
- **Content API**: http://localhost:2368/ghost/api/content/
- **Admin API**: http://localhost:2368/ghost/api/admin/

### Test API
```bash
# Get posts (no API key needed for content API)
curl http://localhost:2368/ghost/api/content/posts/

# Get site info
curl http://localhost:2368/ghost/api/content/settings/
```

## Deployment Platform Configuration

1. **Docker Image**: `ghost:5-alpine`
2. **Port**: `2368`
3. **Environment Variables**:
   - `NODE_ENV` = `production`
   - `database__client` = `sqlite3`
   - `database__connection__filename` = `/var/lib/ghost/content/data/ghost.db`
   - `database__useNullAsDefault` = `true`
   - `privacy__useUpdateCheck` = `false`
   - `privacy__useGravatar` = `false`
   - `privacy__useRpcPing` = `false`
   - `privacy__useStripe` = `false`

## API Usage

### Content API (Public)
- **Base URL**: `https://your-backend-url.com/ghost/api/content/`
- **No API key required** for public content
- **Endpoints**: `/posts/`, `/pages/`, `/tags/`, `/authors/`, `/settings/`

### Admin API (Private)
- **Base URL**: `https://your-backend-url.com/ghost/api/admin/`
- **Requires API key** for content management
- **Endpoints**: Create, update, delete content

## Next Steps
1. Test locally with docker-compose
2. Deploy to platform
3. Create frontend that consumes the API
