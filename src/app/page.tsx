import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/sections/Intro";
import SignatureDishes from "@/components/sections/SignatureDishes";
import OurStory from "@/components/sections/OurStory";
import FullMenu from "@/components/menu/FullMenu";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import ReservationCTA from "@/components/sections/ReservationCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main id="home">
      <Navbar />

      <Hero />

      <Intro />

      <SignatureDishes />

      <OurStory />

      <FullMenu />

      <Experience />

      <Gallery />

      <Testimonials />

      <ReservationCTA />

      <Contact />

      <Footer />

    </main>
  );
}

{/* <section
  id="reservation"
  style={{
    minHeight: "100vh",
    padding: "120px 20px",
  }}
>
  <h2>Reservation</h2>
</section> */}