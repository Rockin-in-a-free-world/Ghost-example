# Ghost Frontend

A simple React frontend that consumes the Ghost Backend API.

## Features

- **Fetches posts** from Ghost backend API
- **Displays site information** (title, description, URL)
- **Responsive design** with clean styling
- **Error handling** for API failures
- **No build process** - runs directly in browser

## API Integration

- **Backend URL**: `https://ghost-be-api-interface.build001.nodeops.network/ghost/api/content`
- **Content API Key**: `510200fe6174e47985bd4a34b5`
- **Endpoints Used**:
  - `/posts/` - Fetch all posts
  - `/settings/` - Fetch site configuration

## How to Run

### Option 1: Direct Browser
1. Open `index.html` in your browser
2. The app will automatically fetch data from the Ghost backend

### Option 2: Local Server
```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve .

# Then visit: http://localhost:3000
```

### Option 3: Live Server (VS Code)
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Architecture

```
Frontend (FE)                    Backend (BE)
┌─────────────────┐              ┌─────────────────┐
│   React App     │ ──API──→    │   Ghost CMS     │
│   (Browser)     │              │   (Platform)    │
│                 │              │                 │
│ • Displays      │              │ • Stores data   │
│ • User interface│              │ • Serves API    │
│ • Can restart   │              │ • Must stay up  │
└─────────────────┘              └─────────────────┘
```

## What This Demonstrates

1. **BE/FE Separation**: Frontend and backend are completely independent
2. **API Consumption**: Frontend fetches data via HTTP API calls
3. **Stateless Frontend**: No persistent data, can be restarted freely
4. **Real-world Integration**: Uses actual deployed backend API

## Next Steps

- Add more components (tags, authors, search)
- Implement routing for individual posts
- Add styling framework (Bootstrap, Tailwind)
- Deploy frontend to static hosting (Netlify, Vercel)
