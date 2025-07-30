import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SplitLayout from "./layout/SplitLayout";
import Intro from "./sections/Intro";
import Bio from "./sections/Bio";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import CodingJourney from "./sections/CodingJourney";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import ProjectDetail from "./sections/ProjectDetail";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SplitLayout>
              <ThemeToggle />
              <Intro />
              <Bio />
              <CodingJourney />
              <Projects />
              <TechStack />
              <Achievements />
              <Reviews />
              <Contact />
              <Footer />
            </SplitLayout>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
