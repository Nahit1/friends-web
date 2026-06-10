"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

type NavLink = {
  href: string;
  label: string;
  submenu?: string[];
};

const navLinks: NavLink[] = [
  { href: "#anasayfa", label: "Anasayfa" },
  {
    href: "/kedi",
    label: "Kedi",
    submenu: ["Kuru Mamalar", "Yaş Mamalar", "Kedi Kumları"],
  },
  {
    href: "#kopek",
    label: "Köpek",
    submenu: ["Kuru Mamalar", "Yaş Mamalar"],
  },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];

const isHashLink = (href: string) => href.startsWith("#");

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(
    pathname === "/kedi" ? "/kedi" : "#anasayfa"
  );
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isClickScrolling = useRef(false);
  const shouldScrollTopRef = useRef(false);

  const handleNavigate = (href: string) => {
    setActiveLink(href);
    if (isHashLink(href)) {
      if (!onHome) {
        if (href === "#anasayfa") {
          shouldScrollTopRef.current = true;
          router.push("/");
        } else {
          router.push("/" + href);
        }
        return;
      }
      if (href === "#anasayfa") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      isClickScrolling.current = true;
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    } else {
      if (pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        shouldScrollTopRef.current = true;
        router.push(href);
      }
    }
  };

  useEffect(() => {
    if (shouldScrollTopRef.current) {
      shouldScrollTopRef.current = false;
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = prev;
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (!onHome) {
      setActiveLink(pathname === "/kedi" ? "/kedi" : "");
      const handleScrollOnly = () => setScrolled(window.scrollY > 10);
      handleScrollOnly();
      window.addEventListener("scroll", handleScrollOnly);
      return () => window.removeEventListener("scroll", handleScrollOnly);
    }

    const sectionIds = ["#anasayfa", "#kopek", "#blog", "#iletisim"];

    const handleScroll = () => {
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
  }, [onHome, pathname]);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.1)" : "none", transition: "box-shadow 0.3s ease" }}>
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
        .nav-dropdown-item:hover {
          color: #0bbbef !important;
          background-color: #f4f7fb;
        }
        @media (max-width: 1750px) {
          .nav-blue-bar {
            width: 630px !important;
            gap: 27px !important;
            padding-left: 36px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 20px !important;
          }
          .nav-search-bar input {
            font-size: 21px !important;
          }
        }
        @media (max-width: 1600px) {
          .nav-blue-bar {
            width: 585px !important;
            gap: 23px !important;
            padding-left: 32px !important;
            height: 52px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 18px !important;
          }
          .nav-logo-desktop img {
            height: 150px !important;
            top: 40px !important;
          }
          .nav-search-bar {
            width: 360px !important;
            margin-left: 75px !important;
          }
          .nav-search-bar input {
            height: 52px !important;
            font-size: 19px !important;
          }
          .nav-search-bar button {
            width: 40px !important;
            height: 40px !important;
          }
        }
        @media (max-width: 1400px) {
          .nav-blue-bar {
            width: 522px !important;
            gap: 16px !important;
            padding-left: 23px !important;
            height: 45px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 16px !important;
          }
          .nav-logo-desktop img {
            height: 130px !important;
            top: 35px !important;
          }
          .nav-search-bar {
            width: 250px !important;
            margin-left: 45px !important;
          }
          .nav-search-bar input {
            height: 44px !important;
            font-size: 16px !important;
          }
          .nav-search-bar button {
            width: 36px !important;
            height: 36px !important;
          }
        }
        @media (max-width: 1125px) {
          .nav-blue-bar {
            width: 432px !important;
            gap: 11px !important;
            padding-left: 18px !important;
            padding-right: 18px !important;
            height: 41px !important;
          }
          .nav-blue-bar .nav-link {
            font-size: 14px !important;
          }
          .nav-blue-bar .nav-dot {
            width: 6px !important;
            height: 6px !important;
          }
          .nav-logo-desktop img {
            height: 110px !important;
            top: 30px !important;
          }
          .nav-search-bar {
            width: 200px !important;
            margin-left: 30px !important;
          }
          .nav-search-bar input {
            height: 40px !important;
            font-size: 14px !important;
            padding-left: 14px !important;
          }
          .nav-search-bar button {
            width: 32px !important;
            height: 32px !important;
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
            width: "720px",
            height: "54px",
            backgroundColor: "#064597",
            borderTopLeftRadius: "35px",
            borderBottomLeftRadius: "35px",
            paddingLeft: "50px",
            paddingRight: "36px",
            gap: "36px",
            zIndex: 2,
          }}
        >
          {navLinks.map((link) => (
            <div
              key={link.href}
              onMouseEnter={() => {
                if (link.submenu) setOpenDropdown(link.href);
              }}
              onMouseLeave={() => {
                if (link.submenu) setOpenDropdown(null);
              }}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: "var(--font-signika), Arial, Helvetica, sans-serif",
                  fontSize: "23px",
                  fontWeight: 700,
                  color: activeLink === link.href ? "#0ae2da" : "white",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.href);
                }}
              >
                <span
                  className="nav-dot"
                  style={{
                    display: "inline-block",
                    width: "9px",
                    height: "9px",
                    backgroundColor: "#0ae2da",
                    borderRadius: "50%",
                    opacity: activeLink === link.href ? 1 : 0,
                    transform: activeLink === link.href ? "scale(1)" : "scale(0)",
                  }}
                />
                {link.label}
              </a>
              {link.submenu && openDropdown === link.href && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: "14px",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "14px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                      padding: "8px 0",
                      minWidth: "190px",
                    }}
                  >
                    {link.submenu.map((item) => (
                      <a
                        key={item}
                        href={link.href}
                        className="nav-dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                          handleNavigate(link.href);
                        }}
                        style={{
                          display: "block",
                          padding: "10px 22px",
                          color: "#064597",
                          fontFamily:
                            "var(--font-signika), Arial, Helvetica, sans-serif",
                          fontSize: "18px",
                          fontWeight: 600,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          transition:
                            "color 0.2s ease, background-color 0.2s ease",
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              width: "370px",
              flexShrink: 0,
              marginLeft: "80px",
            }}
            className="hidden md:block nav-search-bar"
          >
            <input
              type="text"
              placeholder="Ürün Ara"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                width: "100%",
                height: "58px",
                paddingLeft: "18px",
                paddingRight: "40px",
                borderRadius: "9999px",
                border: "1px solid #e0e0e0",
                backgroundColor: "white",
                fontSize: "22px",
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
                width: "45px",
                height: "45px",
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
              <FiSearch size={22} color="white" strokeWidth={3} />
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
                if (isHashLink(link.href)) {
                  if (!onHome) {
                    if (link.href === "#anasayfa") {
                      shouldScrollTopRef.current = true;
                      router.push("/");
                    } else {
                      router.push("/" + link.href);
                    }
                    return;
                  }
                  if (link.href === "#anasayfa") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                  }
                  isClickScrolling.current = true;
                  const el = document.querySelector(link.href);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  setTimeout(() => {
                    isClickScrolling.current = false;
                  }, 1000);
                } else {
                  if (pathname === link.href) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    shouldScrollTopRef.current = true;
                    router.push(link.href);
                  }
                }
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
