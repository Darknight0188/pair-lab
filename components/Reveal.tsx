"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const RevealContext = createContext(false);

/** true khi section Reveal bao ngoài đã xuất hiện trên màn hình. */
export function useRevealed(): boolean {
  return useContext(RevealContext);
}

type RevealProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

/**
 * Section hiện dần khi cuộn tới (threshold 0.15, chỉ chạy một lần).
 * Trạng thái "đã hiện" được chia sẻ qua context để các phần bên trong,
 * như bộ đếm số liệu, bắt đầu cùng lúc với section.
 */
export default function Reveal({ id, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["block", className, "reveal", visible && "visible"].filter(Boolean).join(" ");

  return (
    <section ref={ref} id={id} className={classes}>
      <RevealContext.Provider value={visible}>{children}</RevealContext.Provider>
    </section>
  );
}
