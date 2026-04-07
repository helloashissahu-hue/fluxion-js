import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <span className="logo">⚡ Fluxion</span>
            <div className="nav-links">
              <Link href="#features">Features</Link>
              <Link href="#install">Install</Link>
              <Link href="#docs">Docs</Link>
              <Link href="#comparison">Compare</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="badge">🚀 The Future of Data Fetching</span>
          <h1>One API to control all data</h1>
          <p>
            Fluxion is a full data orchestration engine that replaces Axios, React Query, SWR, 
            and basic API SDKs with a single, unified API.
          </p>
          <div className="install-box">
            <code>npm install fluxion-js</code>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features">
        <div className="container">
          <h2 className="section-title">Why Fluxion?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>⚡ Zero Config</h3>
              <p>Works out of the box. No setup required. Just import and use.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 Smart Caching</h3>
              <p>Automatic request deduplication, caching, and intelligent cache invalidation.</p>
            </div>
            <div className="feature-card">
              <h3>🔌 Plugin System</h3>
              <p>Extensible architecture with built-in plugins for auth, logging, and rate limiting.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Works Everywhere</h3>
              <p>Browser, Node.js, Edge. One API for all platforms.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Built-in Metrics</h3>
              <p>Track request duration, retries, cache hits, and more.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 Offline Mode</h3>
              <p>Queue requests and replay when back online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="install" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Installation</h2>
          <div className="code-block">
            <code># npm<br/>npm install fluxion-js<br/><br/># yarn<br/>yarn add fluxion-js<br/><br/># pnpm<br/>pnpm add fluxion-js</code>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="docs" className="code-section">
        <div className="container">
          <h2 className="section-title">Quick Start</h2>
          
          <h3 style={{ marginBottom: '20px' }}>Basic Usage</h3>
          <div className="code-block">
            <code>{`import fluxion from "fluxion-js";

// Simple GET request
const res = await fluxion.get("/api/users");
console.log(res.data);

// POST with data
const user = await fluxion.post("/api/users", { name: "John" });`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Configuration</h3>
          <div className="code-block">
            <code>{`const api = fluxion.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  retry: 3,
  headers: {
    "Authorization": "Bearer token"
  }
});`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Full Config Object</h3>
          <div className="code-block">
            <code>{`const res = await fluxion({
  url: "/api/users",
  method: "GET",
  headers: { "Authorization": "Bearer token" },
  params: { page: 1 },
  data: { name: "John" },
  timeout: 5000,
  retry: 3,
  smart: true,
  cache: true,
  cacheTime: 60000
});`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>With React</h3>
          <div className="code-block">
            <code>{`import { FluxionProvider, useQuery } from "fluxion-js";
import fluxion from "fluxion-js";

function App() {
  return (
    <FluxionProvider config={{ client: fluxion }}>
      <UserList />
    </FluxionProvider>
  );
}

function UserList() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: "users",
    queryFn: () => fluxion.get("/users")
  });

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {data?.map(user => <div key={user.id}>{user.name}</div>)}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Smart Mode</h3>
          <div className="code-block">
            <code>{`// Auto handles retry, cache, and timeout
const res = await fluxion.get("/users", { smart: true });

// With explicit options
const data = await fluxion.get("/products", {
  smart: true,
  cache: { storage: "indexeddb", ttl: 60000 },
  retry: 3,
  retryStrategy: "exponential"
});`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Plugins</h3>
          <div className="code-block">
            <code>{`import { loggingPlugin, authPlugin, rateLimitPlugin } from "fluxion-js";

const client = fluxion.create({ baseURL: "/api" });

client.plugins.use(loggingPlugin());
client.plugins.use(authPlugin({ token: "your-token" }));
client.plugins.use(rateLimitPlugin({ maxRequests: 10, windowMs: 1000 }));`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Request Graph</h3>
          <div className="code-block">
            <code>{`const result = await fluxion.graph([
  { key: "user", url: "/user" },
  { key: "posts", url: "/posts", dependsOn: "user" }
]);`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Streaming</h3>
          <div className="code-block">
            <code>{`const reader = await fluxion.stream("/api/stream");
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(value);
}`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Offline Mode</h3>
          <div className="code-block">
            <code>{`// Request is queued when offline and replayed when online
const res = await fluxion.post("/order", data, { offline: true });`}</code>
          </div>

          <h3 style={{ marginBottom: '20px', marginTop: '40px' }}>Metrics</h3>
          <div className="code-block">
            <code>{`const metrics = fluxion.getMetrics();
// { duration: 120, retries: 1, cacheHit: true, timestamp: ..., url: ... }

fluxion.clearMetrics();`}</code>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">API Reference</h2>
          <table className="api-table">
            <thead>
              <tr>
                <th>Option</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>baseURL</td>
                <td>string</td>
                <td>-</td>
                <td>Base URL for all requests</td>
              </tr>
              <tr>
                <td>timeout</td>
                <td>number</td>
                <td>-</td>
                <td>Request timeout in ms</td>
              </tr>
              <tr>
                <td>retry</td>
                <td>number</td>
                <td>3</td>
                <td>Number of retry attempts</td>
              </tr>
              <tr>
                <td>retryStrategy</td>
                <td>string</td>
                <td>exponential</td>
                <td>exponential | linear | fixed</td>
              </tr>
              <tr>
                <td>smart</td>
                <td>boolean</td>
                <td>false</td>
                <td>Auto retry/cache/timeout</td>
              </tr>
              <tr>
                <td>cache</td>
                <td>boolean | object</td>
                <td>false</td>
                <td>Enable caching with options</td>
              </tr>
              <tr>
                <td>dedupe</td>
                <td>boolean</td>
                <td>true</td>
                <td>Prevent duplicate requests</td>
              </tr>
              <tr>
                <td>offline</td>
                <td>boolean</td>
                <td>false</td>
                <td>Queue when offline</td>
              </tr>
              <tr>
                <td>schema</td>
                <td>object</td>
                <td>-</td>
                <td>Schema for response validation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison">
        <div className="container">
          <h2 className="section-title">How We Compare</h2>
          <div className="comparison-table">
            <div className="compare-card">
              <h3>Axios</h3>
              <div className="price">Basic</div>
              <ul>
                <li>HTTP Client only</li>
                <li>No caching</li>
                <li>No React hooks</li>
                <li>Manual retry</li>
              </ul>
            </div>
            <div className="compare-card featured">
              <h3>Fluxion</h3>
              <div className="price">Platform</div>
              <ul>
                <li>HTTP + Caching + Graph</li>
                <li>Auto dedup & cache</li>
                <li>React hooks built-in</li>
                <li>Smart retry & offline</li>
                <li>Plugins & streaming</li>
              </ul>
            </div>
            <div className="compare-card">
              <h3>React Query</h3>
              <div className="price">Advanced</div>
              <ul>
                <li>Queries only</li>
                <li>Requires fetch</li>
                <li>No HTTP methods</li>
                <li>React only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>⚡ Fluxion - One API to control all data</p>
          <p style={{ marginTop: '10px', opacity: 0.7 }}>
            <a href="https://npmjs.com/package/fluxion-js">npm</a> •{' '}
            <a href="https://github.com/fluxion-js/fluxion">GitHub</a>
          </p>
        </div>
      </footer>
    </main>
  )
}