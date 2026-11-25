// Copy commands and the journal citation with a selection fallback.
for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copy);
    if (!source) return;
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(source.textContent);
      button.textContent = 'Copied';
      status.textContent = 'Copied to clipboard.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(source);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Text selected';
      status.textContent = 'Copy is unavailable. Text selected; press Control or Command C.';
    }
    setTimeout(() => { button.textContent = 'Copy'; }, 2500);
  });
}

// Show the current section in the navigation.
const links = [...document.querySelectorAll('nav ul a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updateNavigation() {
  const offset = document.querySelector('nav').offsetHeight + 80;
  const active = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1);
  for (const link of links) {
    const current = active && link.hash === '#' + active.id;
    link.classList.toggle('active', Boolean(current));
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
window.addEventListener('scroll', updateNavigation, { passive:true });
window.addEventListener('resize', updateNavigation);
updateNavigation();

// Load and play videos only near the viewport; respect reduced-motion settings.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const videos = [...document.querySelectorAll('video')];
const visibleVideos = new Set();
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const video = entry.target;
    if (entry.isIntersecting) {
      visibleVideos.add(video);
      if (video.preload === 'none') { video.preload = 'metadata'; video.load(); }
      if (!reducedMotion.matches && !document.hidden) video.play().catch(() => {});
    } else {
      visibleVideos.delete(video);
      video.pause();
    }
  }
}, { threshold:0.15 });
videos.forEach(video => observer.observe(video));
function syncPlayback() {
  for (const video of videos) {
    if (document.hidden || reducedMotion.matches || !visibleVideos.has(video)) video.pause();
    else video.play().catch(() => {});
  }
}
document.addEventListener('visibilitychange', syncPlayback);
reducedMotion.addEventListener('change', syncPlayback);
