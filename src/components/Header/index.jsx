import { useState } from "react";
import Logo from "../../assets/images/logo.png";
const Header = ({
  ScrollToSection,
  landingIn,
  aboutIn,
  experienceIn,
  contactIn,
  projectsIn,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="fixed z-50 top-0 w-full flex justify-center font-rubik-regular py-2 sm:py-6 bg-theme">
        <div className="w-full flex justify-between items-center  relative mx-4 sm:mx-6 lg:mx-8 xl:0">
          <img src={Logo} alt="logo" width={100} />
          <div className="flex flex-col space-y-2">
            <h1 className="hidden sm:block text-mint uppercase text-center font-anton-regular text-2xl tracking-[.25em]">
              RichJane Enterprise
            </h1>
            <header className="hidden md:flex items-center text-base justify-center flex-grow space-x-8 text-white">
              <h2
                className={landingIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("landing")}
              >
                HOME
              </h2>
              <h2
                className={aboutIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("about")}
              >
                ABOUT
              </h2>
              <h2
                className={projectsIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("projects")}
              >
                SERVICES
              </h2>
              <h2
                className={experienceIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("experience")}
              >
                GALLERY
              </h2>

              <h2
                className={contactIn ? "text-yello" : ""}
                onClick={() => ScrollToSection("contact")}
              >
                CONTACT
              </h2>
            </header>
          </div>
          <div className="hidden sm:flex space-x-4 text-white ">
            <i className="fa-regular  fa-envelope hover:text-mint "></i>
            <i className="fa-brands  fa-instagram hover:text-mint"></i>
            <i className="fa-brands  fa-facebook-f hover:text-mint"></i>
          </div>

          <svg
            className="w-12 h-12 md:hidden text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <path
              d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {menuOpen && (
          <header
            className="w-8/12 h-screen absolute top-0 right-0 z-15  bg-theme text-base p-5 "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {" "}
            <div className="flex justify-end">
              <i
                onClick={() => setMenuOpen(false)}
                className="fa-solid fa-xmark fa-2x text-yello"
              ></i>
            </div>
            <div className="h-full flex justify-center items-center">
              <div className="flex-col space-y-8">
                <h2
                  className={landingIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("landing")}
                >
                  HOME
                </h2>
                <h2
                  className={aboutIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("about")}
                >
                  ABOUT
                </h2>
                <h2
                  className={projectsIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("projects")}
                >
                  SERVICES
                </h2>
                <h2
                  className={experienceIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("experience")}
                >
                  GALLERY
                </h2>

                <h2
                  className={contactIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("contact")}
                >
                  CONTACT
                </h2>
              </div>
            </div>
          </header>
        )}
      </div>
    </div>
  );
};
export default Header;
