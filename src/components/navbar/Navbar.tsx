"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { restaurant } from "@/config/restaurant";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          {restaurant.name}
        </Link>

        <nav className="navbar-links">
          <Link href="/menu">Menu</Link>

          <Link href="/#about">About</Link>

          <Link href="/#experience">
            Experience
          </Link>

          <Link href="/#reservation">
            Reservation
          </Link>
        </nav>

        <Link
          href="/#reservation"
          className="navbar-cta"
        >
          Reserve
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <Link href="/menu" onClick={closeMenu}>
          Menu
        </Link>

        <Link href="/#about" onClick={closeMenu}>
          About
        </Link>

        <Link
          href="/#experience"
          onClick={closeMenu}
        >
          Experience
        </Link>

        <Link
          href="/#reservation"
          onClick={closeMenu}
        >
          Reservation
        </Link>
      </div>
    </header>
  );
}
