document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const links = document.querySelectorAll('[data-page]');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const btnToggleSidebar = document.getElementById('btnToggleSidebar');
  const btnCloseSidebar = document.getElementById('btnCloseSidebar');

  function showPage(id) {
    pages.forEach(p => p.classList.add('hidden'));
    document.getElementById('page-' + id)?.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.dataset.page;
      if (id) {
        showPage(id);
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
      }
    });
  });

  btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  });

  btnCloseSidebar.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });
});
