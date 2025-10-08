import { useState, useEffect } from 'react';

// Ghost API Configuration
const GHOST_API_URL = 'https://ghost-be-api-interface.build001.nodeops.network/ghost/api/content';
const GHOST_API_KEY = '24c1d35e0d259551b0634ea794';

// API Helper Functions
async function fetchGhostData(endpoint) {
  try {
    const response = await fetch(`${GHOST_API_URL}/${endpoint}?key=${GHOST_API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Components
function PostCard({ post }) {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-meta">
        Published: {new Date(post.published_at).toLocaleDateString()}
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

function SiteInfo({ settings }) {
  return (
    <div className="site-info">
      <h1>{settings.title}</h1>
      <p>{settings.description}</p>
      <p><strong>Site URL:</strong> {settings.url}</p>
    </div>
  );
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch posts and settings in parallel
        const [postsData, settingsData] = await Promise.all([
          fetchGhostData('posts'),
          fetchGhostData('settings')
        ]);
        
        setPosts(postsData.posts || []);
        setSettings(settingsData.settings || null);
      } catch (err) {
        setError(`Failed to load data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div className="loading">Loading Ghost content...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>Ghost Frontend</h1>
        <p>Consuming data from Ghost Backend API</p>
      </div>

      {error && <div className="error">{error}</div>}

      {settings && <SiteInfo settings={settings} />}

      <h2>Posts ({posts.length})</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
}
