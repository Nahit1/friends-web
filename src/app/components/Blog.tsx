import Image from "next/image";

const blogPosts = [
  { image: "/images/blog-1.jpg", title: "Kedileri etkileyen başlıca hastalıklar nelerdir?" },
  { image: "/images/blog-2.jpg", title: "Köpek maması seçerken nelere dikkat edilmeli?" },
  { image: "/images/blog-3.jpg", title: "Evcil hayvan beslenmesinde doğal içeriklerin önemi" },
];

export default function Blog() {
  return (
    <section id="blog" style={{ backgroundColor: "white", padding: "80px 0" }}>
      <div style={{ maxWidth: "1420px", margin: "0 auto", padding: "0 40px" }}>
        {/* Rounded blue container */}
        <div style={{ backgroundColor: "#e6f2fb", borderRadius: "30px", padding: "50px 50px" }}>
          {/* Title */}
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0062b8", textAlign: "center", marginBottom: "40px" }}>
            Blog
          </h2>

          {/* Blog cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {blogPosts.map((post, index) => (
              <article key={index} style={{ backgroundColor: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", cursor: "pointer" }}>
                {/* Image */}
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0062b8", lineHeight: 1.5 }}>{post.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
