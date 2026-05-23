"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/dryCatFood.json";

export default function KediPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const filterRowRef = useRef<HTMLDivElement>(null);
  const [filterPaddingRight, setFilterPaddingRight] = useState<number | null>(
    null
  );

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = prev;
    });
  }, []);

  useEffect(() => {
    const update = () => {
      if (!titleRef.current || !filterRowRef.current) return;
      const titleRight = titleRef.current.getBoundingClientRect().right;
      const rowRight = filterRowRef.current.getBoundingClientRect().right;
      setFilterPaddingRight(Math.max(0, rowRight - titleRight));
    };
    update();
    window.addEventListener("resize", update);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(update);
    }
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <style>{`
          .kedi-banner {
            position: relative;
            width: 100%;
            height: 220px;
            margin-top: 290px;
            background-image: url('/images/ust-zemin.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
          }
          .kedi-banner-inner {
            max-width: 1420px;
            margin: 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 60px;
            position: relative;
            z-index: 1;
          }
          .kedi-banner-title {
            font-family: var(--font-signika), Arial, Helvetica, sans-serif;
            font-size: 56px;
            font-weight: 500;
            color: white;
            letter-spacing: 2px;
            margin-left: 330px;
          }
          .kedi-cat-hero {
            position: absolute;
            left: 13%;
            bottom: -120px;
            height: 380px;
            width: auto;
            z-index: 2;
            object-fit: contain;
            object-position: bottom;
          }
          .kedi-filter-row {
            max-width: 1420px;
            margin: 0 auto;
            padding: 60px 60px 20px;
            display: flex;
            justify-content: flex-end;
          }
          .kedi-filter-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 320px;
            height: 50px;
            padding: 0 25px;
            border: 1px solid #d6d6d6;
            border-radius: 9999px;
            background: white;
            font-size: 16px;
            color: #888;
            cursor: pointer;
            font-family: inherit;
          }
          .kedi-products-wrapper {
            position: relative;
            max-width: 1420px;
            margin: 0 auto;
            padding: 20px 0 100px;
          }
          .kedi-products-grid {
            display: grid;
            grid-template-columns: repeat(4, 310px);
            column-gap: 20px;
            row-gap: 40px;
            justify-content: center;
            position: relative;
            z-index: 1;
          }
          .kedi-cylinders {
            position: absolute;
            top: 110px;
            right: -320px;
            display: grid;
            grid-template-columns: 166px 166px;
            column-gap: 70px;
            row-gap: 60px;
            pointer-events: none;
            z-index: 0;
          }
          .kedi-cylinder {
            width: 166px;
            height: 166px;
            border-radius: 50%;
            border: 27px solid #f7f7f7;
            box-sizing: border-box;
          }
          @media (max-width: 1160px) {
            .kedi-cylinders {
              display: none;
            }
          }
          .kedi-product-card {
            width: 310px;
            height: 525px;
            background: white;
            border-radius: 32px;
            padding: 18px 18px 22px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            text-decoration: none;
          }
          .kedi-product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          }
          .kedi-product-image-wrap {
            width: 170px;
            height: 330px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 14px;
          }
          .kedi-product-image-wrap img {
            width: 170px;
            height: 330px;
            object-fit: contain;
          }
          .kedi-product-badges {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 10px;
          }
          .kedi-product-badges img {
            height: 24px;
            width: auto;
            object-fit: contain;
            display: block;
          }
          .kedi-product-title {
            font-family: var(--font-signika), Arial, Helvetica, sans-serif;
            font-size: 21px;
            color: #404040;
            text-align: center;
            line-height: 1.3;
            margin-top: 6px;
          }
          .kedi-product-title strong {
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .kedi-banner-title {
              font-size: 44px;
              margin-left: 280px;
            }
            .kedi-cat-hero {
              height: 260px;
              bottom: -30px;
            }
          }
          @media (max-width: 900px) {
            .kedi-products-grid {
              grid-template-columns: repeat(2, 1fr);
              justify-content: stretch;
              column-gap: 28px;
              padding: 20px 30px 60px;
            }
            .kedi-product-card {
              width: 100%;
              height: auto;
            }
            .kedi-banner {
              height: 170px;
            }
            .kedi-banner-title {
              font-size: 32px;
              margin-left: 200px;
              letter-spacing: 1px;
            }
            .kedi-cat-hero {
              height: 210px;
              left: 8%;
              bottom: -25px;
            }
            .kedi-filter-row {
              padding: 30px 30px 10px;
            }
          }
          @media (max-width: 600px) {
            .kedi-products-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
              padding: 20px 16px 50px;
            }
            .kedi-banner {
              height: 130px;
            }
            .kedi-banner-title {
              font-size: 22px;
              margin-left: 130px;
            }
            .kedi-cat-hero {
              height: 160px;
              left: 4%;
              bottom: -20px;
            }
            .kedi-filter-row {
              padding: 24px 16px 8px;
              justify-content: center;
            }
            .kedi-filter-btn {
              width: 100%;
              max-width: 320px;
            }
            .kedi-product-title {
              font-size: 13px;
            }
          }
        `}</style>

        <section className="kedi-banner">
          <Image
            className="kedi-cat-hero"
            src="/images/kedi4.png"
            alt="Kedi"
            width={410}
            height={550}
            priority
          />
          <div className="kedi-banner-inner">
            <h1 ref={titleRef} className="kedi-banner-title">
              DRY CAT FOOD SERIES
            </h1>
          </div>
        </section>

        <div ref={filterRowRef} className="kedi-filter-row">
          <button
            className="kedi-filter-btn"
            onClick={() => setFilterOpen(!filterOpen)}
            aria-expanded={filterOpen}
          >
            <span>Filtreler</span>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="2" x2="5" y2="16" />
              <polyline points="2 5 5 2 8 5" />
              <line x1="15" y1="2" x2="15" y2="16" />
              <polyline points="12 13 15 16 18 13" />
            </svg>
          </button>
        </div>

        <div className="kedi-products-wrapper">
          <div className="kedi-cylinders" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="kedi-cylinder" />
            ))}
          </div>
          <div className="kedi-products-grid">
            {products.map((p) => (
              <a
                key={p.id}
                href={`/kedi/${p.id}`}
                className="kedi-product-card"
              >
                <div className="kedi-product-image-wrap">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={170}
                    height={330}
                    style={{
                      width: "170px",
                      height: "330px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="kedi-product-badges">
                  <Image
                    src="/images/eco-plus.png"
                    alt="Eco Plus"
                    width={120}
                    height={40}
                  />
                  <Image
                    src="/images/cat-food.png"
                    alt="Cat Food Complete & Balanced"
                    width={140}
                    height={40}
                    style={{ height: "21px" }}
                  />
                </div>
                <p className="kedi-product-title">
                  {(() => {
                    const rest = p.title.replace(/^Friends\s+/, "");
                    const [firstWord, ...remaining] = rest.split(" ");
                    return (
                      <>
                        <strong>Friends</strong> {firstWord}
                        <br />
                        {remaining.join(" ")}
                      </>
                    );
                  })()}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
