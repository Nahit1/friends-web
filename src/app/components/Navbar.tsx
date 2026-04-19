"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const navLinks = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#kedi", label: "Kedi" },
  { href: "#kopek", label: "Köpek" },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#anasayfa");
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const sectionIds = ["#anasayfa", "#kedi", "#kopek", "#blog", "#iletisim"];

    const handleScroll = () => {
      // Tıklama ile scroll oluyorsa, scroll spy'ı devre dışı bırak
      if (isClickScrolling.current) return;

      let current = "#anasayfa";
      for (const id of sectionIds) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            current = id;
          }
        }
      }
      // Sayfanın en altına ulaşıldığında iletişim aktif olsun
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 50) {
        current = "#iletisim";
      }
      setActiveLink(current);
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.1)" : "none", transition: "box-shadow 0.3s ease" }}>
      {/* Hover styles */}
      <style>{`
        .nav-link {
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #0ae2da !important;
        }
        .nav-dot {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        @media (max-width: 1750px) {
          .nav-blue-bar {
            width: 700px !important;
            gap: 30px !important;
            padding-left: 40px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 22px !important;
          }
          .nav-search-bar input {
            font-size: 22px !important;
          }
        }
        @media (max-width: 1600px) {
          .nav-blue-bar {
            width: 650px !important;
            gap: 25px !important;
            padding-left: 35px !important;
            height: 55px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 20px !important;
          }
          .nav-logo-desktop img {
            height: 150px !important;
            top: 40px !important;
          }
          .nav-search-bar {
            width: 320px !important;
            margin-left: 80px !important;
          }
          .nav-search-bar input {
            height: 55px !important;
            font-size: 20px !important;
          }
          .nav-search-bar button {
            width: 42px !important;
            height: 42px !important;
          }
        }
        @media (max-width: 1400px) {
          .nav-blue-bar {
            width: 580px !important;
            gap: 18px !important;
            padding-left: 25px !important;
            height: 50px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 18px !important;
          }
          .nav-logo-desktop img {
            height: 130px !important;
            top: 35px !important;
          }
          .nav-search-bar {
            width: 280px !important;
            margin-left: 60px !important;
          }
          .nav-search-bar input {
            height: 50px !important;
            font-size: 18px !important;
          }
          .nav-search-bar button {
            width: 40px !important;
            height: 40px !important;
          }
        }
        @media (max-width: 1125px) {
          .nav-blue-bar {
            width: 480px !important;
            gap: 12px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            height: 45px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 15px !important;
          }
          .nav-blue-bar .nav-dot {
            width: 7px !important;
            height: 7px !important;
          }
          .nav-logo-desktop img {
            height: 110px !important;
            top: 30px !important;
          }
          .nav-search-bar {
            width: 220px !important;
            margin-left: 40px !important;
          }
          .nav-search-bar input {
            height: 45px !important;
            font-size: 15px !important;
            padding-left: 15px !important;
          }
          .nav-search-bar button {
            width: 35px !important;
            height: 35px !important;
          }
        }
        @media (max-width: 920px) {
          .nav-blue-bar {
            display: none !important;
          }
          .nav-search-bar {
            display: none !important;
          }
          .nav-logo-desktop {
            display: none !important;
          }
          .nav-mobile-logo {
            display: block !important;
          }
          .nav-mobile-btn {
            display: block !important;
          }
          .nav-mobile-menu {
            display: block !important;
          }
        }
      `}</style>

      <nav
        style={{
          backgroundColor: "white",
          width: "100%",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Blue menu section - desktop only */}
        <div
          className="hidden md:flex md:items-center nav-blue-bar"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: 0,
            width: "800px",
            height: "60px",
            backgroundColor: "#064597",
            borderTopLeftRadius: "35px",
            borderBottomLeftRadius: "35px",
            paddingLeft: "55px",
            paddingRight: "40px",
            gap: "40px",
            zIndex: 2,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                fontFamily: "'Ultima Pro', Arial, Helvetica, sans-serif",
                fontSize: "25px",
                fontWeight: 700,
                color: activeLink === link.href ? "#0ae2da" : "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.href);
                isClickScrolling.current = true;
                const el = document.querySelector(link.href);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                setTimeout(() => {
                  isClickScrolling.current = false;
                }, 1000);
              }}
            >
              <span
                className="nav-dot"
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#0ae2da",
                  borderRadius: "50%",
                  opacity: activeLink === link.href ? 1 : 0,
                  transform: activeLink === link.href ? "scale(1)" : "scale(0)",
                }}
              />
              {link.label}
            </a>
          ))}
        </div>

        {/* Centered container */}
        <div
          style={{
            maxWidth: "1420px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo - desktop */}
          <a
            href="/"
            className="hidden md:block nav-logo-desktop"
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "flex-start",
            }}
          >
            <Image
              src="/images/friends-logo.png"
              alt="Friends Pet Production"
              width={296}
              height={190}
              style={{
                width: "auto",
                height: "190px",
                display: "block",
                position: "relative",
                top: "50px",
              }}
              priority
            />
          </a>

          {/* Logo - mobile (smaller) */}
          <a
            href="/"
            className="block md:hidden nav-mobile-logo"
            style={{ flexShrink: 0, padding: "12px 0 12px 16px" }}
          >
            <Image
              src="/images/friends-logo.png"
              alt="Friends Pet Production"
              width={120}
              height={77}
              style={{
                width: "auto",
                height: "60px",
                display: "block",
              }}
              priority
            />
          </a>

          {/* Search Bar - desktop only */}
          <div
            style={{
              position: "relative",
              width: "410px",
              flexShrink: 0,
              marginLeft: "120px",
            }}
            className="hidden md:block nav-search-bar"
          >
            <input
              type="text"
              placeholder="Ürün Ara"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                width: "100%",
                height: "65px",
                paddingLeft: "20px",
                paddingRight: "44px",
                borderRadius: "9999px",
                border: "1px solid #e0e0e0",
                backgroundColor: "white",
                fontSize: "24px",
                color: "#666",
                outline: "none",
              }}
            />
            <button
              style={{
                position: "absolute",
                right: "3px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "50px",
                height: "50px",
                backgroundColor: "#0bbbef",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                marginRight: "3px",
              }}
            >
              <FiSearch size={25} color="white" strokeWidth={3} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden nav-mobile-btn"
            style={{
              color: "#064597",
              padding: "8px",
              marginLeft: "auto",
              marginRight: "16px",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden nav-mobile-menu"
          style={{ background: "#064597", padding: "20px 24px" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                fontSize: "16px",
                fontWeight: 700,
                color: activeLink === link.href ? "#0ae2da" : "white",
                marginBottom: "16px",
                textDecoration: "none",
              }}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.href);
                setMobileOpen(false);
                isClickScrolling.current = true;
                const el = document.querySelector(link.href);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                setTimeout(() => {
                  isClickScrolling.current = false;
                }, 1000);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
