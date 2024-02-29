import { useEffect } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import Aos from "aos";
import Testimonials from "../components/landing/testimonials/Testimonials";
import Features from "../components/landing/features/Features";
import TaskFlow from "../components/landing/Hero";
import TeamInfo from "../components/landing/teamInfo/TeamInfo";
import Hero from "../components/landing/Hero";

export default function Landing() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      id="landing-section"
      className="bg-gradient-to-t  duration-300 dark:bg-gradient-to-t  dark:from-[#121212] dark:to-[#121212]  from-gray-100 to-gray-200"
    >
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <TeamInfo />
      <Footer />
    </section>
  );
}
