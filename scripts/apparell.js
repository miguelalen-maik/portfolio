// Progressive enhancement: the same chapter markup stays in normal flow on mobile,
// without JavaScript, and when reduced motion is requested.
(() => {
  const track = document.querySelector('.mvp-track');
  if (!track) return;
  const panel = track.querySelector('.mvp-sticky');
  const chapters = [...track.querySelectorAll('.mvp-chapter')];
  const copies = chapters.map(chapter => chapter.querySelector('.mvp-copy'));
  const steps = chapters.flatMap((chapter, index) =>
    [...chapter.querySelectorAll('.mvp-screen')].map(image => ({ image, chapter: index }))
  );
  const desktop = matchMedia('(min-width: 64rem)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.site-header');
  const clamp = value => Math.max(0, Math.min(1, value));
  let enabled = false;
  let frame = null;
  let start = 0;
  let distance = 1;
  let entryOffset = 1;
  let previousProgress = -1;
  let loadedThrough = -1;

  function loadNext(index) {
    // Promote only the current and upcoming screen, leaving other images lazy.
    const next = Math.min(index + 1, steps.length - 1);
    if (next <= loadedThrough) return;
    for (let i = Math.max(0, index); i <= next; i++) steps[i].image.loading = 'eager';
    loadedThrough = next;
  }

  function render() {
    frame = null;
    if (!enabled) return;
    const progress = Math.max(0, Math.min(steps.length - 1, (scrollY - start) / distance));
    if (progress === previousProgress) return;
    previousProgress = progress;
    const current = Math.floor(progress);
    const next = Math.min(current + 1, steps.length - 1);
    // Map every scroll pixel directly to local 0–1 progress, without a hold or easing.
    const stepProgress = progress - current;
    loadNext(current);

    steps.forEach(({ image }, index) => {
      let opacity = 0, scale = 1, y = 0;
      if (index === current - 1) { opacity = 1; scale = .97; y = -24; }
      if (index === current) { opacity = 1; scale = 1 - .03 * stepProgress; y = -24 * stepProgress; }
      if (index === next && next !== current) { opacity = 1; scale = .99 + .01 * stepProgress; y = entryOffset * (1 - stepProgress); }
      image.style.opacity = opacity;
      image.style.transform = `translateY(${y}px) scale(${scale})`;
      image.style.zIndex = index + 1;
    });

    const from = steps[current].chapter;
    const to = steps[next].chapter;
    copies.forEach((copy, index) => {
      let opacity = 0;
      if (from === to && index === from) opacity = 1;
      // Chapter copy: fade out at 20–50%, pause at 50–65%, fade in at 65–100%.
      else if (index === from) opacity = 1 - clamp((stepProgress - .2) / .3);
      else if (index === to) opacity = clamp((stepProgress - .65) / .35);
      copy.style.opacity = opacity;
      copy.style.pointerEvents = opacity > .5 ? 'auto' : 'none';
    });
  }

  function schedule() {
    if (enabled && frame === null) frame = requestAnimationFrame(render);
  }

  function measure() {
    enabled = desktop.matches && !reducedMotion.matches;
    track.classList.toggle('is-enhanced', enabled);
    if (enabled) {
      const height = panel.getBoundingClientRect().height;
      const headerBottom = header.getBoundingClientRect().bottom + 16;
      const tallestCopy = Math.max(...copies.map(copy => copy.scrollHeight));
      // A short desktop window keeps the editorial layout if its copy cannot fit.
      if (tallestCopy > height) {
        enabled = false;
        track.classList.remove('is-enhanced');
      } else {
        const top = Math.max(headerBottom, (innerHeight - height) / 2);
        distance = Math.max(height, innerHeight * .8);
        entryOffset = height + 24;
        // All six blocks share Figma's 250px start, clamped together on shorter panels.
        track.style.setProperty('--mvp-copy-top', `${Math.min(250, height - tallestCopy)}px`);
        track.style.setProperty('--mvp-top', `${top}px`);
        track.style.setProperty('--mvp-exit-space', `${Math.max(0, innerHeight - top - height)}px`);
        // Each real screen gets one scroll unit, including a final reading hold.
        track.style.setProperty('--mvp-track-height', `${height + distance * steps.length}px`);
        start = track.getBoundingClientRect().top + scrollY - top;
      }
    }
    if (!enabled) {
      track.removeAttribute('style');
      [...copies, ...steps.map(step => step.image)].forEach(element => element.removeAttribute('style'));
    }
    previousProgress = -1;
    schedule();
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure, { once: true });
  desktop.addEventListener('change', measure);
  reducedMotion.addEventListener('change', measure);
  document.fonts.ready.then(measure);
  measure();
})();
