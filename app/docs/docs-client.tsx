"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./docs.module.css";
import { docsCopy, languages, type Lang } from "./docs-i18n";
import { V4Documentation } from "../v4-content";

const siteBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const sectionIds = ["overview","quick-start","office-files","xml-editor","preview","vba","images","addins","packaging","comparison","troubleshooting","reference"] as const;
const sectionKeywords = [
  "overview ribbonx office editor windows",
  "quick start open office file create ribbon save validate",
  "xlsx xlsm xlam docx docm dotm pptx pptm ppam 2007 2010",
  "monaco tabs xml snippets templates customui customui14",
  "preview validate duplicate ids callbacks diagnostics",
  "vba module callback macros generate edit rename remove",
  "imagemso icon png custom images gallery",
  "xlam dotm ppam excel word powerpoint addin",
  "installer installerlab package exe msi bundle pro obfuscation",
  "office ribbonx editor custom ui editor visual studio vsto comparison",
  "office access vbom macros save backup errors",
  "microsoft github reference links"
];

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
      <div className={styles.codeBar}>
        <span>{label}</span>
        <button type="button" onClick={copy}>{copied ? "✓" : "Copy"}</button>
      </div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

export default function DocsClient() {
  const [lang, setLang] = useState<Lang>("en");
  const [query, setQuery] = useState("");
  const t = docsCopy[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem("ore-language");
    const browser = window.navigator.language.toLowerCase().split("-")[0];
    const supported = languages.some(([code]) => code === stored);
    const browserSupported = languages.some(([code]) => code === browser);
    const next = (supported ? stored : browserSupported ? browser : "en") as Lang;
    setLang(next);
    document.documentElement.lang = next;
  }, []);

  function changeLanguage(next: Lang) {
    setLang(next);
    window.localStorage.setItem("ore-language", next);
    document.documentElement.lang = next;
  }

  const nav = sectionIds.map((id, i) => ({ id, title: t.nav[i], keywords: sectionKeywords[i] }));
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return nav.filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query, nav]);

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a className={styles.brand} href={`${siteBase}/`} aria-label="Ribbon UI Studio">
          <span className={styles.brandGlyph} aria-hidden="true"><i/><i/><i/></span>
          <span>Ribbon UI Studio</span>
        </a>
        <nav>
          <a href={`${siteBase}/#download`}>{t.download}</a>
          <a href={`${siteBase}/#screenshots`}>{t.screenshots}</a>
          <a href="https://github.com/fernand21/ribbon-ui-studio" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <label className={styles.languagePicker}>
          <span aria-hidden="true">◎</span>
          <select value={lang} onChange={(e) => changeLanguage(e.target.value as Lang)} aria-label="Language">
            {languages.map(([code,name]) => <option key={code} value={code}>{name}</option>)}
          </select>
        </label>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}><span />{t.official}</p>
          <h1>{t.heroTitle}</h1>
          <p className={styles.heroLede}>{t.heroBody}</p>
          <div className={styles.badges}><span>RibbonX XML</span><span>VBA</span><span>Excel</span><span>Word</span><span>PowerPoint</span><span>Windows</span></div>
        </div>
      </section>

      <div className={styles.trustStrip}><span>Ribbon UI Studio v4</span><b>Excel</b><b>Word</b><b>PowerPoint</b><b>Office Open XML</b><b>InstallerLab deployment</b></div>

      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder={t.search} />
            {query && <div className={styles.searchResults}>{searchResults.length ? searchResults.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setQuery("")}>{item.title}</a>) : <span>{t.noResults}</span>}</div>}
          </div>
          <div className={styles.navGroup}><b>{t.startGroup}</b>{nav.slice(0,3).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>RibbonX</b>{nav.slice(3,7).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>{t.addinsGroup}</b>{nav.slice(7,9).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>Modern Forms · PRO</b><a href="#modern-forms-tutorial">Modern Forms — VBA, Ribbon &amp; deployment</a></div>
          <div className={styles.navGroup}><b>{t.referenceGroup}</b>{nav.slice(9).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
        </aside>

        <div className={styles.content}>
          <article className={styles.article} id="modern-forms-tutorial" style={{border:"1px solid #36b9cc",borderRadius:16,padding:24,marginBottom:26}}>
            <span className={styles.kicker}>Modern Forms · PRO · VBA</span>
            <h2>{lang === "es" ? "Tutorial práctico: Modern Forms y Modern Message" : "Practical tutorial: Modern Forms & Modern Message"}</h2>
            <p>{lang === "es" ? "Aprende a crear frmCustomer, conectarlo a un botón Ribbon, recuperar valores con VBA y usar OER_ModernMsgBox. Incluye código listo para adaptar y la instalación COM necesaria." : "Create frmCustomer, call it from a Ribbon button, read values in VBA, and use OER_ModernMsgBox. Includes adaptable code and COM deployment instructions."}</p>
            <p><a href="#modern-forms-examples" style={{color:"#67e8f9",fontWeight:700}}>{lang === "es" ? "Abrir guía con ejemplos VBA →" : "Open VBA examples and step-by-step guide →"}</a></p>
            <CodeBlock label="Ribbon callback · VBA">{`Public Sub OpenCustomer(control As IRibbonControl)\n    OER_OpenModernForm_frmCustomer\nEnd Sub`}</CodeBlock>
            <CodeBlock label="Modern Message · VBA">{`Public Sub ShowModernMessage(control As IRibbonControl)\n    OER_ModernMsgBox "Operation completed", vbInformation, "Ribbon UI Studio"\nEnd Sub`}</CodeBlock>
            <p>{lang === "es" ? "Importante: Modern Forms requiere el runtime instalado mediante EXE/MSI. Exportar el archivo Office por separado no registra la DLL COM." : "Important: Modern Forms requires the EXE/MSI-installed runtime. Standalone Office file export does not register the COM DLL."}</p>
          </article>
          <article id="modern-forms-examples" className={styles.article}>
            <span className={styles.kicker}>Modern Forms · Practical VBA examples</span>
            <h2>{lang === "es" ? "Cómo crear, abrir y usar Modern Forms" : "How to create, open and use Modern Forms"}</h2>
            <p>{lang === "es" ? "Crea un complemento XLAM, DOTM o PPAM y abre Modern Forms Designer desde Herramientas (PRO). Crea frmCustomer con txtName (TextBox), cmbDepartment (ComboBox), chkActive (CheckBox), btnSave (Action: accept) y btnCancel (Action: cancel). Guarda: el editor sincroniza forms.json e inyecta OERModernFormsBootstrap." : "Create an XLAM, DOTM or PPAM add-in, then open Modern Forms Designer from Tools (PRO). Create frmCustomer with txtName (TextBox), cmbDepartment (ComboBox), chkActive (CheckBox), btnSave (Action: accept) and btnCancel (Action: cancel). Save: the editor synchronizes forms.json and injects OERModernFormsBootstrap."}</p>
            <h3>{lang === "es" ? "Llamada desde RibbonX" : "Calling from RibbonX"}</h3>
            <p>{lang === "es" ? "En Ribbon Designer define onAction=OpenCustomer. En un módulo VBA estándar, agrega este callback. La llamada OER_OpenModernForm_frmCustomer abre el formulario y despacha los eventos del botón según el módulo generado." : "Set onAction=OpenCustomer in Ribbon Designer. Add this callback in a standard VBA module. OER_OpenModernForm_frmCustomer opens the form and dispatches button events using the generated module."}</p>
            <CodeBlock label="RibbonCallbacks.bas">{`Public Sub OpenCustomer(control As IRibbonControl)
    OER_OpenModernForm_frmCustomer
End Sub`}</CodeBlock>
            <h3>{lang === "es" ? "Abrir y leer los controles" : "Open and read values"}</h3>
            <p>{lang === "es" ? "OER_ShowModernForm_frmCustomer devuelve un resultado JSON directamente, sin despachar por sí mismo los eventos generados. Puedes leer los valores por ID:" : "OER_ShowModernForm_frmCustomer returns the result JSON directly; it does not itself dispatch generated events. Read values by control ID:"}</p>
            <CodeBlock label="VBA · Results">{`Public Sub ReadCustomer(control As IRibbonControl)
    Dim resultJson As String
    resultJson = OER_ShowModernForm_frmCustomer()
    If Not OER_ModernFormAccepted(resultJson) Then Exit Sub

    Dim customerName As String
    customerName = OER_ModernFormValue(resultJson, "txtName")
    Dim department As String
    department = OER_ModernFormValue(resultJson, "cmbDepartment")
    Dim activeValue As String
    activeValue = OER_ModernFormValue(resultJson, "chkActive")

    MsgBox customerName & " - " & department & " - " & activeValue
End Sub`}</CodeBlock>
            <h3>{lang === "es" ? "Mensajes modernos — OER_ModernMsgBox" : "Modern messages — OER_ModernMsgBox"}</h3>
            <p>{lang === "es" ? "Guarda el proyecto para que se genere OERModernMessages. Ejemplos de información y confirmación con la misma convención de argumentos que MsgBox. Comprueba la firma del módulo generado si trabajas con otra versión." : "Save the project so OERModernMessages is generated. Examples using MsgBox-style parameters. Check the generated module signature if using another version."}</p>
            <CodeBlock label="VBA · Modern Message">{`Public Sub NotifyCustomer(control As IRibbonControl)
    OER_ModernMsgBox "Customer saved", vbInformation, "Customers"
End Sub

Public Sub AskBeforeDelete(control As IRibbonControl)
    Dim answer As VbMsgBoxResult
    answer = OER_ModernMsgBox("Delete customer?", vbYesNo Or vbQuestion, "Confirm")
    If answer = vbYes Then
        ' Delete customer only after confirmation.
    End If
End Sub`}</CodeBlock>
            <h3>{lang === "es" ? "Eventos de botones y GroupBox" : "Button events and GroupBox"}</h3>
            <p>{lang === "es" ? "Los GroupBox admiten hijos y contenedores anidados; Parent indica la jerarquía y las coordenadas de los hijos son locales. El editor puede generar módulos OERF_ por formulario; modifica el cuerpo del handler existente, sin duplicarlo. Los nombres, parámetros y llamadas del VBA generado en tu archivo son la referencia definitiva." : "GroupBox controls support nested children with parent-local coordinates. The editor can generate per-form OERF_ event modules; edit existing handler bodies without duplicating them. The generated VBA in your file is the definitive reference for names and signatures."}</p>
            <h3>{lang === "es" ? "Instalación y error ActiveX" : "Installation and ActiveX error"}</h3>
            <p>{lang === "es" ? "Modern Forms requiere OfficeEditor.ModernForms.dll, .NET Framework 4.8 y registro COM HKCU por complemento. Distribuye mediante el EXE/MSI de InstallerLab. Abrir un DOTM/XLAM/PPAM directamente puede mostrar «El componente ActiveX no puede crear el objeto» porque falta el ProgID registrado. La exportación protegida sin instalador no instala el runtime. Los UserForms clásicos no necesitan esta dependencia." : "Modern Forms requires OfficeEditor.ModernForms.dll, .NET Framework 4.8, and per-add-in HKCU COM registration. Distribute through an InstallerLab EXE/MSI. Opening a DOTM/XLAM/PPAM directly may show ActiveX component cannot create object because the ProgID was not registered. Standalone protected export does not install this runtime. Classic UserForms do not need it."}</p>
          </article>
          <V4Documentation lang={lang} siteBase={siteBase} />
          <section className={styles.stats}>
            <div><strong>3</strong><span>{t.stats[0]}</span></div>
            <div><strong>2</strong><span>{t.stats[1]}</span></div>
            <div><strong>1</strong><span>{t.stats[2]}</span></div>
          </section>

          <article id="overview" className={styles.article}>
            <span className={styles.kicker}>{t.overviewKicker}</span>
            <h2>{t.overviewTitle}</h2><p>{t.overviewBody}</p>
            <div className={styles.grid2}>{t.overviewCards.map(([title,body])=><div className={styles.card} key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
            <div className={styles.callout}><strong>!</strong> {t.backup}</div>
          </article>

          <article id="quick-start" className={styles.article}>
            <span className={styles.kicker}>{t.quickKicker}</span><h2>{t.quickTitle}</h2>
            <div className={styles.steps}>{t.quickSteps.map(([title,body],i)=><div className={styles.step} key={title}><em>{String(i+1).padStart(2,"0")}</em><div><b>{title}</b><small>{body}</small></div></div>)}</div>
          </article>

          <article id="office-files" className={styles.article}>
            <span className={styles.kicker}>{t.officeKicker}</span><h2>{t.officeTitle}</h2><p>{t.officeBody}</p>
            <table className={styles.table}><thead><tr><th>{t.schema}</th><th>{t.path}</th><th>Namespace</th></tr></thead><tbody>
              <tr><td>Office 2007</td><td><code>customUI/customUI.xml</code></td><td><code>2006/01/customui</code></td></tr>
              <tr><td>Office 2010+</td><td><code>customUI/customUI14.xml</code></td><td><code>2009/07/customui</code></td></tr>
            </tbody></table>
            <p>{t.macroNote}</p>
          </article>

          <article id="xml-editor" className={styles.article}>
            <span className={styles.kicker}>Monaco + RibbonX</span><h2>{t.xmlTitle}</h2><p>{t.xmlBody}</p>
            <CodeBlock label="customUI14.xml">{xmlExample}</CodeBlock>
            <div className={styles.calloutGood}>{t.xmlTip}</div>
          </article>

          <article id="preview" className={styles.article}>
            <span className={styles.kicker}>{t.previewKicker}</span><h2>{t.previewTitle}</h2><p>{t.previewBody}</p>
            <div className={styles.grid3}>{t.previewCards.map(([title,body])=><div className={styles.card} key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
          </article>

          <article id="vba" className={styles.article}>
            <span className={styles.kicker}>VBA</span><h2>{t.vbaTitle}</h2><p>{t.vbaBody}</p>
            <CodeBlock label="RibbonCallbacks.bas">{callbackExample}</CodeBlock>
            <div className={styles.calloutWarn}>{t.vbaSecurity}</div>
          </article>

          <article id="images" className={styles.article}>
            <span className={styles.kicker}>imageMso</span><h2>{t.imagesTitle}</h2><p>{t.imagesBody}</p>
            <div className={styles.flow}><span>imageMso</span><i>+</i><span>PNG custom</span><i>→</i><span>Ribbon XML</span><i>→</i><span>{t.previewWord}</span></div>
          </article>

          <article id="addins" className={styles.article}>
            <span className={styles.kicker}>{t.addinsKicker}</span><h2>{t.addinsTitle}</h2><p>{t.addinsBody}</p>
            <table className={styles.table}><thead><tr><th>Host</th><th>Add-in</th><th>{t.addinUse}</th></tr></thead><tbody>
              <tr><td>Excel</td><td><code>.xlam</code></td><td>{t.excelUse}</td></tr>
              <tr><td>Word</td><td><code>.dotm</code></td><td>{t.wordUse}</td></tr>
              <tr><td>PowerPoint</td><td><code>.ppam</code></td><td>{t.pptUse}</td></tr>
            </tbody></table>
          </article>

          <article id="packaging" className={styles.article}>
            <span className={styles.kicker}>{t.packagingKicker}</span><h2>{t.packagingTitle}</h2><p>{t.packagingBody}</p>
            <div className={styles.innoBox}><span>IL</span><div><strong>InstallerLab</strong><p>{t.packagingSafety}</p><p><a href="https://installerlab.website/" target="_blank" rel="noreferrer">installerlab.website ↗</a></p></div></div>
          </article>

          <article id="comparison" className={styles.article}>
            <span className={styles.kicker}>{t.comparisonKicker}</span><h2>{t.comparisonTitle}</h2><p>{t.comparisonBody}</p>
            <div className={styles.comparisonWrap}><table className={`${styles.table} ${styles.comparisonTable}`}><thead><tr><th>Capability</th><th>Ribbon UI Studio</th><th>Office RibbonX Editor</th><th>Office Custom UI Editor</th><th>Visual Studio / VSTO</th></tr></thead><tbody>
              {t.comparisonRows.map((row)=><tr key={row[0]}>{row.map((cell,i)=><td key={`${row[0]}-${i}`}>{cell}</td>)}</tr>)}
            </tbody></table></div>
            <div className={styles.callout}>{t.scopeNote}</div>
          </article>

          <article id="troubleshooting" className={styles.article}>
            <span className={styles.kicker}>{t.troubleshootingKicker}</span><h2>{t.troubleshootingTitle}</h2>
            <div className={styles.grid2}>{t.troubleshootingCards.map(([title,body])=><div className={styles.card} key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
          </article>

          <article id="reference" className={styles.article}>
            <span className={styles.kicker}>{t.referenceKicker}</span><h2>{t.referenceTitle}</h2><p>{t.referenceBody}</p>
            <div className={styles.referenceLinks}>
              <a href="https://github.com/fernandreu/office-ribbonx-editor" target="_blank" rel="noreferrer"><strong>Office RibbonX Editor</strong><span>{t.projectFeatures} ↗</span></a>
              <a href="https://github.com/OfficeDev/office-custom-ui-editor" target="_blank" rel="noreferrer"><strong>Office Custom UI Editor</strong><span>{t.archivedRepo} ↗</span></a>
              <a href="https://learn.microsoft.com/en-us/visualstudio/vsto/ribbon-overview" target="_blank" rel="noreferrer"><strong>Microsoft Learn · VSTO Ribbon</strong><span>{t.microsoftRibbon} ↗</span></a>
              <a href="https://github.com/fernand21/ribbon-ui-studio" target="_blank" rel="noreferrer"><strong>Ribbon UI Studio</strong><span>{t.releasesSupport} ↗</span></a>
            </div>
          </article>

          <footer className={styles.footer}><div><strong>Ribbon UI Studio</strong><span>v4.0.0</span></div><p>{t.independent}</p></footer>
        </div>
      </div>
    </main>
  );
}
