"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "../support-flow.module.css";

type Supporter={id:string;name:string;level?:string;issued?:string;public?:boolean};
type Registry={supporters:Supporter[]};

export default function SupportersPage(){
  const [lang,setLang]=useState<"en"|"es">("en");
  const [data,setData]=useState<Registry>({supporters:[]});
  const [loaded,setLoaded]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem("ore-language");if(saved==="es")setLang("es");fetch("../supporters/data.json",{cache:"no-store"}).then(r=>r.ok?r.json():Promise.reject()).then(d=>setData(d&&Array.isArray(d.supporters)?d:{supporters:[]})).finally(()=>setLoaded(true));},[]);
  const es=lang==="es";
  const requested=typeof window!=="undefined"?new URLSearchParams(window.location.search).get("id")?.trim():"";
  const record=useMemo(()=>requested?data.supporters.find(x=>x.id.toLowerCase()===requested.toLowerCase()):undefined,[requested,data]);
  const verifyUrl=record&&typeof window!=="undefined"?`${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(record.id)}`:"";
  const publicList=data.supporters.filter(x=>x.public===true);
  return <main className={styles.page}><div className={styles.wrap}>
    <div className={styles.topbar}><a className={styles.brand} href="../">RIBBON UI <em>STUDIO</em></a><select className={styles.lang} value={lang} onChange={e=>{const v=e.target.value as "en"|"es";setLang(v);localStorage.setItem("ore-language",v)}}><option value="en">English</option><option value="es">Español</option></select></div>
    {!requested && <><div className={styles.registryHero}><div><div className={styles.eyebrow}>Supporter Registry</div><h1 className={styles.title}>{es?"Supporters de Ribbon UI Studio":"Ribbon UI Studio Supporters"}</h1><p className={styles.lead}>{es?"Solo aparecen aquí las personas que autorizaron el reconocimiento público. Los importes nunca se publican.":"Only supporters who authorized public recognition appear here. Contribution amounts are never published."}</p></div><div className={styles.actions}><a className={`${styles.button} ${styles.primary}`} href="../support/">{es?"Apoyar / enviar comprobante":"Support / send receipt"}</a></div></div>
    <section className={styles.supporterGrid}>{publicList.length?publicList.map(s=><a className={styles.supporter} key={s.id} href={`?id=${encodeURIComponent(s.id)}`}><strong>{s.name||"Private Supporter"}</strong><span>{s.level||"Official Supporter"} · {s.id}</span></a>):<div className={styles.panel}>{loaded?(es?"Los primeros supporters aparecerán aquí cuando autoricen su publicación.":"The first supporters will appear here after they authorize public recognition."):(es?"Cargando…":"Loading…")}</div>}</section></>}
    {requested && loaded && !record && <section className={`${styles.panel} ${styles.invalid}`}><h1>{es?"Certificado no verificado":"Certificate not verified"}</h1><p>{es?"El Supporter ID no existe en el registro público actual.":"The Supporter ID is not present in the current public registry."}</p><a className={styles.back} href="../supporters/">{es?"Volver al registro":"Back to registry"}</a></section>}
    {record && <><section className={styles.certificateShell}><article className={styles.certificate}>
      <div className={styles.certBrand}>RIBBON UI STUDIO</div><div className={styles.certTitle}>OFFICIAL SUPPORTER CERTIFICATE</div><div className={styles.certName}>{record.name||"Private Supporter"}</div><p className={styles.certBody}>{es?"Este certificado reconoce oficialmente el apoyo brindado al desarrollo independiente de Ribbon UI Studio.":"This certificate officially recognizes support provided to the independent development of Ribbon UI Studio."}</p><div className={styles.certLevel}>{record.level||"Official Supporter"}</div><div className={styles.certMeta}>Supporter ID: {record.id} · {es?"Emitido":"Issued"}: {record.issued||"2026"}</div><div className={styles.certPermanent}>PERMANENT · DOES NOT EXPIRE</div><div className={styles.certFooter}><div><div className={styles.signature}>Fernando Arévalo</div><small>Creator of Ribbon UI Studio</small></div><div className={styles.verifyBox}><strong>{es?"Verificación pública":"Public verification"}</strong><br/>{verifyUrl}</div></div>
    </article></section><div className={`${styles.actions} ${styles.noPrint}`}><button className={`${styles.button} ${styles.primary}`} onClick={()=>window.print()}>{es?"Imprimir / Guardar PDF":"Print / Save PDF"}</button><button className={styles.button} onClick={()=>navigator.clipboard?.writeText(verifyUrl)}>{es?"Copiar enlace":"Copy verification link"}</button><a className={styles.button} href="../supporters/">{es?"Ver supporters":"View supporters"}</a></div></>}
  </div></main>
}