import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import { useRef } from "react";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useIsInViewport from "../helpers/useOnScreen";
import Projects from "../components/Projects";
import homeImage from "../assets/images/engine.jpg";
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
        <div className="bg-white ">
          <div className="lg:p-10">
            <div
              className="hidden lg:block scroll-mt-28 relative "
              style={{
                backgroundImage: `url(${homeImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                width: "100%",
                height: "100vh",
              }}
            >
              <Landing ScrollToSection={ScrollToSection} ref={landing} />
            </div>
            <div className="lg:hidden scroll-mt-28 relative">
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
