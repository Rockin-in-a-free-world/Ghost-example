# Quick Deployment Reference

## Platform Settings
- **Repository**: Ghost-example
- **Branch**: befe
- **Framework**: Next.js
- **Working Directory**: `befe/fe/`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Port**: `3000`

## Environment Variables
**None required** - API keys are hardcoded in the application.

## Expected Result
- **Frontend URL**: `https://your-deployed-url.com`
- **Backend API**: `https://ghost-be-api-interface.build001.nodeops.network`
- **Integration**: Frontend fetches posts and site data from backend API

## Testing
1. Visit deployed frontend URL
2. Verify "8thOct-Test" site title appears
3. Verify "Coming soon" post displays
4. Add new post in Ghost admin → refresh frontend → see new post
