(() => {
  const body = document.body;
  const toast = document.querySelector('.toast');
  let toastTimer;
  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }
  const savedTheme = localStorage.getItem('mlp-theme');
  if (savedTheme === 'dark') body.classList.add('dark');
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('mlp-theme', body.classList.contains('dark') ? 'dark' : 'light');
  }));
  const menuButton = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const topNav = document.querySelector('.top-nav');
  menuButton?.addEventListener('click', () => {
    const open = sidebar?.classList.toggle('open');
    topNav?.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  });
  document.querySelectorAll('.print-button').forEach(btn => btn.addEventListener('click', () => window.print()));
  const allChecks = [...document.querySelectorAll('[data-complete]')];
  function getCompleted() {
    return JSON.parse(localStorage.getItem('mlp-completed') || '[]');
  }
  function setCompleted(items) { localStorage.setItem('mlp-completed', JSON.stringify(items)); }
  function renderProgress() {
    const done = getCompleted();
    document.querySelectorAll('.week-complete').forEach(input => {
      input.checked = done.includes(input.dataset.complete);
      input.closest('.week-card')?.classList.toggle('completed', input.checked);
    });
    const count = document.querySelector('#progress-count');
    const bar = document.querySelector('#progress-bar');
    if (count) count.textContent = `${done.length} / 13 complete`;
    if (bar) bar.style.width = `${Math.min(100, done.length / 13 * 100)}%`;
    document.querySelectorAll('[data-page-complete]').forEach(btn => {
      const complete = done.includes(btn.dataset.pageComplete);
      btn.textContent = complete ? '✓ Module completed' : '✓ Mark module complete';
      btn.classList.toggle('primary', complete);
    });
  }
  allChecks.forEach(input => input.addEventListener('change', () => {
    const done = new Set(getCompleted());
    input.checked ? done.add(input.dataset.complete) : done.delete(input.dataset.complete);
    setCompleted([...done]); renderProgress();
  }));
  document.querySelectorAll('[data-page-complete]').forEach(btn => btn.addEventListener('click', () => {
    const done = new Set(getCompleted());
    done.has(btn.dataset.pageComplete) ? done.delete(btn.dataset.pageComplete) : done.add(btn.dataset.pageComplete);
    setCompleted([...done]); renderProgress(); notify(done.has(btn.dataset.pageComplete) ? 'Module marked complete.' : 'Completion mark removed.');
  }));
  document.querySelectorAll('.copy-summary').forEach(btn => btn.addEventListener('click', async () => {
    const title = document.querySelector('.page-hero h1')?.textContent || 'MLP notes';
    const text = `${title}\n\nStudy prompt: Summarise the key ideas, write one example, and answer the practice questions from memory.`;
    try { await navigator.clipboard.writeText(text); notify('Study prompt copied.'); }
    catch { notify('Clipboard access unavailable. Select and copy the text manually.'); }
  }));
  renderProgress();
})();
