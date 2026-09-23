"use client";

import { useEffect, useState } from "react";
import { stats, type Stat } from "@/data/stats";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRevealed } from "./Reveal";

const DURATION = 1600;

function format(n: number, thousands?: boolean) {
  return thousands ? n.toLocaleString("vi-VN") : String(n);
}

function Counter({ value, thousands }: Pick<Stat, "value" | "thousands">) {
  const revealed = useRevealed();
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!revealed || reduceMotion) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [revealed, reduceMotion, value]);

  const shown = revealed && reduceMotion ? value : current;
  return <span>{format(shown, thousands)}</span>;
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <div className="stat-num">
            <Counter value={stat.value} thousands={stat.thousands} />
            <span className="suffix">{stat.suffix}</span>
          </div>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
