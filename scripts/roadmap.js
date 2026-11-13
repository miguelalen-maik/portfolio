// Static content and original curves live in roadmap-data.js; only scrolling is interactive.
(() => {
  const board = document.querySelector('.roadmap-board');
  const scroller = document.querySelector('.roadmap-scroll');
  const viewport = document.querySelector('.roadmap-window');
  const svgNS = 'http://www.w3.org/2000/svg';

  function place(element, item) {
    element.style.left = `${item.x}px`;
    element.style.top = `${item.y}px`;
    if (item.width) element.style.width = `${item.width}px`;
    if (item.height) element.style.height = `${item.height}px`;
  }

  for (const version of roadmapData) {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const list = document.createElement('ul');
    const connections = document.createElement('div');
    heading.id = `roadmap-version-${version.version.replace('.', '-')}`;
    section.setAttribute('aria-labelledby', heading.id);
    list.className = 'roadmap-nodes';
    connections.className = 'roadmap-connections';
    connections.setAttribute('aria-hidden', 'true');

    for (const connection of version.connections) {
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', connection.width);
      svg.setAttribute('height', connection.height);
      svg.setAttribute('viewBox', connection.viewBox);
      svg.setAttribute('fill', 'none');
      svg.setAttribute('focusable', 'false');
      place(svg, connection);
      for (const attributes of connection.paths) {
        const path = document.createElementNS(svgNS, 'path');
        for (const [name, value] of Object.entries(attributes)) {
          path.setAttribute(name, name === 'stroke' ? 'currentColor' : value);
        }
        svg.append(path);
      }
      connections.append(svg);
    }

    for (const node of version.nodes) {
      const element = node.id === version.heading ? heading : document.createElement('li');
      element.className = 'roadmap-node';
      element.dataset.state = node.state;
      element.dataset.node = node.id;
      place(element, node);
      const text = document.createElement('span');
      text.textContent = node.text;
      const state = document.createElement('span');
      state.className = 'sr-only';
      state.textContent = node.state === 'done' ? ' — Completado' : ' — Pendiente';
      element.append(text, state);
      if (element !== heading) list.append(element);
    }

    section.append(connections, heading, list);
    if (version.metrics) {
      const metrics = document.createElement('div');
      metrics.className = 'roadmap-metrics';
      metrics.setAttribute('role', 'group');
      metrics.setAttribute('aria-label', 'Indicadores estáticos de la referencia del roadmap');
      place(metrics, version.metrics);
      for (const item of version.metrics.items) {
        const metric = document.createElement('div');
        metric.className = 'roadmap-metric';
        const score = document.createElement('div');
        score.className = 'roadmap-score';
        const image = document.createElement('img');
        image.src = `../assets/images/roadmap/${item.asset}`;
        image.alt = '';
        image.width = 37;
        image.height = 37;
        const value = document.createElement('span');
        value.textContent = item.value;
        const label = document.createElement('span');
        label.className = 'roadmap-metric-label';
        label.textContent = item.label;
        score.append(image, value);
        metric.append(score, label);
        metrics.append(metric);
      }
      section.append(metrics);
    }
    board.append(section);
  }

  function updateEdges() {
    viewport.toggleAttribute('data-left', scroller.scrollLeft > 1);
    viewport.toggleAttribute('data-right', scroller.scrollLeft < scroller.scrollWidth - scroller.clientWidth - 1);
  }
  scroller.addEventListener('scroll', updateEdges, { passive: true });
  scroller.addEventListener('keydown', event => {
    if (event.target !== scroller || (event.key !== 'Home' && event.key !== 'End')) return;
    event.preventDefault();
    scroller.scrollTo({ left: event.key === 'Home' ? 0 : scroller.scrollWidth, behavior: 'instant' });
  });
  new ResizeObserver(updateEdges).observe(scroller);
  updateEdges();
})();
