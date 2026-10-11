"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "../support-flow.module.css";

const PAYPAL = "https://www.paypal.com/paypalme/OfficeRibbon";
const CONTACT = "farevalo210@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT}`;

export default function SupportPage() {
  const [lang,setLang]=useState<"en"|"es">("en");
  const [status,setStatus]=useState("");
  useEffect(()=>{const saved=window.localStorage.getItem("ore-language");if(saved==="es")setLang("es");},[]);
  const es=lang==="es";
  const copy=es?{
    eyebrow:"Soporte, certificado y PRO",title:"Apoya Ribbon UI Studio y conserva una prueba verificable de tu apoyo.",
    lead:"Después de donar o adquirir una licencia PRO, envía el comprobante desde esta página. La validación es manual: los supporters aprobados reciben un ID y certificado permanente; si corresponde a PRO, la licencia del programa se genera externamente con tu Machine Code y se envía por correo electrónico.",
    supporter:"Supporter · desde US$1",supporterText:"Cualquier aporte desde US$1 recibe, tras verificación, un Supporter ID y certificado permanente. El importe exacto no se publica.",
    pro:"Licencia PRO · desde US$10",proText:"Un aporte de US$10 o más permite solicitar una licencia PRO para 1 equipo. Incluye tu Machine Code; la licencia se genera externamente con ese código y se envía de forma privada al correo indicado.",
    donate:"Apoyar desde US$1 · PRO desde US$10",registry:"Ver supporters y certificados",after:"Enviar comprobante",afterText:"Adjunta la evidencia del aporte o compra. No envíes contraseñas, documentos de identidad ni datos bancarios.",
    name:"Nombre o alias para el certificado",email:"Correo de contacto",reference:"Referencia / detalle del pago",kind:"Tipo de solicitud",supportOnly:"Supporter — aporte desde US$1",proRequest:"PRO — aporte desde US$10 + certificado",receipt:"Comprobante (PNG, JPG o PDF)",machine:"Machine Code (solo si solicitas PRO)",publicLabel:"Quiero aparecer públicamente en la página de supporters",submit:"Enviar evidencia",sending:"Enviando…",tooLarge:"El archivo supera 10 MB.",selected:"Archivo seleccionado:",manual:"La verificación es manual. El certificado se registra después de aprobar la evidencia y, si corresponde a PRO, la licencia se genera externamente con el Machine Code y se envía por correo electrónico."
  }:{
    eyebrow:"Support, certificate and PRO",title:"Support Ribbon UI Studio and keep a verifiable record of your contribution.",
    lead:"After donating or purchasing a PRO license, send the receipt from this page. Validation is manual: approved supporters receive a permanent Supporter ID and certificate; for PRO purchases, the application license is generated externally from your Machine Code and sent by email.",
    supporter:"Supporter · from US$1",supporterText:"Any contribution from US$1 receives, after verification, a permanent Supporter ID and certificate. The exact amount is never published.",
    pro:"PRO license · from US$10",proText:"A contribution of US$10 or more can request one PRO license for 1 computer. Include its Machine Code; the license is generated externally from that code and sent privately to your email.",
    donate:"Support from US$1 · PRO from US$10",registry:"View supporters and certificates",after:"Send payment proof",afterText:"Attach evidence of the contribution or purchase. Do not send passwords, identity documents or banking information.",
    name:"Name or alias for the certificate",email:"Contact email",reference:"Payment reference / details",kind:"Request type",supportOnly:"Supporter — contribution from US$1",proRequest:"PRO — contribution from US$10 + certificate",receipt:"Receipt (PNG, JPG or PDF)",machine:"Machine Code (only for PRO requests)",publicLabel:"I want to appear publicly on the supporters page",submit:"Send evidence",sending:"Sending…",tooLarge:"The file is larger than 10 MB.",selected:"Selected file:",manual:"Verification is manual. The certificate is registered after the evidence is approved and, for PRO purchases, the license is generated externally from the Machine Code and sent by email."
  };

  function validateFile(e:React.ChangeEvent<HTMLInputElement>){
    const file=e.target.files?.[0]; if(!file){setStatus("");return;}
    if(file.size>10*1024*1024){e.target.value="";setStatus(copy.tooLarge);return;}
    setStatus(`${copy.selected} ${file.name}`);
  }
  function submit(e:FormEvent<HTMLFormElement>){
    const form=e.currentTarget;
    const file=(form.elements.namedItem("attachment") as HTMLInputElement)?.files?.[0];
    if(!file){e.preventDefault();setStatus(es?"Adjunta el comprobante antes de enviar.":"Attach the receipt before sending.");return;}
    if(file.size>10*1024*1024){e.preventDefault();setStatus(copy.tooLarge);return;}
    setStatus(copy.sending);
  }

  return <main className={styles.page}><div className={styles.wrap}>
    <div className={styles.topbar}><a className={styles.brand} href="../">RIBBON UI <em>STUDIO</em></a><select className={styles.lang} value={lang} onChange={e=>{const v=e.target.value as "en"|"es";setLang(v);localStorage.setItem("ore-language",v)}}><option value="en">English</option><option value="es">Español</option></select></div>
    <section className={styles.hero}>
      <article className={styles.card}><div className={styles.eyebrow}>{copy.eyebrow}</div><h1 className={styles.title}>{copy.title}</h1><p className={styles.lead}>{copy.lead}</p><div className={styles.actions}><a className={`${styles.button} ${styles.paypal}`} href={PAYPAL} target="_blank" rel="noreferrer">{copy.donate}</a><a className={styles.button} href="../supporters/">{copy.registry}</a></div><div className={styles.notice}>{copy.manual}</div></article>
      <aside className={styles.panel}><div className={styles.eyebrow}>Ribbon UI Studio</div><div className={styles.grid}><div><h2>{copy.supporter}</h2><p className={styles.lead}>{copy.supporterText}</p></div><div><h2>{copy.pro}</h2><p className={styles.lead}>{copy.proText}</p></div></div></aside>
    </section>
    <form className={styles.form} action={FORM_ENDPOINT} method="POST" encType="multipart/form-data" onSubmit={submit}>
      <input type="hidden" name="_subject" value="Ribbon UI Studio - Supporter certificate / PRO license request"/><input type="hidden" name="_template" value="table"/><input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{display:"none"}}/>
      <div className={styles.eyebrow}>{copy.after}</div><h2>{copy.after}</h2><p className={styles.lead}>{copy.afterText}</p>
      <div className={styles.formGrid}>
        <div className={styles.field}><label>{copy.name}</label><input name="Name or alias" maxLength={80} required/></div>
        <div className={styles.field}><label>{copy.email}</label><input name="email" type="email" maxLength={160} required/></div>
        <div className={styles.field}><label>{copy.reference}</label><input name="Payment reference" maxLength={160}/></div>
        <div className={styles.field}><label>{copy.kind}</label><select name="Request type" defaultValue="supporter"><option value="supporter">{copy.supportOnly}</option><option value="pro">{copy.proRequest}</option></select></div>
        <div className={styles.field}><label>{copy.receipt}</label><input name="attachment" type="file" accept="image/png,image/jpeg,application/pdf" onChange={validateFile} required/><span className={styles.help}>Max. 10 MB</span></div>
        <div className={styles.field}><label>{copy.machine}</label><input name="Machine Code" maxLength={240}/></div>
      </div>
      <label className={styles.check}><input type="checkbox" name="Public supporters listing" value="Yes"/><span>{copy.publicLabel}</span></label>
      <div className={styles.actions}><button className={`${styles.button} ${styles.primary}`} type="submit">{copy.submit}</button><a className={styles.button} href="../supporters/">{copy.registry}</a></div>
      <div className={styles.status} role="status">{status}</div>
    </form>
  </div></main>
}