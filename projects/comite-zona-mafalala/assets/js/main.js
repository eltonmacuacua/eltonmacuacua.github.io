(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const backTop = document.querySelector('.back-top');
  const toast = document.querySelector('.toast');
  const i18n = window.CZM_I18N;
  const t = (text) => i18n?.translate(text) || text;
  const currentLanguage = () => i18n?.getLanguage?.() || 'pt';

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(window.__czmToast);
    window.__czmToast = window.setTimeout(() => toast.classList.remove('show'), 3600);
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', t(isOpen ? 'Fechar menu' : 'Abrir menu'));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', t('Abrir menu'));
    }));
  }

  document.addEventListener('czm:languagechange', () => {
    if (menuToggle) {
      const isOpen = nav?.classList.contains('open');
      menuToggle.setAttribute('aria-label', t(isOpen ? 'Fechar menu' : 'Abrir menu'));
    }
  });

  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('scrolled', y > 10);
    backTop?.classList.toggle('show', y > 520);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const savedScale = Number(localStorage.getItem('czm-font-scale') || 100);
  document.documentElement.style.setProperty('--font-size', `${savedScale}%`);
  const savedContrast = localStorage.getItem('czm-contrast') === '1';
  body.classList.toggle('high-contrast', savedContrast);

  document.querySelector('[data-font="minus"]')?.addEventListener('click', () => {
    const current = Number(localStorage.getItem('czm-font-scale') || 100);
    const next = Math.max(88, current - 6);
    localStorage.setItem('czm-font-scale', next);
    document.documentElement.style.setProperty('--font-size', `${next}%`);
  });
  document.querySelector('[data-font="plus"]')?.addEventListener('click', () => {
    const current = Number(localStorage.getItem('czm-font-scale') || 100);
    const next = Math.min(118, current + 6);
    localStorage.setItem('czm-font-scale', next);
    document.documentElement.style.setProperty('--font-size', `${next}%`);
  });
  document.querySelector('[data-contrast]')?.addEventListener('click', () => {
    const enabled = !body.classList.contains('high-contrast');
    body.classList.toggle('high-contrast', enabled);
    localStorage.setItem('czm-contrast', enabled ? '1' : '0');
    showToast(t(enabled ? 'Contraste reforçado activado.' : 'Contraste normal restaurado.'));
  });

  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('visible'));

  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    const value = btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = !(value === 'todos' || card.dataset.category === value);
    });
  }));

  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = form.querySelector('[name="nome"]')?.value?.trim();
      form.reset();
      if (currentLanguage() === 'ts') {
        showToast(`${name ? `${name}, ` : ''}rungula ra wena ri tsariwile eka vuhundzuluxeri bya xikombiso. Ku hlanganisiwa ni ndlela ya ximfumo ku ta tirhisiwa loko webusayiti yi kandziyisiwa.`);
      } else {
        showToast(`${name ? `${name}, a sua` : 'A sua'} mensagem foi registada nesta demonstração. A integração com o canal oficial será activada na publicação.`);
      }
    });
  });
})();
