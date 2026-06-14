function extractYouTubeId(input) {
  if (!input) return '';
  try {
    // If it's already an id (short, alphanumeric), return it
    if (/^[a-zA-Z0-9_-]{6,20}$/.test(input)) return input;
    const u = new URL(input, 'https://example.com');
    // youtu.be short link
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.replace(/^\//, '');
    }
    // youtube.com watch?v=
    if (u.searchParams && u.searchParams.get('v')) return u.searchParams.get('v');
    // embed path
    const parts = u.pathname.split('/');
    const embedIndex = parts.indexOf('embed');
    if (embedIndex !== -1 && parts[embedIndex + 1]) return parts[embedIndex + 1];
  } catch (e) {
    // not a valid URL, fall back to raw input
  }
  // fallback: return original input
  return input;
}

export function openPlayer({ v, start, title, desc, duration, progress } = {}) {
  const vid = extractYouTubeId(v);
  const params = new URLSearchParams();
  if (vid) params.set('v', vid);
  if (start) params.set('start', start);
  if (title) params.set('title', title || '');
  if (desc) params.set('d', desc || '');
  if (duration) params.set('duration', duration);
  if (progress !== undefined && progress !== null) params.set('progress', progress);
  const url = `/player.html?${params.toString()}`;
  window.open(url, '_blank');
}
