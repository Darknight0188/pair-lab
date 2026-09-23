import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Courses />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <FloatingCallButton />
    </>
  );
}
