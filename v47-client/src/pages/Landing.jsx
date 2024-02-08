import React, { useEffect } from "react";
import Navbar from "../components/landing/navbar/Navbar";
import Button from "../components/reusable/Button";
import Footer from "../components/landing/footer/Footer";
import Aos from "aos";
import PricingPage from "./PricingPage";
import Testimonials from "../components/landing/testimonials/Testimonials";
import Features from "../components/landing/features/Features";
import TaskFlow from "../components/landing/taskflow/TaskFlow";

export default function Landing() {
  // change sign up later to if user is logged in delete it ?

  // - user must be signed in for anything to occur (i.e product page load “maybe add )

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      id="landing-section"
      className="bg-gradient-to-t  from-gray-100 to-gray-200"
    >
      <Navbar />
      <TaskFlow />
      <Features />
      <Testimonials />
      <Footer />
    </section>
  );
}
