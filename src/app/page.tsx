"use client";

import { motion } from "framer-motion";
import SmartImg from "@/components/SmartImg";
import HeroMesh from "@/components/HeroMesh";
import Logo from "@/components/Logo";
import { PROFILE, STATS, EXPERIENCE, MIARBITRO, STACK_GROUPS, FRONTEND, SOCIALS, CERTS } from "@/data/cv";

const NAV = [
  { id: "experiencia", label: "Experiencia", n: "01" },
  { id: "miarbitro", label: "Proyecto", n: "02" },
  { id: "stack", label: "Stack", n: "03" },
  { id: "contacto", label: "Contacto", n: "04" },
];

function Up({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.55, delay }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionHead({ n, kicker, title }: { n: string; kicker: string; title: string }) {
  return (
    <Up className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="mono text-sm text-amber-500 font-semibold">{n}</span>
        <span className="h-px w-10 bg-zinc-300" />
        <span className="mono text-xs uppercase tracking-[0.2em] text-zinc-500">{kicker}</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">{title}</h2>
    </Up>
  );
}

export default function SignaturePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fbfaf8] text-zinc-900 selection:bg-indigo-600 selection:text-white">
      {/* page texture + soft color glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(#1414280a_1px,transparent_1px),linear-gradient(90deg,#1414280a_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="absolute top-[6%] right-[-8%] w-[34rem] h-[34rem] rounded-full blur-[130px] bg-indigo-200/40" />
        <div className="absolute top-[40%] left-[-12%] w-[30rem] h-[30rem] rounded-full blur-[130px] bg-violet-200/30" />
        <div className="absolute top-[72%] right-[-6%] w-[28rem] h-[28rem] rounded-full blur-[130px] bg-amber-100/40" />
      </div>
      {/* top accent line */}
      <div className="relative z-10 h-1 w-full bg-gradient-to-r from-indigo-600 via-violet-500 to-amber-400" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#fbfaf8]/85 border-b border-zinc-200/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <Logo className="text-lg" />
            <span className="font-semibold tracking-tight text-zinc-400">Alex Pérez</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="group flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 transition-colors">
                <span className="mono text-[10px] text-amber-500">{n.n}</span>{n.label}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="text-sm font-medium px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">Contactar</a>
        </div>
      </header>

      <main id="top" className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="relative py-16 sm:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-center">
            {/* left */}
            <div>
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm mb-7">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="mono text-xs text-zinc-600">Sevilla, España · remoto</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.98]">
                Backend
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Engineer</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                    <path d="M2 7 Q 100 1 198 6" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-lg">
                Soy <span className="text-zinc-900 font-semibold">{PROFILE.name}</span>. {PROFILE.blurb}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-9 flex flex-wrap gap-3">
                <a href="#experiencia" className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25">Ver experiencia</a>
                <a href="#contacto" className="px-5 py-3 rounded-xl bg-white border border-zinc-200 font-medium text-sm hover:border-zinc-300 hover:shadow-sm transition-all">Contacto</a>
              </motion.div>
            </div>

            {/* right: request-flow architecture (desktop) / clean avatar (mobile) */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }} className="relative lg:-ml-6">
              <div className="hidden lg:block"><HeroMesh /></div>
              <div className="lg:hidden flex justify-center py-2">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-300/40 to-amber-200/30 blur-2xl" />
                  <SmartImg src="/profile.jpg" alt={PROFILE.name} className="relative w-44 h-44 rounded-full object-cover ring-[6px] ring-white shadow-xl" fallback={<div className="relative w-44 h-44 rounded-full bg-zinc-100 grid place-items-center text-2xl text-zinc-400 ring-[6px] ring-white shadow-xl">AP</div>} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS band */}
        <Up>
          <div className="grid grid-cols-3 rounded-2xl border border-zinc-200 bg-white overflow-hidden divide-x divide-zinc-200 shadow-sm">
            {STATS.map((s) => (
              <div key={s.label} className="p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight"><span className="bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">{s.value}</span></div>
                <div className="mono text-xs text-zinc-500 mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </Up>

        {/* EXPERIENCE — timeline */}
        <section id="experiencia" className="py-24 scroll-mt-20">
          <SectionHead n="01" kicker="Trayectoria" title="5 años en backend enterprise" />
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-violet-400 to-amber-400" />
            <div className="space-y-6">
              {EXPERIENCE.map((e, i) => (
                <Up key={e.company} delay={i * 0.05}>
                  <div className="relative">
                    <div className="absolute -left-8 sm:-left-10 top-6 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 shadow-[0_0_0_4px_#fbfaf8]" />
                    <div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 hover:border-indigo-200 transition-all">
                      <div className="flex items-start gap-4">
                        <SmartImg src={e.logo} alt={e.company} className="w-12 h-12 rounded-xl object-contain border border-zinc-100 p-2 shrink-0 bg-white" fallback={<div className="w-12 h-12 rounded-xl border border-zinc-100 bg-zinc-50 grid place-items-center text-xs font-semibold text-zinc-400 shrink-0">{e.company.slice(0,2).toUpperCase()}</div>} />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                            <h3 className="font-semibold text-lg">{e.company}</h3>
                            <span className="mono text-xs text-zinc-400">{e.period}</span>
                          </div>
                          <p className="text-sm font-medium text-indigo-600 mt-0.5">{e.role}{e.client && ` — ${e.client}`}</p>
                          <p className="text-zinc-600 leading-relaxed mt-3">{e.description}</p>
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {e.tech.map((tn) => (
                              <span key={tn} className={`mono text-xs px-2 py-0.5 rounded-md border ${tn === "Microservicios" ? "border-amber-300 text-amber-700 bg-amber-50" : "border-zinc-200 text-zinc-500 bg-zinc-50"}`}>{tn}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Up>
              ))}
            </div>
          </div>
        </section>

        {/* MIARBITRO — case study */}
        <section id="miarbitro" className="py-24 scroll-mt-20">
          <SectionHead n="02" kicker="Proyecto propio" title="MiArbitro" />
          <Up>
            <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
              {/* device showcase */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-b from-indigo-50/80 to-white">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl bg-indigo-200/40" />
                <div className="relative flex flex-col lg:flex-row items-center lg:items-end gap-5">
                  <div className="w-full lg:flex-1 lg:min-w-0 rounded-xl border border-zinc-200 bg-zinc-950 overflow-hidden shadow-lg">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-zinc-800 bg-zinc-900">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                      <span className="ml-2 mono text-[10px] text-zinc-500">miarbitro.es</span>
                    </div>
                    <div className="aspect-[2517/1265]">
                      <SmartImg src="/images/miarbitro/web.png" alt="MiArbitro web" className="w-full h-full object-cover object-top" fallback={<div className="w-full h-full grid place-items-center bg-gradient-to-br from-indigo-100 to-violet-100"><span className="mono text-[10px] text-indigo-400">WEB · captura pendiente</span></div>} />
                    </div>
                  </div>
                  <div className="flex items-end gap-3 shrink-0 pb-1">
                    <div className="w-[150px] sm:w-[168px] lg:w-[128px] shrink-0 rounded-[1.6rem] border-4 border-zinc-800 bg-zinc-800 overflow-hidden shadow-xl">
                      <div className="relative aspect-[942/2048]">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-zinc-700 z-10" />
                        <SmartImg src="/images/miarbitro/mobile.png" alt="MiArbitro móvil" className="w-full h-full object-cover object-top" fallback={<div className="w-full h-full grid place-items-center bg-gradient-to-br from-indigo-100 to-violet-100"><span className="mono text-[9px] text-indigo-400 text-center px-1">MÓVIL<br/>pendiente</span></div>} />
                      </div>
                    </div>
                    <div className="w-[84px] sm:w-[94px] lg:w-[74px] shrink-0 rounded-[1.1rem] border-4 border-zinc-800 bg-zinc-800 overflow-hidden shadow-lg">
                      <div className="aspect-[70/89]">
                        <SmartImg src="/images/miarbitro/watch.png" alt="MiArbitro reloj" className="w-full h-full object-cover" fallback={<div className="w-full h-full grid place-items-center bg-gradient-to-br from-indigo-100 to-violet-100"><span className="mono text-[8px] text-indigo-400">RELOJ</span></div>} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t border-zinc-100">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500 text-white">● En producción</span>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-100 text-zinc-600">Certificación CASA</span>
                    </div>
                    <p className="text-zinc-600 leading-relaxed max-w-2xl">{MIARBITRO.description}</p>
                  </div>
                  <a href={MIARBITRO.url} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25">Acceder a la app ↗</a>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {MIARBITRO.challenges.map((c, i) => (
                    <div key={c.title} className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-5">
                      <div className="mono text-xs text-amber-500 mb-2">0{i + 1}</div>
                      <h4 className="font-semibold mb-1 text-sm">{c.title}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">{c.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-6 pt-5 border-t border-zinc-100">
                  <span className="mono text-xs text-zinc-400">stack</span>
                  {MIARBITRO.stack.map((t) => <span key={t} className="mono text-xs px-2 py-0.5 rounded border border-zinc-200 text-zinc-500">{t}</span>)}
                </div>
              </div>
            </div>
          </Up>
        </section>

        {/* STACK */}
        <section id="stack" className="py-24 scroll-mt-20">
          <SectionHead n="03" kicker="Herramientas" title="Stack tecnológico" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STACK_GROUPS.map((g, i) => (
              <Up key={g.label} delay={i * 0.04}>
                <div className={`h-full rounded-2xl border p-6 transition-all hover:shadow-lg ${g.label === "Lenguaje & Core" ? "border-indigo-200 bg-gradient-to-br from-indigo-50 to-white" : "border-zinc-200 bg-white"}`}>
                  <h3 className="mono text-xs uppercase tracking-wider text-indigo-600 mb-4 flex items-center gap-2">
                    {g.label}{g.label === "Lenguaje & Core" && <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-zinc-900 normal-case tracking-normal">principal</span>}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => <span key={it} className="text-sm px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-700">{it}</span>)}
                  </div>
                </div>
              </Up>
            ))}
          </div>
          <Up className="mt-4">
            <div className="rounded-2xl border border-dashed border-zinc-300 p-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="mono text-xs uppercase tracking-wider text-zinc-400">Frontend · complementario</span>
              <div className="flex flex-wrap gap-2">{FRONTEND.map((it) => <span key={it} className="text-sm px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-500">{it}</span>)}</div>
            </div>
          </Up>
          <Up className="mt-8">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="mono text-xs text-zinc-400 mr-2">certificaciones</span>
              {CERTS.map((cert) => <span key={cert} className="text-xs px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600">{cert}</span>)}
            </div>
          </Up>
        </section>

        {/* CONTACT */}
        <section id="contacto" className="py-24 scroll-mt-20">
          <Up>
            <div className="relative rounded-3xl bg-zinc-900 text-white p-10 sm:p-16 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] bg-indigo-600/40" />
              <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full blur-[100px] bg-violet-600/30" />
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6"><Logo className="text-3xl" dark={false} /></div>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 max-w-2xl">¿Te interesa mi perfil?</h2>
                <p className="text-zinc-400 max-w-md mb-10 text-lg">Si mi experiencia encaja con lo que buscáis, estaré encantado de hablar.</p>
                <div className="grid sm:grid-cols-2 gap-3 w-full max-w-2xl text-left">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-4 transition-colors">
                      <div><div className="mono text-xs text-zinc-500">{s.label}</div><div className="font-medium">{s.value}</div></div>
                      <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Up>
          <div className="flex items-center justify-between mt-10 mono text-xs text-zinc-400">
            <span>© 2026 {PROFILE.name}</span>
            <span>Next.js · Cloudflare Pages</span>
          </div>
        </section>
      </main>
    </div>
  );
}
