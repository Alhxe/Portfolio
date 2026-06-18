"use client";

import { motion } from "framer-motion";

const MONO = "var(--font-geist-mono), monospace";

const PHOTO = { cx: 466, cy: 172, r: 76 };

type Node = { id: string; label: string; x: number; y: number };

const NODES: Node[] = [
  { id: "gw", label: "API Gateway", x: 322, y: 172 },
  { id: "auth", label: "Auth", x: 192, y: 74 },
  { id: "orders", label: "Orders", x: 192, y: 172 },
  { id: "payments", label: "Payments", x: 192, y: 270 },
  { id: "pg", label: "PostgreSQL", x: 74, y: 118 },
  { id: "kafka", label: "Kafka", x: 74, y: 232 },
];

const center = (id: string) => {
  if (id === "photo") return { x: PHOTO.cx, y: PHOTO.cy };
  const n = NODES.find((x) => x.id === id)!;
  return { x: n.x, y: n.y };
};

// request flow (right → left): client (photo) → gateway → services → data
const EDGES: [string, string][] = [
  ["photo", "gw"],
  ["gw", "auth"],
  ["gw", "orders"],
  ["gw", "payments"],
  ["auth", "pg"],
  ["orders", "pg"],
  ["orders", "kafka"],
  ["payments", "kafka"],
];

// full round trip: request (photo → gateway → service → data) then response back.
const REQ = "#6366f1"; // indigo: request leg
const RES = "#10b981"; // emerald: response leg
const SEG = 0.95; // seconds per hop
const TURN = 0.5; // pause at the data tier before the response heads back

// One request, modelled as a timeline of hops measured in SEG units:
//   t0  client → gateway        (single request)
//   t1  gateway → services      (fan-out, parallel)
//   t2  services → data stores  (cache miss / query)
//   …turnaround…
//   then the same path in reverse converges back to a single response at the client.
const SERVICE_DATA: [string, string][] = [
  ["auth", "pg"],
  ["orders", "pg"],
  ["payments", "kafka"],
];

type Flow = { e: [string, string]; color: string; delay: number };

const reqEnd = 3 * SEG; // request reaches the data tier after 3 hops
const resBase = reqEnd + TURN; // response leg starts here
const PERIOD = resBase + 3 * SEG + 1.1; // full cycle; all packets loop on this period

const FLOWS: Flow[] = [
  // ── request ──
  { e: ["photo", "gw"], color: REQ, delay: 0 }, // one request in
  ...SERVICE_DATA.map(([svc]) => ({ e: ["gw", svc] as [string, string], color: REQ, delay: SEG })), // fan-out
  ...SERVICE_DATA.map(([svc, db]) => ({ e: [svc, db] as [string, string], color: REQ, delay: 2 * SEG })), // hit data
  // ── response (reverse) ──
  ...SERVICE_DATA.map(([svc, db]) => ({ e: [db, svc] as [string, string], color: RES, delay: resBase })),
  ...SERVICE_DATA.map(([svc]) => ({ e: [svc, "gw"] as [string, string], color: RES, delay: resBase + SEG })), // fan-in
  { e: ["gw", "photo"], color: RES, delay: resBase + 2 * SEG }, // one response out
];

const TIERS = [
  { label: "DATOS", x: 74 },
  { label: "SERVICIOS", x: 192 },
  { label: "GATEWAY", x: 322 },
];

export default function HeroMesh() {
  return (
    <svg viewBox="0 0 560 340" className="w-full max-w-[38rem] overflow-visible">
      <defs>
        <clipPath id="meshPhoto"><circle cx={PHOTO.cx} cy={PHOTO.cy} r={PHOTO.r} /></clipPath>
        <filter id="meshSoft" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#4f46e5" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* tier labels */}
      {TIERS.map((t) => (
        <text key={t.label} x={t.x} y={22} textAnchor="middle" fontSize="9" letterSpacing="2" fontFamily={MONO} fill="#a1a1aa">{t.label}</text>
      ))}

      {/* flow edges */}
      {EDGES.map(([a, b]) => {
        const p = center(a), q = center(b);
        return <line key={`${a}-${b}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#a5b4fc" strokeWidth="1.4" strokeOpacity="0.55" />;
      })}

      {/* request packets flowing right → left (photo → gateway → services → data) */}
      {FLOWS.map(({ e, color, delay }, i) => {
        const a = center(e[0]), b = center(e[1]);
        return (
          <motion.circle
            key={i}
            r="3.4"
            fill={color}
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
            transition={{ duration: SEG, delay, repeat: Infinity, repeatDelay: PERIOD - SEG, ease: "linear" }}
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        );
      })}

      {/* service / data nodes */}
      {NODES.map((n) => {
        const w = n.label.length * 6.3 + 20;
        return (
          <g key={n.id}>
            <rect x={n.x - w / 2} y={n.y - 13} width={w} height="26" rx="8" fill="white" stroke="#e4e4e7" strokeWidth="1" style={{ filter: "drop-shadow(0 3px 7px rgba(0,0,0,0.06))" }} />
            <circle cx={n.x - w / 2 + 11} cy={n.y} r="2.5" fill="#6366f1" />
            <text x={n.x + 5} y={n.y + 4} textAnchor="middle" fontSize="11" fontFamily={MONO} fill="#3f3f46">{n.label}</text>
          </g>
        );
      })}

      {/* photo — the client, calls the gateway */}
      <circle cx={PHOTO.cx} cy={PHOTO.cy} r={PHOTO.r + 6} fill="white" filter="url(#meshSoft)" />
      <image href="/profile.png" x={PHOTO.cx - PHOTO.r * 1.12} y={PHOTO.cy - PHOTO.r * 1.12} width={PHOTO.r * 2 * 1.12} height={PHOTO.r * 2 * 1.12} preserveAspectRatio="xMidYMid slice" clipPath="url(#meshPhoto)" />
      <circle cx={PHOTO.cx} cy={PHOTO.cy} r={PHOTO.r} fill="none" stroke="white" strokeWidth="6" />
      <circle cx={PHOTO.cx} cy={PHOTO.cy} r={PHOTO.r} fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.45" />
    </svg>
  );
}
