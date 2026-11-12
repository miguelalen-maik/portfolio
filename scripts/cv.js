// Reserve the actual floating card height, including font/reflow changes.
const downloadCard = document.querySelector('.cv-download');
new ResizeObserver(() => {
  document.body.style.setProperty('--cv-download-height', `${downloadCard.getBoundingClientRect().height}px`);
}).observe(downloadCard);
