"use client";

import Image from "next/image";
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
      `}</style>

      <div style={{ maxWidth: "1420px", margin: "0 auto", padding: "0 40px" }}>
        {/* Content row: left text + right product images */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {/* Left side - text & button */}
          <div>
            {/* Title */}
            <div style={{ marginBottom: "20px", paddingLeft: "155px" }}>
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
            <div style={{ paddingLeft: "155px", marginBottom: "60px" }}>
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
          style={{
            position: "relative",
            marginTop: "220px",
            minHeight: "500px",
          }}
        >
          {/* Oval şekil - container'dan 70px taşar */}
          <div
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
            <div style={{ paddingLeft: "155px" }}>
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
        <div style={{ paddingLeft: "115px" }}>
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

          {/* 3 ürün görseli - kuru mama görselinin 145px sağında */}
          <div
            style={{
              position: "absolute",
              top: "-200px",
              left: "610px",
              display: "flex",
              gap: "40px",
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
        </div>

        {/* 2. satır - YAŞ MAMALAR */}
        <div
          style={{
            marginTop: "220px",
            height: "260px",
            backgroundColor: "#ececec",
            borderRadius: "130px",
            position: "relative",
          }}
        >
          <div
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
            style={{
              position: "absolute",
              top: "-200px",
              left: "610px",
              display: "flex",
              gap: "40px",
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
        </div>

        {/* 3. satır - KEDİ KUMLARI */}
        <div
          style={{
            marginTop: "270px",
            height: "260px",
            backgroundColor: "#ececec",
            borderRadius: "130px",
            position: "relative",
          }}
        >
          <div
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

          {/* 3 mock görseli */}
          <div
            style={{
              position: "absolute",
              top: "-200px",
              left: "610px",
              display: "flex",
              gap: "40px",
            }}
          >
            {[
              { src: "/images/Mock.png", label: "Doğal\nKedi Kumu" },
              { src: "/images/Mock-1.png", label: "Lavanta\nKedi Kumu" },
              { src: "/images/Mock-2.png", label: "Bebek Pudrası\nKedi Kumu" },
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
          <div style={{ paddingLeft: "115px", marginBottom: "60px" }}>
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
            style={{
              marginTop: "100px",
              display: "flex",
              gap: "40px",
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
                style={{
                  width: "450px",
                  height: "745px",
                  borderRadius: "80px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "450px",
                    height: "330px",
                    flexShrink: 0,
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
