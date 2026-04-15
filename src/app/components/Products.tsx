import Image from "next/image";

const kediProducts = [
  "Kedi 15kg Somon",
  "Kedi 15kg Steril",
  "Kedi 15kg Tavuklu",
  "Kons. Kedi Somon",
  "Kons. Kedi Tavuk",
];

const kopekProducts = [
  "Köpek 15kg Kuzu",
  "Köpek 15kg Eco Kuzu",
  "Kons. Köpek Dana",
];

const kediKumlari = [
  "Kedi Kumu Doğal",
  "Kedi Kumu Lavanta",
  "Kedi Kumu Bebek Pudrası",
];

function ProductCard({ name }: { name: string }) {
  return (
    <div style={{ width: "120px", height: "150px", backgroundColor: "#e6f2fb", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "12px", cursor: "pointer" }}>
      <div style={{ width: "55px", height: "75px", background: "linear-gradient(180deg, rgba(0,98,184,0.25) 0%, rgba(0,98,184,0.08) 100%)", borderRadius: "8px", marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "32px", height: "10px", backgroundColor: "rgba(0,98,184,0.15)", borderRadius: "3px" }} />
      </div>
      <p style={{ fontSize: "10px", fontWeight: 700, color: "#0062b8", textAlign: "center", lineHeight: 1.3 }}>{name}</p>
    </div>
  );
}

export default function Products() {
  return (
    <section id="urunler" style={{ backgroundColor: "white", padding: "80px 0" }}>
      <div style={{ maxWidth: "1420px", margin: "0 auto", padding: "0 40px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0062b8", textAlign: "center", marginBottom: "60px" }}>
          Ürünlerimiz
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          {/* Kedi Section */}
          <div id="kedi">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "30px", marginBottom: "30px" }}>
              <div style={{ width: "150px", flexShrink: 0, display: "flex", justifyContent: "center", paddingTop: "8px" }}>
                <Image src="/images/kuru-mama-bowl.png" alt="Kedi Mamaları" width={140} height={90} style={{ objectFit: "contain" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ display: "inline-block", backgroundColor: "#0062b8", color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", padding: "10px 28px", borderRadius: "9999px" }}>
                    KEDİ MAMALARI
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  {kediProducts.map((product, i) => <ProductCard key={i} name={product} />)}
                </div>
              </div>
            </div>

            {/* Kedi Kumları */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}>
              <div style={{ width: "150px", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ display: "inline-block", backgroundColor: "#0062b8", color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", padding: "10px 28px", borderRadius: "9999px" }}>
                    KEDİ KUMLARI
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  {kediKumlari.map((product, i) => <ProductCard key={i} name={product} />)}
                </div>
              </div>
            </div>
          </div>

          {/* Köpek Section */}
          <div id="kopek">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}>
              <div style={{ width: "150px", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ display: "inline-block", backgroundColor: "#0062b8", color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", padding: "10px 28px", borderRadius: "9999px" }}>
                    KÖPEK MAMALARI
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  {kopekProducts.map((product, i) => <ProductCard key={i} name={product} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
