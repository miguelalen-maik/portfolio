// Home-specific interactions; navigation lives in navigation.js.
// Mobile keeps the editorial <p> elements from HTML, without listeners or state.
const desktopLayout = matchMedia('(min-width: 64rem)');
const desktopHover = matchMedia('(min-width: 64rem) and (hover: hover)');
const preview = document.querySelector('#discipline-preview');
const previewImage = document.querySelector('#discipline-image');
const caption = preview.querySelector('figcaption');
let disciplineEvents;

function configureDisciplines() {
  disciplineEvents?.abort();
  const desktop = desktopLayout.matches;
  const items = [...document.querySelectorAll('[data-discipline]')].map((item, index) => {
    const replacement = document.createElement(desktop ? 'button' : 'p');
    replacement.className = desktop ? 'discipline-button' : 'discipline-label';
    replacement.id = item.id;
    replacement.dataset.discipline = item.dataset.discipline;
    replacement.textContent = item.textContent;
    if (desktop) {
      replacement.type = 'button';
      replacement.setAttribute('aria-pressed', String(index === 0));
      replacement.setAttribute('aria-controls', 'discipline-preview');
    }
    item.replaceWith(replacement);
    return replacement;
  });
  if (!desktop) return;
  disciplineEvents = new AbortController();
  const options = { signal: disciplineEvents.signal };
  function selectDiscipline(button) {
    items.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    caption.textContent = button.parentElement.querySelector('.discipline-concepts span').textContent.split(' · ').join('\n');
    preview.setAttribute('aria-labelledby', button.id);
    previewImage.alt = `Pieza visual de ${button.textContent}`;
  }
  selectDiscipline(items[0]);
  items.forEach((button, index) => {
    button.addEventListener('pointerenter', () => {
      if (desktopHover.matches) selectDiscipline(button);
    }, options);
    button.addEventListener('focus', () => selectDiscipline(button), options);
    button.addEventListener('click', () => selectDiscipline(button), options);
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowDown') next = (index + 1) % items.length;
      if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = items.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        items[next].focus();
      }
    }, options);
  });
}
configureDisciplines();
desktopLayout.addEventListener('change', configureDisciplines);

// Separate, non-interactive overlay; the mobile CTA remains in its card.
const apparellArea = document.querySelector('.project-featured');
const mobileCTA = apparellArea.querySelector('.project-pointer');
const contextualCursor = document.createElement('div');
contextualCursor.className = 'project-pointer apparell-cursor';
contextualCursor.setAttribute('aria-hidden', 'true');
mobileCTA.childNodes.forEach(node => contextualCursor.append(node.cloneNode(true)));
document.body.append(contextualCursor);
const mouseDesktop = matchMedia('(min-width: 64rem) and (hover: hover) and (pointer: fine)');
function hideApparellCursor() {
  contextualCursor.classList.remove('is-visible');
  apparellArea.classList.remove('cursor-active');
}
let lastPointerPosition = null;
function updateApparellCursor() {
  if (!mouseDesktop.matches || !lastPointerPosition) {
    hideApparellCursor();
    return;
  }
  const { x, y } = lastPointerPosition;
  const target = document.elementFromPoint(x, y);
  if (!target || !apparellArea.contains(target)) {
    hideApparellCursor();
    return;
  }
  contextualCursor.classList.add('is-visible');
  apparellArea.classList.add('cursor-active');
  const { width, height } = contextualCursor.getBoundingClientRect();
  contextualCursor.style.left = `${Math.max(8, Math.min(x + 12, innerWidth - width - 8))}px`;
  contextualCursor.style.top = `${Math.max(8, Math.min(y + 12, innerHeight - height - 8))}px`;
}
function clearApparellPointer() {
  lastPointerPosition = null;
  hideApparellCursor();
}
document.addEventListener('pointermove', event => {
  if (!mouseDesktop.matches || event.pointerType === 'touch') {
    clearApparellPointer();
    return;
  }
  lastPointerPosition = { x: event.clientX, y: event.clientY };
  updateApparellCursor();
});
document.documentElement.addEventListener('pointerleave', clearApparellPointer);
document.addEventListener('pointercancel', clearApparellPointer);
mouseDesktop.addEventListener('change', clearApparellPointer);
window.addEventListener('blur', clearApparellPointer);
window.addEventListener('scroll', updateApparellCursor, { passive: true });
window.addEventListener('resize', updateApparellCursor);
