"use client";

import { useCallback, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** true khi trang đã cuộn quá `offset` px. Trên server luôn là false. */
export function useScrolledPast(offset: number): boolean {
  const getSnapshot = useCallback(() => window.scrollY > offset, [offset]);
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
