"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const navLinks = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#kedi", label: "Kedi" },
  { href: "#kopek", label: "Köpek" },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Footer() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <footer
      id="iletisim"
      style={{
        backgroundColor: "#004a9b",
        width: "100%",
        height: "540px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        .footer-link {
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #0bbbef !important;
        }
        .footer-dot {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
      `}</style>

      {/* Üst bölüm */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            maxWidth: "1420px",
            margin: "0 auto",
            padding: "0 40px",
            paddingTop: "85px",
            display: "flex",
          }}
        >
          {/* Sol - Logo + İletişim */}
          <div style={{ paddingLeft: "120px" }}>
            <Image
              src="/images/friends-logo.png"
              alt="Friends Pet Production"
              width={200}
              height={143}
              style={{ width: "200px", height: "143px", objectFit: "contain" }}
            />
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ fontSize: "24px", fontWeight: 500 }}>
                <span style={{ color: "#0bbbef" }}>Telefon</span>
                <span style={{ color: "white", marginLeft: "20px" }}>
                  +90212 347 2681
                </span>
              </p>
              <p style={{ fontSize: "24px", fontWeight: 500 }}>
                <span style={{ color: "#0bbbef" }}>Email</span>
                <span style={{ color: "white", marginLeft: "36px" }}>
                  bilgi@friends.com
                </span>
              </p>
            </div>
          </div>

          {/* Sağ - Menü linkleri */}
          <div
            style={{
              marginLeft: "100px",
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
                style={{
                  fontSize: "22px",
                  fontWeight: 400,
                  color: activeLink === link.href ? "#0bbbef" : "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.href);
                  const el = document.querySelector(link.href);
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span
                  className="footer-dot"
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#0bbbef",
                    borderRadius: "50%",
                    opacity: activeLink === link.href ? 1 : 0,
                    transform:
                      activeLink === link.href ? "scale(1)" : "scale(0)",
                  }}
                />
                {link.label}
              </a>
            ))}
          </div>

          {/* Sağ - Ürün Ara Input */}
          <div
            style={{
              marginLeft: "auto",
              width: "425px",
              alignSelf: "flex-end",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                fontSize: "23px",
                color: "white",
                marginBottom: "25px",
                marginLeft: "20px",
              }}
            >
              Bizden Haberdar Olun
            </p>
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
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
                  border: "1px solid rgba(255,255,255,0.3)",
                  backgroundColor: "transparent",
                  fontSize: "24px",
                  color: "white",
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
                <FiArrowRight size={25} color="white" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Çizgi */}
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(11, 187, 239, 0.5)",
        }}
      />

      {/* Alt bölüm - 130px */}
      <div style={{ height: "130px", flexShrink: 0 }}>
        <div
          style={{
            maxWidth: "1420px",
            margin: "0 auto",
            padding: "0px 100px 0px 160px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "18px", color: "white", fontWeight: 400 }}>
            Tüm Hakları Saklıdır. Friends 2026
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { icon: <FaFacebookF size={20} />, href: "#" },
              { icon: <FaInstagram size={20} />, href: "#" },
              { icon: <FaTwitter size={20} />, href: "#" },
              { icon: <FaYoutube size={20} />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
