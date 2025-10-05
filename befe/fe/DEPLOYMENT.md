# Frontend Deployment Guide

## Node.js Server Deployment

### Platform Configuration
- **Repository**: GitHub repository with frontend code
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Port**: Auto-detected by platform

### Files Required
- `index.html` - React frontend application
- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server to serve the HTML
- `README.md` - Documentation

### GitHub Repository Setup
```bash
cd befe/fe
git init
git add .
git commit -m "Ghost frontend for BE/FE demo"
# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/ghost-frontend.git
git push -u origin main
```

### Platform Deployment Steps
1. **Connect GitHub repository** to deployment platform
2. **Set build command**: `npm install`
3. **Set start command**: `npm start`
4. **Deploy** - platform will automatically build and start

### Expected Result
- **Frontend URL**: `https://your-frontend-url.com`
- **Backend URL**: `https://ghost-be-api-interface.build001.nodeops.network`
- **Integration**: Frontend fetches data from backend API via HTTP requests

### Testing Deployment
1. Visit frontend URL in browser
2. Verify posts and site info load from backend
3. Confirm BE/FE separation (frontend can restart, backend stays running)
