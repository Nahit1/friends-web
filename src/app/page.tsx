import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import WhyFriends from "./components/WhyFriends";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Features />
      <Footer />
    </>
  );
}
