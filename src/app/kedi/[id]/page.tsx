"use client";

import Image from "next/image";
import { useState, use } from "react";
import { notFound } from "next/navigation";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  GiPotato,
  GiWheat,
  GiSeedling,
  GiChemicalDrop,
  GiPalette,
  GiSugarCane,
} from "react-icons/gi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import products from "../../data/dryCatFood.json";

type AccordionKey =
  | "aciklama"
  | "icindekiler"
  | "analitikBilesenler"
  | "besleyiciIlaveler";

const ACCORDION_ITEMS: { key: AccordionKey; label: string }[] = [
  { key: "aciklama", label: "Ürün Açıklaması" },
  { key: "icindekiler", label: "İçindekiler" },
  { key: "analitikBilesenler", label: "Analitik Bileşenler" },
  { key: "besleyiciIlaveler", label: "Besleyici İlaveler" },
];

const FEATURES = [
  { Icon: GiPotato, label: "Patates\nİçermez" },
  { Icon: GiWheat, label: "Buğday\nİçermez" },
  { Icon: GiSeedling, label: "Soya\nİçermez" },
  { Icon: GiChemicalDrop, label: "Kimyasal\nAroma\nİçermez" },
  { Icon: GiPalette, label: "Renklendirici\nİçermez" },
  { Icon: GiSugarCane, label: "Yapay\nTatlandırıcı\nİçermez" },
];

export default function KediDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => String(p.id) === id);

  const [openKey, setOpenKey] = useState<AccordionKey | null>("aciklama");

  if (!product) notFound();

  const toggle = (k: AccordionKey) => setOpenKey(openKey === k ? null : k);

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "white" }}>
        <style>{`
          .detail-top {
            max-width: 1420px;
            margin: 0 auto;
            padding: 60px 24px 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
          }
          .detail-image-card {
            background: white;
            border: 1px solid #f0f0f0;
            border-radius: 24px;
            padding: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 660px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          }
          .detail-image-card img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
          }
          .detail-thumbs {
            display: flex;
            gap: 14px;
            margin-top: 22px;
          }
          .detail-thumb {
            flex: 1;
            background: white;
            border: 1px solid #f0f0f0;
            border-radius: 14px;
            padding: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            aspect-ratio: 1 / 1;
            cursor: pointer;
            transition: border-color 0.2s ease;
          }
          .detail-thumb:hover { border-color: #0bbbef; }
          .detail-thumb img {
            max-width: 80%;
            max-height: 80%;
            object-fit: contain;
          }
          .detail-title {
            font-family: var(--font-signika), Arial, Helvetica, sans-serif;
            font-size: 44px;
            font-weight: 400;
            color: #404040;
            line-height: 1.25;
            margin-bottom: 60px;
          }
          .detail-badges {
            display: flex;
            align-items: center;
            gap: 50px;
            margin-bottom: 60px;
          }
          .detail-accordion {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .acc-item {
            border: 1px solid #e2e2e2;
            border-radius: 24px;
            background: #e6e6e6;
            overflow: hidden;
          }
          .acc-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 85px;
            padding: 0 36px;
            cursor: pointer;
            background: #e6e6e6;
            border: none;
            width: 100%;
            text-align: left;
            font-family: inherit;
          }
          .acc-title {
            font-size: 18px;
            color: #4f4f4f;
            font-weight: 700;
          }
          .acc-icon {
            color: #535353;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .acc-icon svg {
            stroke-width: 3.5;
          }
          .acc-body {
            padding: 0 36px 22px;
            font-size: 15px;
            color: #4f4f4f;
            line-height: 1.6;
          }

          .friends-section {
            background: #ececec;
            margin-top: 160px;
            padding-bottom: 60px;
          }
          .friends-inner {
            max-width: 1420px;
            margin: 0 auto;
            padding: 0 60px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          .friends-title {
            font-family: var(--font-signika), Arial, Helvetica, sans-serif;
            font-size: 60px;
            font-weight: 300;
            color: #064597;
            line-height: 1.15;
            letter-spacing: 1px;
            margin-bottom: 32px;
          }
          .friends-text {
            font-size: 17px;
            color: #2d2d2d;
            line-height: 1.7;
            margin-bottom: 18px;
            max-width: 520px;
          }
          .friends-bags {
            display: flex;
            justify-content: center;
            align-items: end;
            gap: 0;
            position: relative;
          }
          .friends-bags img:first-child { transform: translate(120px, -25px); z-index: 1; }
          .friends-bags img:last-child { z-index: 2; }

          .why-section {
            background: white;
            padding: 80px 0 100px;
          }
          .why-inner {
            max-width: 1420px;
            margin: 0 auto;
            padding: 0 40px;
            text-align: center;
          }
          .why-eyebrow {
            font-size: 18px;
            color: #2d2d2d;
            margin-bottom: 14px;
          }
          .why-title {
            font-family: var(--font-signika), Arial, Helvetica, sans-serif;
            font-size: 30px;
            font-weight: 700;
            color: #535353;
            margin-bottom: 20px;
          }
          .why-paragraph {
            font-size: 15px;
            color: #535353;
            line-height: 1.7;
            max-width: 1420px;
            margin: 0 auto 50px;
          }
          .why-features {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
          .why-feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .why-feature-icon {
            width: 76px;
            height: 76px;
            border-radius: 50%;
            border: 2px solid #b08653;
            color: #b08653;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .why-feature-label {
            font-size: 14px;
            color: #b08653;
            font-weight: 700;
            text-align: center;
            line-height: 1.3;
            white-space: pre-line;
          }

          @media (max-width: 1100px) {
            .detail-top {
              grid-template-columns: 1fr;
              padding: 40px 30px 20px;
              gap: 40px;
            }
            .detail-title { font-size: 28px; }
            .friends-inner {
              grid-template-columns: 1fr;
              padding: 0 30px;
              text-align: center;
            }
            .friends-text { margin-left: auto; margin-right: auto; }
            .friends-title { font-size: 34px; }
            .why-features {
              grid-template-columns: repeat(3, 1fr);
              row-gap: 36px;
            }
          }
          @media (max-width: 600px) {
            .detail-top { padding: 30px 16px 16px; }
            .detail-title { font-size: 22px; }
            .detail-badges { gap: 5px; flex-wrap: wrap; }
            .friends-section { padding: 50px 0; }
            .friends-title { font-size: 26px; }
            .why-section { padding: 50px 0 60px; }
            .why-features { grid-template-columns: repeat(2, 1fr); }
            .friends-bags img { width: 140px !important; height: auto !important; }
            .friends-bags img:first-child { transform: translateX(20px); }
          }
        `}</style>

        <section className="detail-top">
          <div>
            <div className="detail-image-card">
              <Image
                src={product.image}
                alt={product.title}
                width={520}
                height={520}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                priority
              />
            </div>
            <div className="detail-thumbs">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="detail-thumb">
                  <Image
                    src={product.image}
                    alt={`${product.title} ${i + 1}`}
                    width={140}
                    height={140}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="detail-title">
              {product.title.replace(/^Friends\s+/, "")} ({product.weight})
            </h1>

            <div className="detail-badges">
              <Image
                src="/images/eco-plus.png"
                alt="Eco Plus"
                width={290}
                height={90}
                style={{ width: "290px", height: "90px", objectFit: "contain" }}
              />
              <Image
                src="/images/cat-food.png"
                alt="Cat Food Complete & Balanced"
                width={288}
                height={90}
                style={{ width: "288px", height: "90px", objectFit: "contain" }}
              />
            </div>

            <div className="detail-accordion">
              {ACCORDION_ITEMS.map(({ key, label }) => {
                const open = openKey === key;
                return (
                  <div key={key} className="acc-item">
                    <button
                      type="button"
                      className="acc-header"
                      onClick={() => toggle(key)}
                      aria-expanded={open}
                    >
                      <span className="acc-title">{label}</span>
                      <span className="acc-icon">
                        {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
                      </span>
                    </button>
                    {open && <div className="acc-body">{product[key]}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="friends-section">
          <div className="friends-inner">
            <div>
              <h2 className="friends-title">
                GERÇEK DOSTLUK,
                <br />
                GERÇEK BAKIM!
              </h2>
              <p className="friends-text">
                Friends ile patili dostun için sadece mama ve kum değil; sağlık,
                mutluluk ve güven alırsınız.
              </p>
              <p className="friends-text">
                Doğal içerikler, kaliteli ürünler ve sevgi dolu bakım tek yerde:{" "}
                <strong>Friends</strong>
              </p>
              <p className="friends-text">
                Çünkü onlar evcil hayvan değil, ailenin bir parçası.
              </p>
            </div>
            <div className="friends-bags">
              <Image
                src="/images/kopek 15kg kuzu.png"
                alt="Köpek Maması"
                width={260}
                height={340}
                style={{ width: "auto", height: "521px", objectFit: "contain" }}
              />
              <Image
                src="/images/kedi 15kg somon.png"
                alt="Kedi Maması"
                width={260}
                height={340}
                style={{ width: "auto", height: "521px", objectFit: "contain" }}
              />
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="why-inner">
            <p className="why-eyebrow">Neden Friends?</p>
            <h2 className="why-title">Az Tahıllı ve Sağlıklı Mama</h2>
            <p className="why-paragraph">
              Sevimli dostlarımızın doğal yaşam şartlarına uygun şekilde
              beslenip, daha sağlıklı yaşayabilmeleri için beslenme
              uzmanlarımızla birlikte, tahıl oranı düşürülmüş hipoalerjenik özel
              bir formül hazırladık. Yüksek oranda sindirilebilir hayvansal
              protein kaynaklarına sahip Friends, sindirim ve alerji
              hassasiyetlerine karşı özel olarak geliştirilmiştir. Alerjik
              reaksiyonlarla ilişkili olan sığır eti, süt ürünleri, buğday,
              soya, patates, yapay tatlandırıcı, renklendirici, kimyasal aroma
              ve GDO içermez!
            </p>
            <div className="why-features">
              {FEATURES.map(({ Icon, label }, i) => (
                <div key={i} className="why-feature">
                  <div className="why-feature-icon">
                    <Icon size={36} />
                  </div>
                  <span className="why-feature-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
