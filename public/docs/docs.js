(() => {
  const articles = [...document.querySelectorAll('article[id]')];
  const navLinks = [...document.querySelectorAll('.side a.nav')];
  const input = document.getElementById('docsSearch');
  const results = document.getElementById('docsResults');

  function normalize(s){
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  }

  function renderResults(query){
    if(!input || !results) return;
    const q = normalize(query.trim());
    if(!q){ results.classList.remove('show'); results.innerHTML=''; return; }
    const matches = articles.filter(a => normalize((a.dataset.title || '') + ' ' + (a.dataset.keywords || '') + ' ' + a.textContent).includes(q)).slice(0,8);
    if(!matches.length){
      results.innerHTML='<span style="display:block;padding:8px 9px;color:#91a1b8;font-size:.84rem">Sin resultados</span>';
    } else {
      results.innerHTML=matches.map(a => `<a href="#${a.id}">${a.dataset.title || a.querySelector('h2')?.textContent || a.id}</a>`).join('');
    }
    results.classList.add('show');
  }

  if(input){
    input.addEventListener('input', e => renderResults(e.target.value));
    input.addEventListener('keydown', e => {
      if(e.key === 'Escape'){ input.value=''; renderResults(''); input.blur(); }
    });
  }
  document.addEventListener('click', e => {
    if(results && input && !results.contains(e.target) && e.target !== input) results.classList.remove('show');
  });

  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-copy-target');
      const target = document.getElementById(id);
      if(!target) return;
      try{
        await navigator.clipboard.writeText(target.textContent || '');
        const old = btn.textContent;
        btn.textContent='Copiado';
        setTimeout(() => btn.textContent=old, 1300);
      }catch{}
    });
  });

  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + visible.target.id));
  }, { rootMargin:'-18% 0px -68% 0px', threshold:[0,.15,.3,.5] });
  articles.forEach(a => observer.observe(a));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      if(results) results.classList.remove('show');
    });
  });
})();
