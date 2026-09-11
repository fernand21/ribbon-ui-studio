"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./docs.module.css";
import { docsCopy, languages, type Lang } from "./docs-i18n";

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
  "installer inno setup 6 package exe obfuscation",
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

      <div className={styles.trustStrip}><span>Ribbon UI Studio</span><b>Excel</b><b>Word</b><b>PowerPoint</b><b>Office Open XML</b><b>Inno Setup 6</b></div>

      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder={t.search} />
            {query && <div className={styles.searchResults}>{searchResults.length ? searchResults.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setQuery("")}>{item.title}</a>) : <span>{t.noResults}</span>}</div>}
          </div>
          <div className={styles.navGroup}><b>{t.startGroup}</b>{nav.slice(0,3).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>RibbonX</b>{nav.slice(3,7).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>{t.addinsGroup}</b>{nav.slice(7,9).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
          <div className={styles.navGroup}><b>{t.referenceGroup}</b>{nav.slice(9).map((item)=><a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</div>
        </aside>

        <div className={styles.content}>
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
            <div className={styles.innoBox}><span>IS</span><div><strong>Inno Setup 6</strong><p>{t.packagingSafety}</p></div></div>
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

          <footer className={styles.footer}><div><strong>Ribbon UI Studio</strong><span>v3.2</span></div><p>{t.independent}</p></footer>
        </div>
      </div>
    </main>
  );
}
