'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { defaults } from '@/lib/defaults';
import { urlFor } from '@/sanity/image';
import CountUp from './CountUp';

import Nav from './sections/Nav';
import ChatBubble from './sections/ChatBubble';
import Hero from './sections/Hero';
import Problema from './sections/Problema';
import Metodo from './sections/Metodo';
import AppSection from './sections/AppSection';
import Franja from './sections/Franja';
import WebSection from './sections/WebSection';
import Cifras from './sections/Cifras';
import Partners from './sections/Partners';
import Empezar from './sections/Empezar';
import Planes from './sections/Planes';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';

/** Sanity image with a bundled-asset fallback, so the page renders before seeding. */
const pick = (sanityImage: any, fallback: string) => urlFor(sanityImage) || fallback;

/** The icon paths are authored as one string with ' M' separating sub-paths. */
function iconEl(path: string, size: number, color: string, key: string) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
         strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" key={key}>
      {String(path || '').split(' M').map((dRaw, j) => (
        <path d={j === 0 ? dRaw : 'M' + dRaw} key={j} />
      ))}
    </svg>
  );
}

const scrollTo = (id: string) => () => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
};

export default function Landing({ d }: { d: any }) {
  const [activeApp, setActiveApp] = useState(0);
  const [activeWeb, setActiveWeb] = useState(0);
  const [currency, setCurrency] = useState<'UF' | 'USD'>('USD');
  const [sent, setSent] = useState(false);
  const [stageOn, setStageOn] = useState(false);

  // Reveal the "método" stages once the section scrolls into view.
  useEffect(() => {
    const id = setInterval(() => {
      const el = document.getElementById('metodo');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vis = r.top < window.innerHeight * 0.78 && r.bottom > window.innerHeight * 0.15;
      setStageOn((prev) => (prev === vis ? prev : vis));
    }, 250);
    return () => clearInterval(id);
  }, []);

  const appScreens = useMemo(
    () => (d?.appScreens?.length ? d.appScreens.map((x: any) => ({ ...x, img: pick(x.image, '') })) : defaults.appScreens),
    [d],
  );
  const webScreens = useMemo(
    () => (d?.webScreens?.length ? d.webScreens.map((x: any) => ({ ...x, img: pick(x.image, '') })) : defaults.webScreens),
    [d],
  );
  const plansData = d?.plans?.length ? d.plans : defaults.plans;
  const logos = d?.partnersLogos?.length
    ? d.partnersLogos.map((l: any) => ({ ...l, img: pick(l.image, '') }))
    : defaults.partnersLogos;
  const cifrasItems = d?.cifrasItems?.length ? d.cifrasItems : defaults.cifrasItems;

  const appMenu = appScreens.map((s: any, i: number) => {
    const on = i === activeApp;
    return {
      title: s.title, desc: s.desc,
      select: () => setActiveApp(i),
      cardStyle: 'cursor:pointer;border-radius:18px;padding:20px 22px;transition:background 0.25s ease,border-color 0.25s ease;' +
        (on ? 'background:#F4FAF9;border:1.5px solid #77CFC9;box-shadow:0 8px 24px -12px rgba(0,46,43,0.25);'
            : 'background:#FFFFFF;border:1px solid rgba(0,46,43,0.1);'),
      iconBoxStyle: 'flex:0 0 auto;width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;' +
        (on ? 'background:#002E2B;' : 'background:rgba(119,207,201,0.15);'),
      icon: iconEl(s.iconPath, 22, on ? '#77CFC9' : '#0d6b64', 'ai' + i),
    };
  });

  const webMenu = webScreens.map((s: any, i: number) => {
    const on = i === activeWeb;
    return {
      title: s.title, highlight: s.highlight, desc: s.desc,
      select: () => setActiveWeb(i),
      cardStyle: 'cursor:pointer;border-radius:16px;padding:14px 18px;transition:background 0.25s ease,border-color 0.25s ease;' +
        (on ? 'background:#F4FAF9;border:1.5px solid #77CFC9;box-shadow:0 8px 24px -12px rgba(0,46,43,0.25);'
            : 'background:#FFFFFF;border:1px solid rgba(0,46,43,0.1);'),
      iconBoxStyle: 'flex:0 0 auto;width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;' +
        (on ? 'background:#002E2B;' : 'background:rgba(119,207,201,0.15);'),
      icon: iconEl(s.iconPath, 19, on ? '#77CFC9' : '#0d6b64', 'wi' + i),
    };
  });

  const isUF = currency === 'UF';
  const plans = plansData.map((p: any) => ({
    segment: p.segment, range: p.range, desc: p.desc, highlight: p.highlight, cta: p.cta, features: p.features,
    price: isUF ? p.priceUF : p.priceUSD,
    unit: isUF ? p.unitUF : p.unitUSD,
    example: isUF ? p.exUF : p.exUSD,
    border: p.highlight ? '2px solid #002E2B' : '1px solid rgba(0,46,43,0.1)',
    btnBg: p.highlight ? 'linear-gradient(90deg,#F64500 0%,#77CFC9 60%,#002E2B 100%)' : 'transparent',
    btnColor: p.highlight ? '#FFFFFF' : '#002E2B',
    btnBorder: p.highlight ? 'none' : '1.5px solid rgba(0,46,43,0.35)',
  }));

  const logosRow = [...logos, ...logos].map((lg: any, i: number) => (
    <img key={i} src={lg.img} alt={lg.alt} style={{ height: lg.height || 56, objectFit: 'contain' }} />
  ));

  const ctx = {
    d,
    plans, appMenu, webMenu, cifrasItems,
    appPrev: () => setActiveApp((activeApp - 1 + appScreens.length) % appScreens.length),
    appNext: () => setActiveApp((activeApp + 1) % appScreens.length),
    appActiveLabel: appScreens[activeApp]?.title,
    appImageNode: (
      <img src={appScreens[activeApp]?.img} alt="App BLUM"
           style={{ width: '100%', height: 540, objectFit: 'cover', borderRadius: 26, display: 'block', background: '#002E2B' }} />
    ),
    webPrev: () => setActiveWeb((activeWeb - 1 + webScreens.length) % webScreens.length),
    webNext: () => setActiveWeb((activeWeb + 1) % webScreens.length),
    webActiveLabel: webScreens[activeWeb]?.title,
    webImageNode: (
      <img src={webScreens[activeWeb]?.img} alt="Plataforma web BLUM"
           style={{ width: '100%', aspectRatio: '1.77/1', objectFit: 'cover', objectPosition: 'top center', display: 'block',
                    borderRadius: 16, border: '1px solid rgba(0,46,43,0.1)', boxShadow: '0 24px 55px -20px rgba(0,20,18,0.35)', background: '#F4FAF9' }} />
    ),
    stageWatcher: null,
    stageOp: stageOn ? '1' : '0',
    stageY: stageOn ? '0px' : '26px',
    haNode: <CountUp target={cifrasItems[0]?.target ?? 12000} />,
    usersNode: <CountUp target={cifrasItems[1]?.target ?? 400} />,
    countriesNode: <CountUp target={cifrasItems[2]?.target ?? 3} />,
    logosRow,
    formSent: sent,
    formNotSent: !sent,
    sendForm: () => setSent(true),
    setUF: () => setCurrency('UF'),
    setUSD: () => setCurrency('USD'),
    ufBtnBg: isUF ? '#002E2B' : 'transparent',
    ufBtnColor: isUF ? '#FFFFFF' : '#002E2B',
    usdBtnBg: isUF ? 'transparent' : '#002E2B',
    usdBtnColor: isUF ? '#002E2B' : '#FFFFFF',
    scrollToTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    scrollToContact: scrollTo('contacto'),
    scrollToMetodo: scrollTo('metodo'),
    scrollToProblema: scrollTo('problema'),
  };

  return (
    <div data-screen-label="Landing v5" style={{ width: '100%', background: '#FFFFFF', color: '#002E2B', overflowX: 'hidden' }}>
      <Nav {...ctx} />
      <ChatBubble {...ctx} />
      <Hero {...ctx} />
      <Problema {...ctx} />
      <Metodo {...ctx} />
      <AppSection {...ctx} />
      <Franja {...ctx} />
      <WebSection {...ctx} />
      <Cifras {...ctx} />
      <Partners {...ctx} />
      <Empezar {...ctx} />
      <Planes {...ctx} />
      <Contacto {...ctx} />
      <Footer {...ctx} />
    </div>
  );
}
