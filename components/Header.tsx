"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/site";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(8);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <nav className="wrap nav" aria-label="Điều hướng chính">
        <Logo />
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#lien-he" className="btn btn-primary nav-cta" onClick={closeMenu}>
              Đăng ký tư vấn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
