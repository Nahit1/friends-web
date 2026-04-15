import { FaLeaf, FaStar, FaHandshake } from "react-icons/fa";

const cards = [
  { icon: <FaLeaf size={32} />, title: "Doğal İçerik", description: "Tamamen doğal ve sağlıklı içeriklerle hazırlanan mamalarımız, evcil dostlarınızın beslenme ihtiyaçlarını karşılar." },
  { icon: <FaStar size={32} />, title: "Üstün Kalite", description: "En yüksek kalite standartlarında üretilen ürünlerimiz, her lokmada güvenilir beslenme sunar." },
  { icon: <FaHandshake size={32} />, title: "Gerçek Güven", description: "Yılların deneyimi ve güveniyle, evcil hayvanlarınızın sağlığı bizim önceliğimizdir." },
];

export default function WhyFriends() {
  return (
    <section style={{ position: "relative" }}>
      {/* Top curve */}
      <div style={{ backgroundColor: "white" }}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block" }}>
          <path d="M0 0 C 480 80, 960 80, 1440 0 L1440 80 L0 80Z" fill="#0062b8" />
        </svg>
      </div>

      {/* Blue section */}
      <div style={{ backgroundColor: "#0062b8", paddingBottom: "20px" }}>
        <div style={{ maxWidth: "1420px", margin: "0 auto", padding: "0 40px" }}>
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "4px" }}>Patili dostlarınız için</p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "white", lineHeight: 1.2 }}>
              en iyi seçim <span style={{ fontStyle: "italic" }}>Friends...</span>
            </h2>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", maxWidth: "900px", margin: "0 auto" }}>
            {cards.map((card, index) => (
              <div key={index} style={{ backgroundColor: "white", borderRadius: "20px", padding: "40px 24px", textAlign: "center", boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#e6f2fb", display: "flex", alignItems: "center", justifyContent: "center", color: "#0062b8", margin: "0 auto 20px" }}>
                  {card.icon}
                </div>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#0062b8", marginBottom: "10px" }}>{card.title}</h4>
                <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div style={{ backgroundColor: "white" }}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block" }}>
          <path d="M0 80 C 480 0, 960 0, 1440 80 L1440 0 L0 0Z" fill="#0062b8" />
        </svg>
      </div>
    </section>
  );
}
