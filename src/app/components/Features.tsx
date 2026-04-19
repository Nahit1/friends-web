"use client";

import Image from "next/image";
import { useState } from "react";
import {
  GiChickenLeg,
  GiOrangeSlice,
  GiMuscleUp,
  GiHeartBeats,
  GiPill,
} from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: <GiChickenLeg size={28} />, title: "İçerik & Diş" },
  { icon: <GiOrangeSlice size={28} />, title: "Portakal" },
  { icon: <GiMuscleUp size={28} />, title: "Protein" },
  { icon: <GiPill size={28} />, title: "Vitamin" },
  { icon: <FaShieldAlt size={28} />, title: "E Vitamini" },
  { icon: <GiHeartBeats size={28} />, title: "Sağlık" },
];

export default function Features() {
  const [kuruSlide, setKuruSlide] = useState(0);
  const [yasSlide, setYasSlide] = useState(0);
  const [kumSlide, setKumSlide] = useState(0);

  return (
    <section
      id="hakkimizda"
      style={{
        backgroundColor: "white",
        paddingTop: "220px",
        marginBottom: "0px",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Cylinders - absolute, sağa dayalı, hero banner altından 60px */}
      <div
        className="features-cylinders"
        style={{
          position: "absolute",
          top: "60px",
          right: -60,
          display: "grid",
          gridTemplateColumns: "166px 166px",
          columnGap: "70px",
          rowGap: "60px",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "166px",
              height: "166px",
              borderRadius: "50%",
              border: "27px solid #f7f7f7",
              boxSizing: "border-box",
              position: "relative",
            }}
          ></div>
        ))}
      </div>

      {/* Button hover & click effects */}
      <style>{`
        .cta-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 12px 14px 0 0 #0bbbef !important;
          background-color: #0952a5 !important;
        }
        .cta-btn:active {
          transform: translateY(2px) scale(0.97);
          box-shadow: 4px 4px 0 0 #0bbbef !important;
          background-color: #053a7a !important;
        }
        @media (max-width: 1300px) {
          .features-left-text h2 {
            font-size: 44px !important;
          }
          .features-left-text p {
            font-size: 19px !important;
          }
          .features-left-text > div {
            padding-left: 80px !important;
          }
          .patili-title h2 {
            font-size: 44px !important;
          }
          .patili-cards .patili-card-circle {
            width: 240px !important;
            height: 240px !important;
          }
          .patili-cards .patili-card-label {
            font-size: 30px !important;
          }
          .patili-cards .patili-card-desc {
            font-size: 19px !important;
          }
          .patili-cards .cta-btn {
            width: 210px !important;
            height: 52px !important;
            font-size: 16px !important;
            margin-top: 30px !important;
          }
          .urunlerimiz-title h2 {
            font-size: 55px !important;
          }
          .urun-left p {
            font-size: 24px !important;
          }
          .blog-title h2 {
            font-size: 55px !important;
          }
          .blog-card h3 {
            font-size: 27px !important;
          }
          .blog-card p {
            font-size: 18px !important;
          }
        }
        @media (max-width: 1160px) {
          .features-content-row {
            flex-direction: column !important;
            align-items: center !important;
          }
          .features-left-text {
            text-align: center !important;
          }
          .features-left-text > div {
            padding-left: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .features-left-text h2 {
            font-size: 40px !important;
          }
          .features-left-text p {
            font-size: 18px !important;
          }
          .features-btn-wrapper .cta-btn {
            width: 220px !important;
            height: 55px !important;
            font-size: 18px !important;
          }
          .features-right-products {
            order: -1 !important;
            margin-left: 0 !important;
            margin-bottom: 40px !important;
            justify-content: center !important;
          }
          .features-cylinders {
            display: none !important;
          }
        @media (max-width: 1530px) {
          .features-circles-row {
            left: 50% !important;
            transform: translateX(-50%) !important;
            gap: 30px !important;
          }
          .features-circles-row .feature-circle {
            width: 155px !important;
            height: 155px !important;
          }
          .features-circles-row .feature-circle img {
            width: 100px !important;
            height: 100px !important;
          }
          .features-circles-row .feature-label {
            font-size: 22px !important;
          }
          .features-oval-bg {
            height: 270px !important;
            width: calc(100% + 80px) !important;
          }
        }
        @media (max-width: 1300px) {
          .features-circles-row {
            gap: 15px !important;
          }
          .features-circles-row .feature-circle {
            width: 130px !important;
            height: 130px !important;
            border-width: 5px !important;
          }
          .features-circles-row .feature-circle img {
            width: 80px !important;
            height: 80px !important;
          }
          .features-circles-row .feature-label {
            font-size: 18px !important;
            margin-top: 25px !important;
          }
          .features-oval-bg {
            height: 230px !important;
            width: calc(100% + 40px) !important;
          }
          .features-oval-wrapper {
            min-height: 400px !important;
          }
        }
        @media (max-width: 860px) {
          .features-circles-row {
            gap: 8px !important;
          }
          .features-circles-row .feature-circle {
            width: 100px !important;
            height: 100px !important;
            border-width: 4px !important;
          }
          .features-circles-row .feature-circle img {
            width: 60px !important;
            height: 60px !important;
          }
          .features-circles-row .feature-label {
            font-size: 14px !important;
            margin-top: 15px !important;
          }
          .features-oval-bg {
            height: 180px !important;
            width: calc(100% + 20px) !important;
          }
          .features-oval-wrapper {
            min-height: 320px !important;
          }
        }
        @media (max-width: 1160px) {
          .patili-title {
            padding-left: 0 !important;
            text-align: center !important;
          }
          .patili-title h2 {
            font-size: 45px !important;
          }
          .patili-cards {
            gap: 50px !important;
          }
          .patili-cards .patili-card-circle {
            width: 240px !important;
            height: 240px !important;
          }
          .patili-cards .patili-card-label {
            font-size: 32px !important;
          }
          .patili-cards .patili-card-desc {
            font-size: 20px !important;
          }
          .patili-cards .cta-btn {
            width: 210px !important;
            height: 52px !important;
            font-size: 17px !important;
            margin-top: 30px !important;
          }
        }
        @media (max-width: 920px) {
          .patili-cards {
            flex-direction: column !important;
            align-items: center !important;
            gap: 60px !important;
          }
          .patili-title h2 {
            font-size: 38px !important;
          }
          .patili-cards .cta-btn {
            margin-top: 20px !important;
          }
        }
        @media (max-width: 1400px) {
          .urunlerimiz-title {
            padding-left: 40px !important;
          }
          .urunlerimiz-title h2 {
            font-size: 70px !important;
          }
          .urun-row {
            height: 220px !important;
          }
          .urun-left {
            left: 80px !important;
            width: 280px !important;
          }
          .urun-left img {
            width: 280px !important;
            height: 170px !important;
          }
          .urun-left p {
            font-size: 28px !important;
          }
          .urun-slider {
            left: 470px !important;
            width: 500px !important;
          }
          .urun-slider img {
            width: 150px !important;
            height: 290px !important;
          }
          .urun-slider .urun-slide-item {
            width: 150px !important;
          }
          .urun-slider p {
            font-size: 20px !important;
          }
          .urun-dots {
            margin-left: 690px !important;
          }
        }
        @media (max-width: 1100px) {
          .urunlerimiz-title {
            padding-left: 0 !important;
            text-align: center !important;
          }
          .urunlerimiz-title h2 {
            font-size: 45px !important;
          }
          .urun-row {
            margin-top: 30px !important;
            height: auto !important;
            border-radius: 40px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            padding: 30px 20px !important;
            position: relative !important;
            overflow: visible !important;
          }
          .urun-left {
            position: static !important;
            width: auto !important;
            text-align: center !important;
            top: auto !important;
            left: auto !important;
          }
          .urun-left img {
            width: 220px !important;
            height: 140px !important;
          }
          .urun-left p {
            font-size: 22px !important;
            margin-top: 15px !important;
          }
          .urun-slider {
            position: static !important;
            width: 100% !important;
            margin-top: 20px !important;
            top: auto !important;
            left: auto !important;
            overflow: hidden !important;
          }
          .urun-slider > div > div {
            justify-content: center !important;
          }
          .urun-slider img {
            width: 110px !important;
            height: 220px !important;
          }
          .urun-slider p {
            font-size: 16px !important;
          }
          .urun-dots {
            margin-left: auto !important;
            margin-right: auto !important;
            justify-content: center !important;
            display: flex !important;
          }
          .urun-row-spacing-1 {
            margin-top: 30px !important;
          }
          .urun-row-spacing-2 {
            margin-top: 30px !important;
          }
        }
        @media (max-width: 1400px) {
          .blog-title {
            padding-left: 40px !important;
          }
          .blog-title h2 {
            font-size: clamp(40px, 5vw, 70px) !important;
          }
          .blog-card h3 {
            font-size: clamp(22px, 2.5vw, 40px) !important;
          }
          .blog-card p {
            font-size: clamp(16px, 1.6vw, 25px) !important;
          }
        }
        @media (max-width: 1100px) {
          .blog-title {
            padding-left: 0 !important;
            text-align: center !important;
          }
          .blog-title h2 {
            font-size: 45px !important;
          }
          .blog-cards {
            flex-direction: column !important;
            align-items: center !important;
            margin-top: 20px !important;
            gap: 30px !important;
          }
          .blog-card {
            width: 100% !important;
            max-width: 450px !important;
            min-height: 600px !important;
            height: auto !important;
            border-radius: 50px !important;
          }
          .blog-card-img {
            height: 280px !important;
          }
          .blog-card h3 {
            font-size: 28px !important;
          }
          .blog-card p {
            font-size: 18px !important;
          }
          .blog-card .blog-card-body {
            padding: 30px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1420px", margin: "0 auto", padding: "0 40px" }}>
        {/* Content row: left text + right product images */}
        <div
          className="features-content-row"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          {/* Left side - text & button */}
          <div className="features-left-text">
            {/* Title */}
            <div
              className="features-title-wrapper"
              style={{ marginBottom: "20px", paddingLeft: "155px" }}
            >
              <h2
                style={{
                  fontFamily: "'Ultima Pro', Arial, Helvetica, sans-serif",
                  fontSize: "60px",
                  fontWeight: 700,
                  color: "#004a9b",
                  lineHeight: 1.2,
                }}
              >
                Gerçek Dostluk,
                <br />
                Gerçek Bakım!
              </h2>
            </div>

            {/* Description */}
            <div
              className="features-desc-wrapper"
              style={{
                paddingLeft: "155px",
                marginTop: "60px",
                marginBottom: "60px",
                maxWidth: "660px",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  color: "#515151",
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                Friends ile patili dostun için sadece mama ve kum değil; sağlık,
                mutluluk ve güven alırsınız.
              </p>
              <p
                style={{
                  fontSize: "24px",
                  color: "#515151",
                  lineHeight: 1.2,
                  fontWeight: 400,
                  marginTop: "12px",
                }}
              >
                Doğal içerikler, kaliteli ürünler ve sevgi dolu bakım tek yerde:{" "}
                Friends
              </p>
              <p
                style={{
                  fontSize: "24px",
                  color: "#515151",
                  lineHeight: 1.2,
                  fontWeight: 400,
                  marginTop: "12px",
                }}
              >
                Çünkü onlar evcil hayvan değil, ailenin bir parçası.
              </p>
            </div>

            {/* ÜRÜNLERE GİT Button */}
            <div
              className="features-btn-wrapper"
              style={{ paddingLeft: "155px", marginBottom: "60px" }}
            >
              <a
                href="#urunler"
                className="cta-btn"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#urunler");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "250px",
                  height: "60px",
                  backgroundColor: "#064597",
                  borderRadius: "35px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: "10px 10px 0 0 #0bbbef",
                }}
              >
                ÜRÜNLERE GİT
              </a>
            </div>
          </div>

          {/* Right side - product images + cylinders */}
          <div
            className="features-right-products"
            style={{
              flexShrink: 0,
              marginLeft: "40px",
              display: "flex",
              alignItems: "flex-start",
              gap: "65px",
            }}
          >
            {/* Product images */}
            <div
              className="product-images-wrapper"
              style={{
                position: "relative",
                width: "420px",
                height: "560px",
                flexShrink: 0,
              }}
            >
              {/* Köpek - 10px yukarıda, solda */}
              <div style={{ position: "absolute", left: 0 }}>
                <Image
                  src="/images/kopek 15kg kuzu.png"
                  alt="Köpek 15kg Kuzu"
                  width={220}
                  height={500}
                  style={{
                    width: "auto",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />
              </div>
              {/* Kedi - köpeğin ortasından başlıyor, sağda */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "160px",
                }}
              >
                <Image
                  src="/images/kedi 15kg somon.png"
                  alt="Kedi 15kg Somon"
                  width={220}
                  height={500}
                  style={{
                    width: "auto",
                    height: "500px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Oval arka plan şekli + Feature Icons birlikte */}
        <div
          className="features-oval-wrapper"
          style={{
            position: "relative",
            marginTop: "220px",
            minHeight: "500px",
          }}
        >
          {/* Oval şekil - container'dan 70px taşar */}
          <div
            className="features-oval-bg"
            style={{
              position: "absolute",
              top: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "calc(100% + 140px)",
              height: "330px",
              backgroundColor: "#ececec",
              borderRadius: "210px",
            }}
          />

          {/* 5 gradient daireler - şeklin üstünde, 40px yukarı taşar */}
          <div
            className="features-circles-row"
            style={{
              position: "absolute",
              top: 0,
              left: "100px",
              display: "flex",
              gap: "50px",
              zIndex: 2,
            }}
          >
            {[
              { num: 1, label: "Kemik ve diş\nsağlığını korur" },
              { num: 2, label: "Parlak tüyler ve\nsağlıklı cilt" },
              { num: 3, label: "Kolay\nsindirilebilir\nproteinler" },
              { num: 4, label: "Vücut\nbağışıklığını\ndestekler" },
              { num: 5, label: "Kalp ve göz\nsağlığını\ndestekler" },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  className="feature-circle"
                  style={{
                    width: "185px",
                    height: "185px",
                    borderRadius: "50%",
                    border: "7px solid #dfdfdf",
                    background:
                      "linear-gradient(135deg, #038dd5 0%, #004796 100%)",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={`/images/Vector Smart Object ${item.num}.png`}
                    alt={item.label}
                    width={120}
                    height={120}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span
                  className="feature-label"
                  style={{
                    marginTop: "40px",
                    fontSize: "26px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "#204391",
                    textAlign: "center",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* #f7f7f7 arka plan - oval şeklin ortasından butonların 160px altına */}
        <div
          style={{
            backgroundColor: "#f7f7f7",
            marginTop: "-310px",
            paddingTop: "397px",
            paddingBottom: "160px",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        >
          <div
            style={{ maxWidth: "1420px", margin: "0 auto", padding: "0 40px" }}
          >
            {/* Patili dostlarınız için en iyi seçim Friends... */}
            <div className="patili-title" style={{ paddingLeft: "155px" }}>
              <h2
                style={{
                  fontFamily: "'Ultima Pro', Arial, Helvetica, sans-serif",
                  fontSize: "60px",
                  fontWeight: 700,
                  color: "#004a9b",
                  lineHeight: 1.2,
                }}
              >
                Patili dostlarınız için
                <br />
                en iyi seçim{" "}
                <span style={{ fontStyle: "italic" }}>Friends...</span>
              </h2>
            </div>

            {/* 3 daire */}
            <div
              className="patili-cards"
              style={{
                display: "flex",
                gap: "85px",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              {[
                {
                  src: "/images/149420.png",
                  label: "Doğal İçerik",
                  desc: "Katkısız formül, patili\ndostların sağlığı için\ngüvenle üretilir.",
                },
                {
                  src: "/images/2148949573.png",
                  label: "Üstün Kalite",
                  desc: "Her mama tanesi ve her\nkum tanesi kalite\nstandartlarına göre seçilir.",
                },
                {
                  src: "/images/2151182851.png",
                  label: "Gerçek Güven",
                  desc: "Veteriner onaylı ürünler,\niçiniz rahat etsin diye\nFriends'te.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Sarı dekoratif şekil - 1. ve 3. dairede, dışarıda */}
                  {(i === 0 || i === 2) && (
                    <div
                      style={{
                        position: "absolute",
                        top: "230px",
                        left: "20px",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#fded31",
                        borderRadius: "50%",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <div
                    className="patili-card-circle"
                    style={{
                      width: "300px",
                      height: "300px",
                      borderRadius: "50%",
                      border: "12px solid #e6e5e5",
                      boxSizing: "border-box",
                      overflow: "hidden",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p
                    className="patili-card-label"
                    style={{
                      marginTop: "20px",
                      fontSize: "40px",
                      fontWeight: 700,
                      color: "#000000",
                      textAlign: "center",
                      letterSpacing: "-1.5px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="patili-card-desc"
                    style={{
                      marginTop: "30px",
                      fontSize: "25px",
                      fontWeight: 400,
                      color: "#000000",
                      textAlign: "center",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.desc}
                  </p>
                  <a
                    href="#urunler"
                    className="cta-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector("#urunler");
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "250px",
                      height: "60px",
                      backgroundColor: "#064597",
                      borderRadius: "35px",
                      color: "white",
                      fontSize: "20px",
                      fontWeight: 700,
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      cursor: "pointer",
                      boxShadow: "10px 10px 0 0 #0bbbef",
                      marginTop: "70px",
                    }}
                  >
                    ÜRÜNLERE GİT
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ürünlerimiz Section */}
      <div
        style={{
          maxWidth: "1420px",
          margin: "0 auto",
          padding: "0 40px",
          marginTop: "80px",
          position: "relative",
        }}
      >
        <div className="urunlerimiz-title" style={{ paddingLeft: "115px" }}>
          <h2
            style={{
              fontSize: "90px",
              fontWeight: 700,
              fontFamily: "'Ultima Pro', Arial, Helvetica, sans-serif",
              color: "#004a9b",
              lineHeight: 1.2,
            }}
          >
            Ürünlerimiz
          </h2>
        </div>
        {/* Oval şekil - container'ı kapsayan */}
        <div
          className="urun-row"
          style={{
            marginTop: "280px",
            height: "260px",
            backgroundColor: "#ececec",
            borderRadius: "130px",
            position: "relative",
          }}
        >
          {/* Kuru mama bowl - halkanın ortasına hizalı, 70px yukarı taşar */}
          <div
            className="urun-left"
            style={{
              position: "absolute",
              top: "-70px",
              left: "125px",
              width: "340px",
            }}
          >
            <Image
              src="/images/kuru-mama-bowl.png"
              alt="Kuru Mama"
              width={340}
              height={200}
              style={{ width: "340px", height: "200px", objectFit: "contain" }}
            />
            <p
              style={{
                marginTop: "40px",
                fontSize: "34px",
                fontWeight: 900,
                color: "#004a9b",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              KURU MAMALAR
            </p>
          </div>

          {/* 3 ürün görseli - slider */}
          <div
            className="urun-slider"
            style={{
              position: "absolute",
              top: "-200px",
              left: "610px",
              width: "620px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${kuruSlide * 100}%)`,
              }}
            >
              {[0, 1, 2].map((slideIndex) => (
                <div
                  key={slideIndex}
                  style={{
                    display: "flex",
                    gap: "40px",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  {[
                    {
                      src: "/images/kedi 15kg steril.png",
                      label: "Somonlu\nKedi Maması",
                    },
                    {
                      src: "/images/kopek 15kg kuzu.png",
                      label: "Tavuklu Yavru\nKedi Maması",
                    },
                    {
                      src: "/images/kedi 15kg tavuklu.png",
                      label: "Tavuklu\nKedi Maması",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "180px",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={180}
                        height={350}
                        style={{
                          width: "180px",
                          height: "350px",
                          objectFit: "contain",
                        }}
                      />
                      <p
                        style={{
                          marginTop: "8px",
                          fontSize: "24px",
                          fontWeight: 300,
                          color: "#000000",
                          textAlign: "center",
                          whiteSpace: "pre-line",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Slider noktaları - gri alanın 10px altında, 3 görselin ortasında */}
        <div
          className="urun-dots"
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "10px",
            marginLeft: "890px",
          }}
        >
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setKuruSlide(dotIndex)}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid #c4c4c4",
                backgroundColor:
                  kuruSlide === dotIndex ? "transparent" : "#c4c4c4",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* 2. satır - YAŞ MAMALAR */}
        <div
          className="urun-row urun-row-spacing-1"
          style={{
            marginTop: "220px",
            height: "260px",
            backgroundColor: "#ececec",
            borderRadius: "130px",
            position: "relative",
          }}
        >
          <div
            className="urun-left"
            style={{
              position: "absolute",
              top: "-65px",
              left: "125px",
              width: "340px",
            }}
          >
            <Image
              src="/images/Yaş Mama.png"
              alt="Yaş Mama"
              width={340}
              height={200}
              style={{ width: "340px", height: "200px", objectFit: "contain" }}
            />
            <p
              style={{
                marginTop: "40px",
                fontSize: "34px",
                fontWeight: 900,
                color: "#004a9b",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              YAŞ MAMALAR
            </p>
          </div>

          <div
            className="urun-slider"
            style={{
              position: "absolute",
              top: "-200px",
              left: "610px",
              width: "620px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${yasSlide * 100}%)`,
              }}
            >
              {[0, 1, 2].map((slideIndex) => (
                <div
                  key={slideIndex}
                  style={{
                    display: "flex",
                    gap: "40px",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  {[
                    {
                      src: "/images/kons kopek dana etli.png",
                      label: "Somonlu\nKedi Maması",
                    },
                    {
                      src: "/images/kons kedi tavuk.png",
                      label: "Tavuklu Yavru\nKedi Maması",
                    },
                    {
                      src: "/images/kons kedi somon.png",
                      label: "Tavuklu\nKedi Maması",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "180px",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={180}
                        height={350}
                        style={{
                          width: "180px",
                          height: "350px",
                          objectFit: "contain",
                        }}
                      />
                      <p
                        style={{
                          marginTop: "8px",
                          fontSize: "24px",
                          fontWeight: 300,
                          color: "#000000",
                          textAlign: "center",
                          whiteSpace: "pre-line",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Yaş mamalar slider noktaları */}
        <div
          className="urun-dots"
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "10px",
            marginLeft: "890px",
          }}
        >
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setYasSlide(dotIndex)}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid #c4c4c4",
                backgroundColor:
                  yasSlide === dotIndex ? "transparent" : "#c4c4c4",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* 3. satır - KEDİ KUMLARI */}
        <div
          className="urun-row urun-row-spacing-2"
          style={{
            marginTop: "270px",
            height: "260px",
            backgroundColor: "#ececec",
            borderRadius: "130px",
            position: "relative",
          }}
        >
          <div
            className="urun-left"
            style={{
              position: "absolute",
              top: "-105px",
              left: "125px",
              width: "380px",
            }}
          >
            <Image
              src="/images/Firefly_Gemini Flash_görseldeki kabın yeşil görünen kısmını metalik mavi yap 297996.png"
              alt="Kedi Kumu"
              width={380}
              height={260}
              style={{ width: "380px", height: "260px", objectFit: "contain" }}
            />
            <p
              style={{
                marginTop: "30px",
                fontSize: "34px",
                fontWeight: 900,
                color: "#004a9b",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              KEDİ KUMLARI
            </p>
          </div>

          {/* 3 mock görseli - slider */}
          <div
            className="urun-slider"
            style={{
              position: "absolute",
              top: "-200px",
              left: "610px",
              width: "620px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${kumSlide * 100}%)`,
              }}
            >
              {[0, 1, 2].map((slideIndex) => (
                <div
                  key={slideIndex}
                  style={{
                    display: "flex",
                    gap: "40px",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  {[
                    { src: "/images/Mock.png", label: "Doğal\nKedi Kumu" },
                    { src: "/images/Mock-1.png", label: "Lavanta\nKedi Kumu" },
                    {
                      src: "/images/Mock-2.png",
                      label: "Bebek Pudrası\nKedi Kumu",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "180px",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={180}
                        height={350}
                        style={{
                          width: "180px",
                          height: "350px",
                          objectFit: "contain",
                        }}
                      />
                      <p
                        style={{
                          marginTop: "8px",
                          fontSize: "24px",
                          fontWeight: 300,
                          color: "#000000",
                          textAlign: "center",
                          whiteSpace: "pre-line",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Kedi kumları slider noktaları */}
        <div
          className="urun-dots"
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "10px",
            marginLeft: "890px",
          }}
        >
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setKumSlide(dotIndex)}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid #c4c4c4",
                backgroundColor:
                  kumSlide === dotIndex ? "transparent" : "#c4c4c4",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div
        id="blog"
        style={{
          backgroundColor: "#f7f7f7",
          marginTop: "220px",
          paddingTop: "50px",
          paddingBottom: "200px",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div
          style={{ maxWidth: "1420px", margin: "0 auto", padding: "0 40px" }}
        >
          {/* Blog başlık */}
          <div
            className="blog-title"
            style={{ paddingLeft: "115px", marginBottom: "60px" }}
          >
            <h2
              style={{
                fontSize: "90px",
                fontWeight: 700,
                fontFamily: "'Ultima Pro', Arial, Helvetica, sans-serif",
                color: "#004a9b",
                lineHeight: 1.2,
              }}
            >
              Blog
            </h2>
          </div>

          {/* Blog kartları */}
          <div
            className="blog-cards"
            style={{
              marginTop: "100px",
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              {
                src: "/images/Layer 4.png",
                title: "Kedileri etkileyen yeme bozuklukları nelerdir?",
                desc: "Çoğunlukla kediler yemeği sever fakat bazı kediler açısından yeme bozuklukları ciddi sağlık sorunlarına sebep...",
              },
              {
                src: "/images/Layer 4.png",
                title: "Kedileri etkileyen yeme bozuklukları nelerdir?",
                desc: "Çoğunlukla kediler yemeği sever fakat bazı kediler açısından yeme bozuklukları ciddi sağlık sorunlarına sebep...",
              },
              {
                src: "/images/Layer 4.png",
                title: "Kedileri etkileyen yeme bozuklukları nelerdir?",
                desc: "Çoğunlukla kediler yemeği sever fakat bazı kediler açısından yeme bozuklukları ciddi sağlık sorunlarına sebep...",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="blog-card"
                style={{
                  width: "450px",
                  maxWidth: "450px",
                  height: "745px",
                  borderRadius: "80px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  flex: "1 1 300px",
                }}
              >
                <div
                  className="blog-card-img"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "330px",
                    flexShrink: 0,
                    borderTopLeftRadius: "80px",
                    borderTopRightRadius: "80px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={post.src}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 10%" }}
                  />
                </div>
                <div
                  className="blog-card-body"
                  style={{
                    flex: 1,
                    backgroundColor: "#004a9b",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                    paddingBottom: "60px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "40px",
                      fontWeight: 700,
                      color: "white",
                      lineHeight: 1.1,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      marginTop: "30px",
                      fontSize: "25px",
                      fontWeight: 400,
                      color: "white",
                      lineHeight: 1.2,
                    }}
                  >
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tüm İçerikler Butonu */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "110px",
            }}
          >
            <a
              href="#"
              className="cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "250px",
                height: "60px",
                backgroundColor: "#064597",
                borderRadius: "35px",
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "10px 10px 0 0 #0bbbef",
              }}
            >
              TÜM İÇERİKLER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
