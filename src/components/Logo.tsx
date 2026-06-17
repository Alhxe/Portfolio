"use client";

export default function Logo({ className = "text-base", dark = true }: { className?: string; dark?: boolean }) {
  return (
    <span className={`mono font-bold tracking-tight ${className}`} style={{ color: dark ? "#161420" : "#ffffff" }} aria-label="AP">
      AP<span style={{ color: "#4f46e5" }}>.</span>
    </span>
  );
}
