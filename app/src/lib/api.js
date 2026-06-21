// Base URL of the portfolio backend. Set VITE_API_BASE_URL in the environment
// (e.g. on Vercel) to point at the deployed service; falls back to local dev.
export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081';

/**
 * Run a terminal command against the backend.
 * @param {string} command
 * @returns {Promise<{command: string, lines: Array<{type: string, text: string, href?: string}>, exitCode: number}>}
 */
export async function runTerminalCommand(command) {
    const res = await fetch(`${API_BASE}/api/terminal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command }),
    });
    if (!res.ok) {
        throw new Error(`server responded ${res.status}`);
    }
    return res.json();
}

// --- Visitor info ---------------------------------------------------------

// Run in the browser so they reflect the visitor's own location/IP, not the server's.
const ONETRUST_GEO = 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location';
const IPIFY = 'https://api64.ipify.org?format=json';

// OneTrust's geo endpoint is JSONP-only (text/javascript, no CORS), so fetch() is
// blocked by the browser. Load it via a <script> tag instead — it invokes a global
// `jsonFeed(<data>)` callback, and script tags aren't subject to CORS.
function fetchLocation() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');

        function cleanup() {
            clearTimeout(timer);
            delete window.jsonFeed;
            script.remove();
        }

        const timer = setTimeout(() => {
            cleanup();
            reject(new Error('geo timeout'));
        }, 5000);

        window.jsonFeed = (data) => {
            cleanup();
            resolve(data);
        };
        script.onerror = () => {
            cleanup();
            reject(new Error('geo load failed'));
        };
        script.src = ONETRUST_GEO;
        document.head.appendChild(script);
    });
}

async function fetchIp() {
    const res = await fetch(IPIFY);
    const { ip } = await res.json();
    return ip;
}

let reported = false;

/**
 * Run the geolocation + IP APIs in the browser, then report { location, ip } to
 * the backend. Best-effort, once per session — never throws into the UI.
 */
export async function reportUserInfo() {
    if (reported) return;
    reported = true;
    try {
        const [loc, ip] = await Promise.allSettled([fetchLocation(), fetchIp()]);
        await fetch(`${API_BASE}/api/user-info`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                location: loc.status === 'fulfilled' ? loc.value : null,
                ip: ip.status === 'fulfilled' ? ip.value : null,
            }),
        });
    } catch (err) {
        console.debug('user-info report failed', err);
    }
}
