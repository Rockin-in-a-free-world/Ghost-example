# Frontend Deployment Guide

## Next.js Deployment

### Platform Configuration
- **Repository**: Ghost-example
- **Branch**: befe
- **Framework**: Next.js
- **Working Directory**: `befe/fe/`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Port**: Auto-detected by platform

### Files Structure
```
befe/fe/
├── pages/
│   ├── index.js      # Main page component
│   └── _app.js       # App configuration
├── styles/
│   └── globals.css   # Global styles
├── package.json      # Next.js dependencies
└── README.md         # Documentation
```

### Platform Deployment Steps
1. **Connect GitHub repository** to deployment platform
2. **Set framework**: Next.js
3. **Set working directory**: `befe/fe/`
4. **Build command**: `npm install && npm run build`
5. **Start command**: `npm start`
6. **Deploy** - platform will automatically build and start

### Expected Result
- **Frontend URL**: `https://your-frontend-url.com`
- **Backend URL**: `https://ghost-be-api-interface.build001.nodeops.network`
- **Integration**: Frontend fetches data from backend API via HTTP requests

### Testing Deployment
1. Visit frontend URL in browser
2. Verify posts and site info load from backend
3. Confirm BE/FE separation (frontend can restart, backend stays running)
