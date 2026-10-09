type V4Props = { lang: string; siteBase: string };

const screenshots = [
  ["v4-ribbon-visual-designer.png", "Ribbon Visual Designer", "Design RibbonX tabs, groups and controls with a live Office-style preview, structure tree and property editor.", 1475, 875],
  ["v4-vba-userform-designer.png", "VBA UserForm Designer · Community + PRO", "Create and edit native VBA/MSForms UserForms visually. This license-activation form also shows that classic UserForms are available in Community.", 1475, 950],
  ["v4-modern-forms-designer.png", "Modern Forms Designer · PRO", "Build modern JSON-based forms with themes, validation, drag/resize controls and runtime preview. Modern Forms are exclusive to PRO.", 1475, 950],
  ["v4-pro-license-tools.png", "Add-in Licensing Tools · PRO", "License Generator, Inject Validator and Remove Validator let PRO users add licensing to an Office add-in or remove it later.", 1440, 981],
  ["v4-littleapi-not-configured.png", "Modern warning dialog in Excel · PRO", "A real modern dialog running inside Excel. This LittleAPI sample shows how an add-in can guide the user when configuration is missing.", 1920, 1140],
  ["v4-littleapi-connection-form.png", "Modern Form running in Excel · PRO", "A real LittleAPI connection form running inside Excel, showing the Modern Forms runtime in an Office add-in workflow.", 1920, 1140],
  ["v4-littleapi-connection-success.png", "Modern information dialog in Excel · PRO", "A real successful-connection message displayed by an Office add-in using the modern dialog runtime.", 1920, 1140],
  ["v4-littleapi-reload-confirm.png", "Modern confirmation dialog in Excel · PRO", "A Yes/No confirmation flow running inside Excel, demonstrating a modern VBA-compatible dialog.", 1920, 1140],
  ["v4-license-powerpoint-modern.png", "Licensed add-in activation in PowerPoint · PRO", "A modern activation form running directly in PowerPoint with device code, license code entry, copy and activate actions.", 1920, 1140],
  ["v4-license-word-success.png", "License validation in Word · PRO", "A real Word add-in reporting that its license is valid and activated through the modern dialog system.", 1920, 1140],
  ["v4-license-excel-classic.png", "Classic VBA license form in Excel", "A native VBA/MSForms activation form running in Excel, demonstrating the classic UserForm workflow supported by the visual designer.", 1920, 1140],
  ["v4-create-installer-dialog.png", "Create Installer workflow · PRO", "Ribbon UI Studio prepares the add-in deployment configuration, including product metadata, icon and optional VBA obfuscation. InstallerLab must be installed to generate the Windows package.", 1918, 1200],
  ["v4-installer-running.png", "Generated Windows installer", "A Windows installer generated from the deployment workflow. EXE, MSI and Bundle generation requires InstallerLab.", 952, 663],
  ["v4-office-icon-gallery.png", "Office imageMso icon gallery", "Browse and filter Office icons visually instead of memorizing imageMso names, then use the selected icon in the Ribbon design.", 1918, 1200]
] as const;

const screenshotsEs = [
  ["v4-ribbon-visual-designer.png", "Diseñador visual de Ribbon", "Diseña pestañas, grupos y controles RibbonX con vista previa estilo Office, árbol de estructura y editor de propiedades.", 1475, 875],
  ["v4-vba-userform-designer.png", "VBA UserForm Designer · Community + PRO", "Crea y edita visualmente UserForms VBA/MSForms nativos. Este formulario de activación también demuestra que los UserForms clásicos están disponibles en Community.", 1475, 950],
  ["v4-modern-forms-designer.png", "Modern Forms Designer · PRO", "Crea formularios modernos basados en JSON con temas, validación, drag/resize y vista previa del runtime. Modern Forms es exclusivo de PRO.", 1475, 950],
  ["v4-pro-license-tools.png", "Herramientas de licenciamiento · PRO", "License Generator, Inject Validator y Remove Validator permiten agregar licenciamiento a un add-in de Office o retirarlo posteriormente.", 1440, 981],
  ["v4-littleapi-not-configured.png", "Diálogo moderno de advertencia en Excel · PRO", "Un diálogo moderno real ejecutándose dentro de Excel. El ejemplo LittleAPI muestra cómo un add-in puede guiar al usuario cuando falta configuración.", 1920, 1140],
  ["v4-littleapi-connection-form.png", "Modern Form ejecutándose en Excel · PRO", "Un formulario real de conexión de LittleAPI ejecutándose dentro de Excel, mostrando el runtime de Modern Forms en un flujo real de un add-in de Office.", 1920, 1140],
  ["v4-littleapi-connection-success.png", "Diálogo moderno de información en Excel · PRO", "Mensaje real de conexión correcta mostrado por un add-in de Office mediante el runtime de diálogos modernos.", 1920, 1140],
  ["v4-littleapi-reload-confirm.png", "Diálogo moderno de confirmación en Excel · PRO", "Flujo de confirmación Sí/No ejecutándose dentro de Excel y demostrando un diálogo moderno compatible con VBA.", 1920, 1140],
  ["v4-license-powerpoint-modern.png", "Activación de add-in en PowerPoint · PRO", "Formulario moderno de activación ejecutándose directamente en PowerPoint con código de dispositivo, licencia, copiar y activar.", 1920, 1140],
  ["v4-license-word-success.png", "Validación de licencia en Word · PRO", "Un add-in real de Word informando que la licencia es válida y está activada mediante el sistema de diálogos modernos.", 1920, 1140],
  ["v4-license-excel-classic.png", "Formulario clásico de licencia VBA en Excel", "Un UserForm VBA/MSForms nativo ejecutándose en Excel y demostrando el flujo clásico soportado por el diseñador visual.", 1920, 1140],
  ["v4-create-installer-dialog.png", "Flujo Create Installer · PRO", "Ribbon UI Studio prepara la configuración de distribución del add-in, incluidos metadatos, icono y ofuscación VBA opcional. InstallerLab debe estar instalado para generar el paquete de Windows.", 1918, 1200],
  ["v4-installer-running.png", "Instalador de Windows generado", "Un instalador de Windows generado desde el flujo de distribución. La generación EXE, MSI y Bundle requiere InstallerLab.", 952, 663],
  ["v4-office-icon-gallery.png", "Galería de iconos Office imageMso", "Busca y filtra visualmente iconos de Office sin memorizar nombres imageMso y utiliza el icono seleccionado en el diseño Ribbon.", 1918, 1200]
] as const;

export function V4HomeSections({ lang, siteBase }: V4Props) {
  const es = lang === "es";
  return (
    <>
      <section className="v4-showcase" id="v4">
        <div className="v4-showcase-copy">
          <p className="v4-eyebrow">Ribbon UI Studio v4.0.0</p>
          <h2>{es ? "De editor RibbonX a estudio visual para complementos de Office." : "From RibbonX editor to visual Office add-in studio."}</h2>
          <p>{es
            ? "v4 incorpora el Diseñador Visual de Ribbon, el diseñador de VBA UserForms nativos y, en PRO, Modern Forms, diálogos modernos y gestión de licencias para add-ins."
            : "v4 adds the Ribbon Visual Designer, a native VBA UserForm designer and, in PRO, Modern Forms, modern dialogs and add-in licensing management."}</p>
          <div className="v4-pills">
            <span>Ribbon Visual Designer</span><span>VBA UserForms</span><span>Modern Forms · PRO</span><span>Add-in Licensing · PRO</span>
          </div>
        </div>
        <a
          className="v4-showcase-image"
          href={`${siteBase}/screenshots/v4-ribbon-visual-designer.png?v=20261009-original4`}
          target="_blank"
          rel="noreferrer"
          title={es ? "Abrir imagen a resolución completa" : "Open full-resolution image"}
        >
          <img
            src={`${siteBase}/screenshots/v4-ribbon-visual-designer.png?v=20261009-original4`}
            alt="Ribbon UI Studio v4 Ribbon Visual Designer"
            width={1475}
            height={875}
            loading="eager"
            decoding="async"
          />
        </a>
      </section>

      <section className="v4-editions" id="editions">
        <div className="v4-editions-head">
          <p className="v4-eyebrow">{es ? "Community y PRO" : "Community and PRO"}</p>
          <h2>{es ? "Dos ediciones, con una separación clara." : "Two editions, with a clear feature split."}</h2>
          <p>{es
            ? "Community conserva un flujo potente para RibbonX, VBA y formularios nativos. PRO añade la capa moderna y las funciones de protección y distribución."
            : "Community keeps a strong RibbonX, VBA and native-form workflow. PRO adds the modern UI layer plus protection and distribution features."}</p>
        </div>
        <div className="v4-edition-grid">
          <article>
            <span className="v4-edition-badge">Community</span>
            <h3>{es ? "Diseño Office sin Modern Forms" : "Office design without Modern Forms"}</h3>
            <ul>
              <li>✓ RibbonX / VBA editing</li>
              <li>✓ Ribbon Visual Designer</li>
              <li>✓ {es ? "VBA UserForm Designer — formularios normales" : "VBA UserForm Designer — classic native forms"}</li>
              <li>✓ imageMso / custom icons</li>
              <li>✓ Callback generation and diagnostics</li>
              <li>✓ XML validation and editor workflow</li>
            </ul>
          </article>
          <article className="pro">
            <span className="v4-edition-badge">PRO</span>
            <h3>{es ? "Todo Community + interfaz moderna y distribución" : "Everything in Community + modern UI and distribution"}</h3>
            <ul>
              <li>✓ {es ? "Todo lo incluido en Community" : "Everything included in Community"}</li>
              <li>✓ Modern Forms Designer + runtime</li>
              <li>✓ Modern VBA-compatible dialogs</li>
              <li>✓ {es ? "Agregar licencias a add-ins" : "Add licensing to Office add-ins"}</li>
              <li>✓ {es ? "Quitar licencias de add-ins" : "Remove add-in licensing"}</li>
              <li>✓ {es ? "Empaquetado/protección avanzada" : "Advanced packaging/protection workflow"}</li>
            </ul>
          </article>
        </div>
        <div className="v4-installerlab-note">
          <strong>InstallerLab required for EXE / MSI / Bundle</strong>
          <p>{es
            ? "Para convertir y distribuir un add-in como EXE, MSI o Bundle debes instalar InstallerLab. Ribbon UI Studio prepara el proyecto del complemento y utiliza InstallerLab para generar el paquete de Windows."
            : "To convert and distribute an add-in as EXE, MSI or Bundle, InstallerLab must be installed. Ribbon UI Studio prepares the add-in project and uses InstallerLab to generate the Windows package."}</p>
          <a href="https://installerlab.website/" target="_blank" rel="noreferrer">installerlab.website ↗</a>
        </div>
      </section>
    </>
  );
}

export function V4Documentation({ lang, siteBase }: V4Props) {
  const es = lang === "es";
  const shots = es ? screenshotsEs : screenshots;
  return (
    <section className="v4-docs" id="v4-documentation">
      <header>
        <p className="v4-eyebrow">Ribbon UI Studio v4.0.0</p>
        <h2>{es ? "Novedades de v4 y guía de ediciones" : "What's new in v4 and edition guide"}</h2>
        <p>{es
          ? "v4 amplía Ribbon UI Studio con tres áreas visuales: Ribbon, UserForms VBA nativos y Modern Forms. Los dos sistemas de formularios son diferentes y no deben confundirse."
          : "v4 expands Ribbon UI Studio with three visual areas: Ribbon design, native VBA UserForms and Modern Forms. The two form systems are different and should not be confused."}</p>
      </header>

      <div className="v4-doc-cards">
        <article><h3>🎛️ Ribbon Visual Designer</h3><p>{es ? "Editor estructural con vista previa, árbol, toolbox, propiedades, imageMso, estado visible/enabled y posicionamiento before/after. Apply to file vuelve a escribir el XML RibbonX en el archivo Office." : "Structural designer with live preview, tree, toolbox, properties, imageMso, visible/enabled state and before/after placement. Apply to file writes the resulting RibbonX XML back to the Office file."}</p></article>
        <article><h3>🧩 VBA UserForm Designer · Community + PRO</h3><p>{es ? "Trabaja con UserForms MSForms/VBA nativos. Permite crear o editar formularios normales y conservar el código de eventos y recursos existentes cuando el flujo lo soporta." : "Works with native MSForms/VBA UserForms. It can create or edit classic forms while preserving existing event code and resources where supported."}</p></article>
        <article><h3>✨ Modern Forms · PRO</h3><p>{es ? "Sistema separado basado en JSON y runtime propio. Incluye TextBox, ComboBox, CheckBox, Date, Calendar, File/Folder, Label, Image y Button, además de temas, escala y elevación." : "Separate JSON-based system with its own runtime. Includes TextBox, ComboBox, CheckBox, Date, Calendar, File/Folder, Label, Image and Button plus themes, scale and elevation."}</p></article>
        <article><h3>💬 Modern MsgBox · PRO</h3><p>{es ? "OER_ModernMsgBox mantiene un flujo compatible con los grupos habituales de botones y resultados de VBA, con fallback al MsgBox nativo cuando el runtime moderno no puede utilizarse." : "OER_ModernMsgBox keeps a VBA-friendly workflow for common button groups and results, with native MsgBox fallback when the modern runtime cannot be used."}</p></article>
        <article><h3>🔐 Add-in Licensing · PRO</h3><p>{es ? "PRO permite agregar protección/licencia a un complemento de Office y también retirar esa licencia cuando ya no sea necesaria. La licencia de Ribbon UI Studio y la licencia insertada en el add-in son independientes." : "PRO can add licensing protection to an Office add-in and remove it again when it is no longer required. Ribbon UI Studio's own license and the license embedded in an add-in are separate."}</p></article>
        <article><h3>📦 InstallerLab deployment</h3><p>{es ? "La conversión final a EXE, MSI o Bundle requiere tener InstallerLab instalado. Ribbon UI Studio prepara el add-in y el proyecto de distribución; InstallerLab genera el paquete de Windows." : "Final conversion to EXE, MSI or Bundle requires InstallerLab to be installed. Ribbon UI Studio prepares the add-in and deployment project; InstallerLab generates the Windows package."}</p><a href="https://installerlab.website/" target="_blank" rel="noreferrer">InstallerLab ↗</a></article>
      </div>

      <div className="v4-matrix-wrap">
        <h3>{es ? "Community vs PRO" : "Community vs PRO"}</h3>
        <table className="v4-matrix"><thead><tr><th>{es ? "Función" : "Capability"}</th><th>Community</th><th>PRO</th></tr></thead><tbody>
          <tr><td>RibbonX / VBA editing</td><td>✓</td><td>✓</td></tr>
          <tr><td>Ribbon Visual Designer</td><td>✓</td><td>✓</td></tr>
          <tr><td>{es ? "VBA UserForms normales" : "Classic native VBA UserForms"}</td><td>✓</td><td>✓</td></tr>
          <tr><td>imageMso / callbacks / diagnostics</td><td>✓</td><td>✓</td></tr>
          <tr><td>Modern Forms Designer + runtime</td><td>—</td><td>✓</td></tr>
          <tr><td>Modern VBA-compatible dialogs</td><td>—</td><td>✓</td></tr>
          <tr><td>{es ? "Agregar / quitar licencias a add-ins" : "Add / remove add-in licensing"}</td><td>—</td><td>✓</td></tr>
          <tr><td>{es ? "Empaquetado avanzado con InstallerLab" : "Advanced packaging with InstallerLab"}</td><td>—</td><td>✓</td></tr>
        </tbody></table>
        <p className="v4-matrix-foot">{es
          ? "InstallerLab es una aplicación separada y debe instalarse para generar EXE, MSI o Bundle."
          : "InstallerLab is a separate application and must be installed to generate EXE, MSI or Bundle."} <a href="https://installerlab.website/" target="_blank" rel="noreferrer">installerlab.website ↗</a></p>
      </div>

      <div className="v4-gallery-heading">
        <p className="v4-eyebrow">{es ? "Interfaz real de v4" : "Real v4 interface"}</p>
        <h3>{es ? "La documentación visual, paso a paso" : "Visual documentation, step by step"}</h3>
        <p>{es
          ? "Estas capturas proceden directamente de Ribbon UI Studio v4 y se publican sin compresión con pérdida. Cada imagen corresponde a una función concreta de Community o PRO. Haz clic para verla a resolución completa."
          : "These screenshots come directly from Ribbon UI Studio v4 and are published without lossy compression. Each image documents a specific Community or PRO capability. Click to view it at full resolution."}</p>
      </div>
      <div className="v4-doc-gallery">
        {shots.map(([file,title,body,width,height], index) => {
          const src = `${siteBase}/screenshots/${file}?v=20261009-original4`;
          return (
            <figure key={file}>
              <a
                className="v4-shot-link"
                href={src}
                target="_blank"
                rel="noreferrer"
                title={es ? "Abrir a resolución completa" : "Open full resolution"}
              >
                <img
                  src={src}
                  alt={title}
                  width={width}
                  height={height}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </a>
              <figcaption>
                <strong>{title}</strong>
                <span>{body}</span>
                <small>{es ? "🔍 Clic para ver a resolución completa" : "🔍 Click to view full resolution"}</small>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="v4-example-note">
        <strong>{es ? "Sobre las capturas de LittleAPI" : "About the LittleAPI screenshots"}</strong>
        <p>{es ? "LittleAPI se muestra como un caso real construido con las capacidades de Ribbon UI Studio. No significa que LittleAPI sea una función integrada obligatoria del editor." : "LittleAPI is shown as a real-world add-in built with Ribbon UI Studio capabilities. It does not mean LittleAPI is a required built-in feature of the editor."}</p>
      </div>
    </section>
  );
}
