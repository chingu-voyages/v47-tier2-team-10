import { useEffect } from "react";
import Navbar from "../components/landing/navbar/Navbar";
import Footer from "../components/landing/footer/Footer";
import Aos from "aos";
import Testimonials from "../components/landing/testimonials/Testimonials";
import Features from "../components/landing/features/Features";
import TaskFlow from "../components/landing/taskflow/TaskFlow";
import TeamInfo from "../components/landing/teamInfo/TeamInfo";

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
      <TaskFlow />
      <Features />
      <Testimonials />
      {/* <ChatbotComponent/> */}
      <TeamInfo />
      <Footer />
    </section>
  );
}
