(() => {
  function addComparisonSection(){
    const main = document.querySelector('.main');
    const troubleshooting = document.getElementById('troubleshooting');
    if(!main || !troubleshooting || document.getElementById('comparison')) return;

    const article = document.createElement('article');
    article.id = 'comparison';
    article.dataset.title = 'Comparación con otras herramientas';
    article.dataset.keywords = 'comparacion alternatives Office RibbonX Editor Custom UI Editor VSTO Visual Studio ribbon designer features';
    article.innerHTML = `
      <span class="kicker">Comparación</span>
      <h2>¿Cómo se compara Ribbon UI Studio con las herramientas existentes?</h2>
      <p>No todas estas herramientas intentan resolver el mismo problema. <strong>Office RibbonX Editor</strong> es un excelente editor especializado de Custom UI; el antiguo <strong>Custom UI Editor</strong> simplifica la edición clásica del XML; y <strong>Visual Studio VSTO</strong> ofrece un diseñador visual y un modelo de objetos .NET para proyectos Office. Ribbon UI Studio se orienta a otro flujo: mantener <strong>RibbonX + VBA + recursos + creación del add-in + distribución</strong> dentro de una sola aplicación.</p>

      <div class="table-wrap"><table class="table comparison-table">
        <thead><tr><th>Capacidad</th><th>Ribbon UI Studio</th><th>Office RibbonX Editor</th><th>Custom UI Editor</th><th>Visual Studio VSTO</th></tr></thead>
        <tbody>
          <tr><td>Editar directamente archivos Office Open XML existentes</td><td><strong>✓ Sí</strong></td><td>✓ Sí</td><td>✓ Sí</td><td>Proyecto VSTO</td></tr>
          <tr><td>RibbonX Office 2007 y Office 2010+</td><td><strong>✓ Sí</strong></td><td>✓ Sí</td><td>✓ Sí</td><td>✓ Ribbon XML / Designer</td></tr>
          <tr><td>Validación de Ribbon XML</td><td><strong>✓ Sí</strong></td><td>✓ Sí</td><td>✓ Sí</td><td>Integrada en el proyecto</td></tr>
          <tr><td>Generar callbacks</td><td><strong>✓ Genera y puede escribirlos en VBA</strong></td><td>✓ Genera código para copiar</td><td>✓ Genera código para copiar</td><td>Eventos .NET generados por el diseñador</td></tr>
          <tr><td>Editar módulos VBA contenidos en el archivo</td><td><strong>✓ Sí</strong></td><td>—</td><td>—</td><td>— usa C#/VB.NET, no VBA</td></tr>
          <tr><td>Varias pestañas/documentos</td><td><strong>✓ XML + VBA</strong></td><td>✓ Sí</td><td>Limitado</td><td>✓ Sí, como proyecto IDE</td></tr>
          <tr><td>ImageMso e imágenes personalizadas</td><td><strong>✓ Navegador + recursos embebidos</strong></td><td>✓ Iconos personalizados</td><td>✓ Imágenes personalizadas</td><td>✓ Recursos del proyecto</td></tr>
          <tr><td>Vista previa del Ribbon por host Office</td><td><strong>✓ Excel / Word / PowerPoint</strong></td><td>— No integrada</td><td>— No integrada</td><td>✓ Diseñador visual</td></tr>
          <tr><td>Diagnóstico combinado XML + callbacks + imágenes</td><td><strong>✓ Sí</strong></td><td>Validación XML avanzada</td><td>Validación XML</td><td>Compilación y herramientas del IDE</td></tr>
          <tr><td>Crear directamente un add-in VBA nuevo</td><td><strong>✓ .xlam / .dotm / .ppam</strong></td><td>— se edita un archivo ya creado</td><td>— se edita un archivo ya creado</td><td>— crea add-ins VSTO, no esos formatos VBA</td></tr>
          <tr><td>Crear instalador Windows para el add-in</td><td><strong>✓ Integrado</strong></td><td>—</td><td>—</td><td>Posible mediante herramientas de despliegue de Visual Studio</td></tr>
          <tr><td>Automatización CLI para crear add-ins</td><td><strong>✓ Sí</strong></td><td>—</td><td>—</td><td>Build/automatización del ecosistema Visual Studio</td></tr>
          <tr><td>Diseñador visual drag-and-drop</td><td>— Preview visual, edición XML</td><td>— Edición XML</td><td>— Edición XML</td><td><strong>✓ Sí</strong></td></tr>
          <tr><td>Código abierto</td><td>— Software propietario gratuito</td><td><strong>✓ Sí</strong></td><td>Existe una versión comunitaria/open source</td><td>IDE/producto Microsoft</td></tr>
        </tbody>
      </table></div>

      <div class="grid2">
        <div class="card"><h3>Office RibbonX Editor</h3><p>Es la alternativa más cercana si tu objetivo principal es editar <code>customUI</code>. Su proyecto actual incluye resaltado de sintaxis, múltiples archivos/pestañas, validación, plantillas, iconos y generación de callbacks. Es una opción madura y de código abierto.</p></div>
        <div class="card"><h3>Custom UI Editor</h3><p>Fue durante años la herramienta clásica para insertar la parte Custom UI, validar XML, agregar imágenes y generar callbacks. Sigue siendo útil para flujos sencillos, pero el editor original de Microsoft está oficialmente sin soporte.</p></div>
        <div class="card"><h3>Visual Studio + VSTO</h3><p>Es la opción más potente cuando el proyecto es un complemento .NET completo. Su gran ventaja es el diseñador visual de Ribbon, eventos fuertemente tipados y el ecosistema de Visual Studio. A cambio, es un flujo de proyecto VSTO, no un editor directo de add-ins VBA existentes.</p></div>
        <div class="card"><h3>Ribbon UI Studio</h3><p>Está pensado para quien desarrolla sobre archivos y complementos VBA de Office y quiere evitar saltar continuamente entre un editor RibbonX, el VBE, herramientas de iconos y un empaquetador. El objetivo es cubrir el ciclo completo sin ocultar el XML.</p></div>
      </div>

      <div class="callout good"><strong>Dónde Ribbon UI Studio aporta más:</strong> cuando el producto final es un complemento VBA de Excel, Word o PowerPoint y necesitas editar RibbonX, trabajar con sus módulos VBA, revisar visualmente la cinta y preparar su distribución desde el mismo flujo.</div>
      <div class="callout"><strong>Dónde elegir otra herramienta:</strong> si solo necesitas editar rápidamente un <code>customUI.xml</code>, Office RibbonX Editor es una alternativa excelente. Si quieres construir un add-in empresarial en C# o VB.NET con diseñador drag-and-drop y el modelo de objetos VSTO, Visual Studio es la opción natural.</div>

      <h3>Fuentes de referencia</h3>
      <p class="mini">La matriz compara funciones documentadas públicamente, no resultados de rendimiento. Las herramientas evolucionan y algunas capacidades pueden cambiar con nuevas versiones.</p>
      <p><a href="https://github.com/fernandreu/office-ribbonx-editor" target="_blank" rel="noreferrer">Office RibbonX Editor — proyecto oficial ↗</a><br><a href="https://bettersolutions.com/vba/ribbon/custom-ui-editor.htm" target="_blank" rel="noreferrer">Custom UI Editor — referencia y estado de soporte ↗</a><br><a href="https://learn.microsoft.com/visualstudio/vsto/ribbon-designer" target="_blank" rel="noreferrer">Microsoft Learn — VSTO Ribbon Designer ↗</a></p>
    `;
    main.insertBefore(article, troubleshooting);

    const referenceGroup = [...document.querySelectorAll('.navgroup')].find(group => group.querySelector('b')?.textContent.trim() === 'Referencia');
    if(referenceGroup){
      const link = document.createElement('a');
      link.className = 'nav';
      link.href = '#comparison';
      link.textContent = 'Comparación de herramientas';
      referenceGroup.insertBefore(link, referenceGroup.querySelector('a.nav'));
    }
  }

  addComparisonSection();

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
