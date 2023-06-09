import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import { useRef } from "react";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useIsInViewport from "../helpers/useOnScreen";
import Projects from "../components/Projects";
import homeImage from "../assets/images/home.jpg";
const Home = () => {
  const landing = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);
  const ScrollToSection = (section) => {
    if (section === "landing") {
      landing.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "about") {
      about.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "experience") {
      experience.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "contact") {
      contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "projects") {
      projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const landingIn = useIsInViewport(landing);
  const aboutIn = useIsInViewport(about);
  const experienceIn = useIsInViewport(experience);
  const contactIn = useIsInViewport(contact);
  const projectsIn = useIsInViewport(projects);

  return (
    <div className="relative">
      <div className=" text-lg">
        <Header
          ScrollToSection={ScrollToSection}
          landingIn={landingIn}
          aboutIn={aboutIn}
          experienceIn={experienceIn}
          contactIn={contactIn}
          projectsIn={projectsIn}
        />
        <div className="bg-theme ">
          <div className=" bg-themeDarker">
            <div
              className="scroll-mt-28  "
             
            >
              <Landing ScrollToSection={ScrollToSection} ref={landing} />
            </div>
            
          </div>
          <div className="scroll-mt-28">
            <About ref={about} aboutIn={aboutIn} />
          </div>
          <div className="scroll-mt-28">
            <Projects ref={projects} projectsIn={projectsIn} />
          </div>
          <div className="scroll-mt-28">
            <Gallery ref={experience} experienceIn={experienceIn} />
          </div>

          <div className="scroll-mt-28">
            <Contact ref={contact} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
