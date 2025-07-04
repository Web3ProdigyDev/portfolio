import SplitLayout from "./layout/SplitLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Intro from "./sections/Intro";
import Bio from "./sections/Bio";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import CodingJourney from "./sections/CodingJourney";
import Footer from "./sections/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <SplitLayout>
      <Intro />
      <Bio />

      {/* 📘 My Coding Journey */}
      <CodingJourney />

      {/* 🚀 Projects */}
      <Projects />

      {/* 🛠 Tech Stack */}
      <TechStack />

      {/* 🏆 Achievements */}
      <Achievements />

      {/* 📬 Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </SplitLayout>
  );
};

export default App;