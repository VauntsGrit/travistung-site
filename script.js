(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const root = document.documentElement;

  window.addEventListener('pointermove', (event) => {
    const nx = event.clientX / window.innerWidth - 0.5;
    const ny = event.clientY / window.innerHeight - 0.5;
    root.style.setProperty('--x', `${(-nx * 10).toFixed(2)}px`);
    root.style.setProperty('--y', `${(-ny * 7).toFixed(2)}px`);
  }, { passive: true });
})();
