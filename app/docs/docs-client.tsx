"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./docs.module.css";

type Lang = "en" | "es";
type SectionLink = { id: string; title: string; keywords: string };

const sections: Record<Lang, SectionLink[]> = {
  en: [
    { id: "overview", title: "What Ribbon UI Studio is", keywords: "overview ribbonx office editor windows" },
    { id: "quick-start", title: "Quick start", keywords: "open office file create ribbon save validate" },
    { id: "office-files", title: "Office files and schemas", keywords: "xlsx xlsm xlam docx docm dotm pptx pptm ppam 2007 2010" },
    { id: "xml-editor", title: "RibbonX XML editor", keywords: "monaco tabs xml snippets templates customui customui14" },
    { id: "preview", title: "Preview and diagnostics", keywords: "preview validate duplicate ids callbacks diagnostics" },
    { id: "vba", title: "VBA modules and callbacks", keywords: "vba module callback macros generate edit rename remove" },
    { id: "images", title: "imageMso and custom images", keywords: "imagemso icon png custom images gallery" },
    { id: "addins", title: "Create Office add-ins", keywords: "xlam dotm ppam excel word powerpoint addin" },
    { id: "packaging", title: "Package add-ins for Windows", keywords: "installer inno setup package exe obfuscation" },
    { id: "comparison", title: "Comparison with existing tools", keywords: "office ribbonx editor custom ui editor visual studio vsto comparison" },
    { id: "troubleshooting", title: "Troubleshooting", keywords: "office access vbom macros save backup errors" },
    { id: "reference", title: "Reference and external resources", keywords: "microsoft github reference links" }
  ],
  es: [
    { id: "overview", title: "Qué es Ribbon UI Studio", keywords: "introduccion ribbonx office editor windows" },
    { id: "quick-start", title: "Inicio rápido", keywords: "abrir office crear ribbon guardar validar" },
    { id: "office-files", title: "Archivos Office y esquemas", keywords: "xlsx xlsm xlam docx docm dotm pptx pptm ppam 2007 2010" },
    { id: "xml-editor", title: "Editor XML RibbonX", keywords: "monaco pestanas xml fragmentos plantillas customui customui14" },
    { id: "preview", title: "Vista previa y diagnóstico", keywords: "preview validar ids duplicados callbacks diagnostico" },
    { id: "vba", title: "Módulos VBA y callbacks", keywords: "vba modulo callback macros generar editar renombrar eliminar" },
    { id: "images", title: "imageMso e imágenes personalizadas", keywords: "imagemso iconos png imagenes galeria" },
    { id: "addins", title: "Crear complementos de Office", keywords: "xlam dotm ppam excel word powerpoint complemento" },
    { id: "packaging", title: "Empaquetar complementos para Windows", keywords: "instalador inno setup paquete exe ofuscacion" },
    { id: "comparison", title: "Comparación con herramientas existentes", keywords: "office ribbonx editor custom ui editor visual studio vsto comparacion" },
    { id: "troubleshooting", title: "Solución de problemas", keywords: "office access vbom macros guardar respaldo errores" },
    { id: "reference", title: "Referencia y recursos externos", keywords: "microsoft github referencia enlaces" }
  ]
};

const xmlExample = `<customUI xmlns="http://schemas.microsoft.com/office/2009/07/customui">
  <ribbon>
    <tabs>
      <tab id="tabTools" label="My Tools">
        <group id="grpMain" label="Actions">
          <button id="btnRun"
                  label="Run"
                  imageMso="HappyFace"
                  size="large"
                  onAction="RunAction" />
        </group>
      </tab>
    </tabs>
  </ribbon>
</customUI>`;

const callbackExample = `Public Sub RunAction(control As IRibbonControl)
    MsgBox "Ribbon action executed", vbInformation
End Sub`;

function CodeBlock({ label, children }: { label: string; children: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }
  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeBar}><span>{label}</span><button type="button" onClick={copy}>{copied ? "Copied" : "Copy"}</button></div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

export default function DocsClient() {
  const [lang, setLang] = useState<Lang>("en");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("rus-docs-language");
    const browserSpanish = window.navigator.language.toLowerCase().startsWith("es");
    const nextLang: Lang = stored === "es" || stored === "en" ? stored : browserSpanish ? "es" : "en";
    setLang(nextLang);
    document.documentElement.lang = nextLang;
  }, []);

  function changeLanguage(next: Lang) {
    setLang(next);
    window.localStorage.setItem("rus-docs-language", next);
    document.documentElement.lang = next;
  }

  const nav = sections[lang];
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return nav.filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(q)).slice(0, 7);
  }, [lang, nav, query]);

  const es = lang === "es";

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a className={styles.brand} href="../" aria-label="Ribbon UI Studio home">
          <span className={styles.brandMark}>R</span><span>Ribbon UI Studio</span>
        </a>
        <nav><a href="../#download">{es ? "Descargar" : "Download"}</a><a href="../#screenshots">{es ? "Capturas" : "Screenshots"}</a><a href="https://github.com/fernand21/ribbon-ui-studio" target="_blank" rel="noreferrer">GitHub</a></nav>
        <div className={styles.languageSwitch} aria-label="Documentation language">
          <button className={lang === "en" ? styles.activeLanguage : ""} onClick={() => changeLanguage("en")}>EN</button>
          <button className={lang === "es" ? styles.activeLanguage : ""} onClick={() => changeLanguage("es")}>ES</button>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>{es ? "Documentación oficial · v3.2" : "Official documentation · v3.2"}</span>
          <h1>{es ? "De un archivo Office a una cinta, VBA y un complemento distribuible." : "From an Office file to RibbonX, VBA and a distributable add-in."}</h1>
          <p>{es
            ? "Una guía práctica de Ribbon UI Studio para editar customUI XML, trabajar con módulos VBA, revisar callbacks, usar imageMso, crear complementos para Excel, Word y PowerPoint y preparar su distribución en Windows."
            : "A practical Ribbon UI Studio guide for editing customUI XML, working with VBA modules, checking callbacks, using imageMso, creating Excel, Word and PowerPoint add-ins, and preparing Windows distribution."}</p>
          <div className={styles.badges}><span>RibbonX XML</span><span>VBA</span><span>Excel</span><span>Word</span><span>PowerPoint</span><span>Windows</span></div>
        </div>
      </section>

      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder={es ? "Buscar en la documentación…" : "Search documentation…"} />
            {query && <div className={styles.searchResults}>{searchResults.length ? searchResults.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setQuery("")}>{item.title}</a>) : <span>{es ? "Sin resultados" : "No results"}</span>}</div>}
          </div>
          <div className={styles.navGroup}><b>{es ? "Empieza aquí" : "Start here"}</b>{nav.slice(0,3).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>RibbonX</b>{nav.slice(3,7).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>{es ? "Complementos" : "Add-ins"}</b>{nav.slice(7,9).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>{es ? "Referencia" : "Reference"}</b>{nav.slice(9).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
        </aside>

        <div className={styles.content}>
          <section className={styles.stats} aria-label="Ribbon UI Studio documentation summary">
            <div><strong>3</strong><span>{es ? "hosts Office principales" : "main Office hosts"}</span></div>
            <div><strong>2</strong><span>{es ? "esquemas RibbonX" : "RibbonX schemas"}</span></div>
            <div><strong>1</strong><span>{es ? "flujo XML + VBA + distribución" : "XML + VBA + distribution workflow"}</span></div>
          </section>

          <article id="overview" className={styles.article}>
            <span className={styles.kicker}>{es ? "Introducción" : "Overview"}</span>
            <h2>{es ? "Qué resuelve Ribbon UI Studio" : "What Ribbon UI Studio is designed to solve"}</h2>
            <p>{es
              ? "Ribbon UI Studio es una aplicación de escritorio para Windows centrada en personalizaciones RibbonX de Microsoft Office. En lugar de separar el XML, los callbacks, los módulos VBA, los iconos y el empaquetado en herramientas distintas, los reúne alrededor del mismo archivo o complemento de Office."
              : "Ribbon UI Studio is a Windows desktop application focused on Microsoft Office RibbonX customization. Instead of splitting XML, callbacks, VBA modules, icons and packaging across unrelated tools, it keeps them around the same Office document or add-in."}</p>
            <div className={styles.grid2}>
              <div className={styles.card}><h3>{es ? "Editor de archivo Office" : "Office file editor"}</h3><p>{es ? "Abre el paquete Open XML, localiza customUI/customUI14, imágenes y contenido relacionado sin obligarte a manipular el ZIP manualmente." : "Open the Office Open XML package and work with customUI/customUI14, images and related content without manually editing the ZIP."}</p></div>
              <div className={styles.card}><h3>{es ? "Flujo completo" : "End-to-end workflow"}</h3><p>{es ? "Diseña el Ribbon, revisa callbacks, edita VBA, crea un complemento y prepara un instalador desde el mismo producto." : "Design the ribbon, check callbacks, edit VBA, create an add-in and prepare its installer from the same product."}</p></div>
            </div>
            <div className={styles.callout}><strong>{es ? "Importante:" : "Important:"}</strong> {es ? "haz siempre una copia de seguridad antes de modificar un documento de Office existente." : "always keep a backup before modifying an existing Office document."}</div>
          </article>

          <article id="quick-start" className={styles.article}>
            <span className={styles.kicker}>{es ? "Inicio rápido" : "Quick start"}</span>
            <h2>{es ? "Tu primera personalización en seis pasos" : "Your first customization in six steps"}</h2>
            <div className={styles.steps}>
              {[
                es ? ["01","Abre un archivo Office","Selecciona un documento o complemento compatible y deja que el árbol muestre su contenido."] : ["01","Open an Office file","Choose a compatible document or add-in and let the project tree expose its contents."],
                es ? ["02","Crea o abre customUI","Usa Office 2007 o Office 2010+ según el esquema que necesites."] : ["02","Create or open customUI","Choose Office 2007 or Office 2010+ depending on the schema you need."],
                es ? ["03","Edita XML","Trabaja en Monaco con pestañas, formato y plantillas RibbonX."] : ["03","Edit XML","Work in Monaco with tabs, formatting and RibbonX templates."],
                es ? ["04","Valida y previsualiza","Revisa sintaxis, IDs, callbacks e imágenes antes de abrir Office."] : ["04","Validate and preview","Check syntax, IDs, callbacks and images before opening Office."],
                es ? ["05","Conecta VBA","Genera callbacks faltantes y edita los módulos del documento cuando corresponda."] : ["05","Connect VBA","Generate missing callbacks and edit document modules when appropriate."],
                es ? ["06","Guarda y prueba","Guarda en el archivo Office, ciérralo correctamente y prueba el Ribbon en la aplicación host."] : ["06","Save and test","Write changes back to the Office file, close it cleanly and test the ribbon in the host application."]
              ].map(([n,t,b]) => <div className={styles.step} key={n}><em>{n}</em><div><b>{t}</b><small>{b}</small></div></div>)}
            </div>
          </article>

          <article id="office-files" className={styles.article}>
            <span className={styles.kicker}>{es ? "Formato Office" : "Office format"}</span>
            <h2>{es ? "Office 2007 y Office 2010+ usan partes RibbonX distintas" : "Office 2007 and Office 2010+ use different RibbonX parts"}</h2>
            <p>{es ? "Ribbon UI Studio reconoce las dos ubicaciones habituales del paquete Open XML y puede crear la parte correcta cuando todavía no existe." : "Ribbon UI Studio recognizes both common Open XML package locations and can create the proper part when it does not exist yet."}</p>
            <table className={styles.table}><thead><tr><th>{es ? "Esquema" : "Schema"}</th><th>{es ? "Ruta" : "Path"}</th><th>Namespace</th></tr></thead><tbody>
              <tr><td>Office 2007</td><td><code>customUI/customUI.xml</code></td><td><code>2006/01/customui</code></td></tr>
              <tr><td>Office 2010+</td><td><code>customUI/customUI14.xml</code></td><td><code>2009/07/customui</code></td></tr>
            </tbody></table>
            <p>{es ? "Para callbacks VBA, un archivo sin macros como .xlsx, .docx o .pptx debe guardarse primero en un formato habilitado para macros, por ejemplo .xlsm, .docm o .pptm." : "For VBA callbacks, a macro-free file such as .xlsx, .docx or .pptx must first be saved to a macro-enabled format such as .xlsm, .docm or .pptm."}</p>
          </article>

          <article id="xml-editor" className={styles.article}>
            <span className={styles.kicker}>Monaco + RibbonX</span>
            <h2>{es ? "Edita el XML como código, no como una caja negra" : "Edit XML as code, not as a black box"}</h2>
            <p>{es ? "El editor mantiene documentos separados y permite alternar entre el XML RibbonX y módulos VBA sin mezclar sus rutas de guardado. Las plantillas incluidas sirven como punto de partida para ribbons básicos, menús dinámicos, galerías y flujos específicos de Office." : "The editor keeps documents separated and lets you switch between RibbonX XML and VBA modules without mixing their save targets. Built-in templates provide starting points for basic ribbons, dynamic menus, galleries and Office-specific workflows."}</p>
            <CodeBlock label="customUI14.xml">{xmlExample}</CodeBlock>
            <div className={styles.calloutGood}><strong>{es ? "Consejo:" : "Tip:"}</strong> {es ? "usa IDs propios y estables; evita duplicarlos entre controles del mismo Ribbon." : "use stable custom IDs and avoid duplicates across controls in the same Ribbon."}</div>
          </article>

          <article id="preview" className={styles.article}>
            <span className={styles.kicker}>{es ? "Revisión antes de Office" : "Review before Office"}</span>
            <h2>{es ? "Vista previa visual y diagnóstico" : "Visual preview and diagnostics"}</h2>
            <p>{es ? "Ribbon UI Studio puede construir una representación del Ribbon sin ejecutar Office. La vista previa interpreta tabs, groups, controles, imageMso, imágenes embebidas y la presencia de callbacks para mostrar problemas antes de la prueba final." : "Ribbon UI Studio can build a ribbon representation without launching Office. The preview interprets tabs, groups, controls, imageMso, embedded images and callback presence so problems can be spotted before final testing."}</p>
            <div className={styles.grid3}>
              <div className={styles.card}><h3>XML</h3><p>{es ? "Comprueba que el documento sea XML válido y que el namespace corresponda." : "Checks valid XML and the expected namespace."}</p></div>
              <div className={styles.card}><h3>IDs</h3><p>{es ? "Ayuda a detectar identificadores duplicados o inconsistentes." : "Helps detect duplicated or inconsistent identifiers."}</p></div>
              <div className={styles.card}><h3>Callbacks</h3><p>{es ? "Contrasta atributos de callback con el código VBA disponible." : "Cross-checks callback attributes against available VBA code."}</p></div>
            </div>
          </article>

          <article id="vba" className={styles.article}>
            <span className={styles.kicker}>VBA</span>
            <h2>{es ? "Los callbacks dejan de ser texto para copiar manualmente" : "Callbacks no longer have to be copied manually"}</h2>
            <p>{es ? "Cuando el archivo admite macros, Ribbon UI Studio puede leer módulos VBA, abrirlos como documentos del editor y guardar el módulo correcto. También puede crear callbacks que falten a partir de los atributos del RibbonX." : "When the file supports macros, Ribbon UI Studio can read VBA modules, open them as editor documents and save back to the correct module. It can also create missing callback signatures from RibbonX attributes."}</p>
            <CodeBlock label="RibbonCallbacks.bas">{callbackExample}</CodeBlock>
            <div className={styles.calloutWarn}><strong>{es ? "Seguridad de Office:" : "Office security:"}</strong> {es ? "la automatización del proyecto VBA depende del acceso al modelo de objetos VBA. Si Office lo bloquea, la edición o generación de módulos no podrá completarse." : "VBA project automation depends on access to the VBA object model. If Office blocks it, module editing or generation cannot complete."}</div>
          </article>

          <article id="images" className={styles.article}>
            <span className={styles.kicker}>imageMso</span>
            <h2>{es ? "Iconos nativos y recursos personalizados" : "Built-in icons and custom resources"}</h2>
            <p>{es ? "La galería imageMso usa identificadores de Office para ayudarte a localizar y copiar el nombre correcto. También puedes trabajar con imágenes personalizadas embebidas en el paquete Office y revisar si la vista previa logra resolverlas." : "The imageMso gallery uses Office identifiers to help locate and copy the correct name. You can also work with custom images embedded in the Office package and verify that the preview can resolve them."}</p>
            <div className={styles.flow}><span>imageMso</span><i>+</i><span>PNG custom</span><i>→</i><span>Ribbon XML</span><i>→</i><span>{es ? "Vista previa" : "Preview"}</span></div>
          </article>

          <article id="addins" className={styles.article}>
            <span className={styles.kicker}>{es ? "Creación" : "Creation"}</span>
            <h2>{es ? "Genera complementos para Excel, Word y PowerPoint" : "Create Excel, Word and PowerPoint add-ins"}</h2>
            <p>{es ? "El flujo de creación puede preparar el archivo de complemento, un Ribbon inicial y el módulo RibbonCallbacks para empezar con una estructura coherente." : "The creation workflow can prepare the add-in file, a starter ribbon and the RibbonCallbacks module so the project starts from a coherent structure."}</p>
            <table className={styles.table}><thead><tr><th>Host</th><th>{es ? "Complemento" : "Add-in"}</th><th>{es ? "Uso típico" : "Typical use"}</th></tr></thead><tbody>
              <tr><td>Excel</td><td><code>.xlam</code></td><td>{es ? "Herramientas, automatización y funciones de Excel" : "Excel tools and automation"}</td></tr>
              <tr><td>Word</td><td><code>.dotm</code></td><td>{es ? "Plantillas y herramientas de documentos" : "Document templates and tools"}</td></tr>
              <tr><td>PowerPoint</td><td><code>.ppam</code></td><td>{es ? "Herramientas de presentaciones" : "Presentation tools"}</td></tr>
            </tbody></table>
          </article>

          <article id="packaging" className={styles.article}>
            <span className={styles.kicker}>{es ? "Distribución" : "Distribution"}</span>
            <h2>{es ? "Empaquetado de complementos para Windows" : "Package Office add-ins for Windows"}</h2>
            <p>{es ? "El empaquetador solicita metadatos del producto y prepara la instalación del complemento en Windows. En el estado actual de v3.2, el flujo estable continúa utilizando Inno Setup 6 para compilar el instalador." : "The packager collects product metadata and prepares Windows installation for the add-in. In the current v3.2 state, the stable workflow continues to use Inno Setup 6 to compile the installer."}</p>
            <div className={styles.calloutWarn}><strong>{es ? "Estado de InstallerLab:" : "InstallerLab status:"}</strong> {es ? "la integración CLI está en preparación y no se presenta aquí como ruta estable de producción hasta que el proceso de build confirme de forma fiable el archivo final." : "CLI integration is being prepared and is not documented here as a stable production path until the build process reliably confirms the final output file."}</div>
            <p>{es ? "Cuando se usa la opción de protección/ofuscación, la intención del flujo es trabajar sobre una copia temporal para no modificar el complemento original." : "When protection/obfuscation is enabled, the workflow is designed to operate on a temporary copy rather than altering the original add-in."}</p>
          </article>

          <article id="comparison" className={styles.article}>
            <span className={styles.kicker}>{es ? "Comparativa" : "Comparison"}</span>
            <h2>{es ? "Cómo se compara con herramientas existentes" : "How it compares with existing tools"}</h2>
            <p>{es ? "No todas estas herramientas intentan resolver el mismo problema. Office RibbonX Editor es un excelente editor especializado; Visual Studio/VSTO es un entorno de desarrollo completo; el Custom UI Editor original es una referencia histórica. Ribbon UI Studio intenta cubrir el recorrido XML + VBA + complemento + distribución en una sola aplicación." : "These tools do not all target the same problem. Office RibbonX Editor is a strong focused editor; Visual Studio/VSTO is a full development environment; the original Custom UI Editor is now primarily a historical reference. Ribbon UI Studio aims to cover XML + VBA + add-in + distribution in one application."}</p>
            <div className={styles.comparisonWrap}><table className={`${styles.table} ${styles.comparisonTable}`}><thead><tr><th>{es ? "Capacidad" : "Capability"}</th><th>Ribbon UI Studio</th><th>Office RibbonX Editor</th><th>Office Custom UI Editor</th><th>Visual Studio / VSTO</th></tr></thead><tbody>
              <tr><td>{es ? "Enfoque" : "Primary focus"}</td><td>{es ? "Flujo RibbonX + VBA + add-ins" : "RibbonX + VBA + add-in workflow"}</td><td>{es ? "Edición RibbonX especializada" : "Focused RibbonX editing"}</td><td>{es ? "Edición Custom UI clásica" : "Classic Custom UI editing"}</td><td>{es ? "Desarrollo de soluciones Office .NET" : ".NET Office solution development"}</td></tr>
              <tr><td>{es ? "Aplicación independiente" : "Standalone app"}</td><td>Yes</td><td>Yes</td><td>Yes</td><td>{es ? "No, requiere Visual Studio" : "No, requires Visual Studio"}</td></tr>
              <tr><td>Office 2007 / 2010+ customUI</td><td>Yes</td><td>Yes</td><td>Yes</td><td>{es ? "Sí, mediante Ribbon XML" : "Yes, via Ribbon XML"}</td></tr>
              <tr><td>{es ? "Edición multipestaña" : "Multi-tab editing"}</td><td>Yes</td><td>Yes</td><td>{es ? "Flujo clásico" : "Classic workflow"}</td><td>{es ? "Pestañas del IDE" : "IDE tabs"}</td></tr>
              <tr><td>{es ? "Validación XML" : "XML validation"}</td><td>Yes</td><td>Yes</td><td>Yes</td><td>{es ? "Herramientas del IDE/XML" : "IDE/XML tooling"}</td></tr>
              <tr><td>{es ? "Generar firmas de callbacks" : "Generate callback signatures"}</td><td>Yes</td><td>Yes</td><td>Yes</td><td>{es ? "Código del proyecto" : "Project code"}</td></tr>
              <tr><td>{es ? "Editar módulos VBA dentro del archivo" : "Edit VBA modules inside the file"}</td><td><strong>Integrated</strong></td><td>{es ? "No es su flujo principal" : "Not its primary workflow"}</td><td>{es ? "No es su flujo principal" : "Not its primary workflow"}</td><td>{es ? "VSTO usa C#/VB.NET, no VBA embebido como flujo principal" : "VSTO primarily uses C#/VB.NET rather than embedded VBA"}</td></tr>
              <tr><td>{es ? "Vista previa del Ribbon sensible al host" : "Host-aware ribbon preview"}</td><td><strong>Integrated</strong></td><td>{es ? "Editor XML/iconos" : "XML/icon focused"}</td><td>{es ? "Editor XML clásico" : "Classic XML editor"}</td><td>{es ? "Diseñador visual disponible con límites" : "Visual Designer available with limitations"}</td></tr>
              <tr><td>imageMso / {es ? "imágenes personalizadas" : "custom images"}</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
              <tr><td>{es ? "Crear .xlam / .dotm / .ppam" : "Create .xlam / .dotm / .ppam"}</td><td><strong>Integrated</strong></td><td>{es ? "Edita archivos existentes" : "Primarily edits existing files"}</td><td>{es ? "Edita archivos existentes" : "Primarily edits existing files"}</td><td>{es ? "VSTO crea otro tipo de solución/add-in" : "VSTO creates a different add-in/project model"}</td></tr>
              <tr><td>{es ? "Crear instalador Windows del complemento" : "Build Windows installer for the add-in"}</td><td><strong>Integrated</strong></td><td>—</td><td>—</td><td>{es ? "Se resuelve con herramientas de despliegue del proyecto" : "Handled with project deployment tooling"}</td></tr>
              <tr><td>{es ? "Mejor elección cuando…" : "Best fit when…"}</td><td>{es ? "Quieres trabajar con RibbonX, VBA y distribución juntos" : "You want RibbonX, VBA and distribution together"}</td><td>{es ? "Quieres un editor RibbonX maduro y de código abierto" : "You want a mature open-source RibbonX editor"}</td><td>{es ? "Mantienes un flujo heredado" : "You maintain a legacy workflow"}</td><td>{es ? "Construyes una solución Office .NET completa" : "You are building a full .NET Office solution"}</td></tr>
            </tbody></table></div>
            <div className={styles.callout}><strong>{es ? "Comparación de alcance, no de calidad:" : "Scope comparison, not a quality ranking:"}</strong> {es ? "cada opción puede ser la mejor según el tipo de proyecto." : "each option can be the right choice for a different kind of project."}</div>
          </article>

          <article id="troubleshooting" className={styles.article}>
            <span className={styles.kicker}>{es ? "Problemas comunes" : "Common issues"}</span>
            <h2>{es ? "Antes de pensar que el Ribbon falló" : "Before assuming the ribbon is broken"}</h2>
            <div className={styles.grid2}>
              <div className={styles.card}><h3>{es ? "El callback no aparece" : "Callback does not run"}</h3><p>{es ? "Comprueba el nombre exacto en XML, que el archivo admita macros y que el procedimiento exista en un módulo estándar accesible." : "Check the exact XML name, confirm the file supports macros, and ensure the procedure exists in an accessible standard module."}</p></div>
              <div className={styles.card}><h3>{es ? "Office no muestra la cinta" : "Office does not show the ribbon"}</h3><p>{es ? "Valida el XML, revisa el namespace y confirma que customUI.xml/customUI14.xml esté registrado correctamente dentro del paquete." : "Validate XML, check the namespace and confirm customUI.xml/customUI14.xml is correctly registered inside the package."}</p></div>
              <div className={styles.card}><h3>{es ? "No puedo editar VBA" : "VBA cannot be edited"}</h3><p>{es ? "Office puede bloquear el acceso programático al proyecto VBA. Revisa Trust Center y trabaja solo con documentos de confianza." : "Office can block programmatic access to the VBA project. Review Trust Center settings and only work with trusted documents."}</p></div>
              <div className={styles.card}><h3>{es ? "La imagen no aparece" : "Image does not appear"}</h3><p>{es ? "Distingue entre imageMso y una imagen personalizada. Las imágenes custom necesitan relación y recurso dentro del paquete Office." : "Distinguish imageMso from custom images. Custom images need the correct relationship and resource inside the Office package."}</p></div>
            </div>
          </article>

          <article id="reference" className={styles.article}>
            <span className={styles.kicker}>{es ? "Fuentes" : "Sources"}</span>
            <h2>{es ? "Referencias útiles" : "Useful references"}</h2>
            <p>{es ? "La tabla comparativa se basa en la documentación pública de cada proyecto y en la documentación oficial de Microsoft para VSTO." : "The comparison table is based on each project's public documentation and Microsoft's official VSTO documentation."}</p>
            <div className={styles.referenceLinks}>
              <a href="https://github.com/fernandreu/office-ribbonx-editor" target="_blank" rel="noreferrer"><strong>Office RibbonX Editor</strong><span>{es ? "Proyecto y características" : "Project and feature list"} ↗</span></a>
              <a href="https://github.com/OfficeDev/office-custom-ui-editor" target="_blank" rel="noreferrer"><strong>Office Custom UI Editor</strong><span>{es ? "Repositorio archivado" : "Archived repository"} ↗</span></a>
              <a href="https://learn.microsoft.com/en-us/visualstudio/vsto/ribbon-overview" target="_blank" rel="noreferrer"><strong>Microsoft Learn · VSTO Ribbon</strong><span>{es ? "Designer y Ribbon XML" : "Designer and Ribbon XML"} ↗</span></a>
              <a href="https://github.com/fernand21/ribbon-ui-studio" target="_blank" rel="noreferrer"><strong>Ribbon UI Studio</strong><span>{es ? "Versiones y soporte" : "Releases and support"} ↗</span></a>
            </div>
          </article>

          <footer className={styles.footer}>
            <div><strong>Ribbon UI Studio</strong><span>v3.2 documentation</span></div>
            <p>{es ? "Software independiente para Microsoft Office. No afiliado con Microsoft." : "Independent software for Microsoft Office. Not affiliated with Microsoft."}</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
