// One mobile bottom sheet for every page with the shared header.
(() => {
  const trigger = document.querySelector('.site-header .menu-toggle');
  if (!trigger) return;
  const desktop = matchMedia('(min-width: 64rem)');
  const headerLinks = [...document.querySelectorAll('.site-header .nav-links a')];
  const cvLink = headerLinks.find(link => link.textContent.trim() === 'Curriculum');
  const agentsLink = headerLinks.find(link => link.textContent.trim() === 'Agentes');
  const projectsLink = headerLinks.find(link => link.textContent.trim() === 'Proyectos');
  const menu = document.createElement('dialog');
  menu.id = 'mobile-menu';
  menu.className = 'mobile-menu';
  menu.setAttribute('aria-label', 'Menú de navegación');
  menu.innerHTML = `
    <div class="mobile-menu-sheet">
      <button class="menu-toggle mobile-menu-close" type="button" aria-label="Cerrar menú" autofocus>
        <img alt="" aria-hidden="true" width="24" height="24">
      </button>
      <nav class="mobile-menu-links" aria-label="Navegación móvil">
        <a class="mobile-menu-link" data-menu-projects>Proyectos<img alt="" aria-hidden="true" width="32" height="32"></a>
        <a class="mobile-menu-link" data-menu-cv>Curriculum<img alt="" aria-hidden="true" width="32" height="32"></a>
        <a class="mobile-menu-link" data-menu-agents>Agentes<img alt="" aria-hidden="true" width="32" height="32"></a>
      </nav>
    </div>`;
  // Resolve assets and destinations from the existing shared navigation.
  const scriptUrl = document.currentScript.src;
  menu.querySelector('button img').src = new URL('../assets/images/navigation/close.svg', scriptUrl).href;
  menu.querySelectorAll('.mobile-menu-link img').forEach(image => {
    image.src = new URL('../assets/images/navigation/sheet-arrow.svg', scriptUrl).href;
  });
  menu.querySelector('[data-menu-cv]').href = cvLink.getAttribute('href');
  menu.querySelector('[data-menu-projects]').href = projectsLink.getAttribute('href');
  menu.querySelector('[data-menu-agents]').href = agentsLink.getAttribute('href');
  document.body.append(menu);
  const closeButton = menu.querySelector('button');
  let savedScroll = null;

  function closeMenu(returnFocus = true) {
    if (!menu.open) return;
    menu.close();
    document.documentElement.classList.remove('mobile-menu-open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', 'Abrir menú');
    if (savedScroll) {
      window.scrollTo({ left: savedScroll.x, top: savedScroll.y, behavior: 'instant' });
      savedScroll = null;
    }
    if (returnFocus && !desktop.matches) trigger.focus({ preventScroll: true });
  }

  trigger.addEventListener('click', () => {
    if (desktop.matches || menu.open) return;
    savedScroll = { x: scrollX, y: scrollY };
    document.documentElement.classList.add('mobile-menu-open');
    trigger.setAttribute('aria-expanded', 'true');
    trigger.setAttribute('aria-label', 'Cerrar menú');
    menu.showModal();
    closeButton.focus({ preventScroll: true });
  });
  closeButton.addEventListener('click', () => closeMenu());
  menu.addEventListener('cancel', event => {
    event.preventDefault();
    closeMenu();
  });
  menu.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const first = closeButton;
    const last = menu.querySelector('[data-menu-agents]');
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus({ preventScroll: true });
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus({ preventScroll: true });
    }
  });
  menu.addEventListener('click', event => {
    if (event.target === menu) closeMenu();
    else if (event.target.closest('a[href]')) closeMenu(false);
  });
  desktop.addEventListener('change', () => {
    if (desktop.matches) closeMenu(false);
  });
  window.addEventListener('pagehide', () => closeMenu(false));
})();
