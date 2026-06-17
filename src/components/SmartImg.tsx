"use client";

import { useEffect, useRef, useState } from "react";

export default function SmartImg({
  src,
  alt,
  className = "",
  style,
  fallback,
}: {
  src?: string | null;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallback: React.ReactNode;
}) {
  const [err, setErr] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Catch images that already failed before hydration (SSR 404s never fire onError on the client).
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setErr(true);
  }, [src]);

  if (!src || err) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErr(true)}
    />
  );
}
