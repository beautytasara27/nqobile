import { useState } from "react";
import Logo from "../../assets/images/logo.jpg"
const Header = ({
  ScrollToSection,
  landingIn,
  servicesIn,
  aboutIn,
  experienceIn,
  contactIn,
  projectsIn,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="fixed z-50 top-0 w-full flex justify-center font-rubik-regular py-2 sm:py-6 bg-white ">
        <div className="w-full flex justify-between items-center  relative mx-4 sm:mx-6 lg:mx-8 xl:0">
          <img src={Logo} alt="logo" width={100}/>
          <header className="hidden md:flex items-center text-lg justify-end flex-grow space-x-8 text-black">
            <h2
              className={landingIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("landing")}
            >
              <span className="mr-2 text-yello">00.</span>
              Home
            </h2>
            <h2
              className={aboutIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("about")}
            >
              <span className="mr-2 text-yello">01.</span>
              About
            </h2>
            <h2
              className={experienceIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("experience")}
            >
              <span className="mr-2 text-yello">02.</span>
              Services
            </h2>
            <h2
              className={servicesIn || projectsIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("services")}
            >
              <span className="mr-2 text-yello">03.</span>
              Clients
            </h2>

            <h2
              className={contactIn ? "text-yello" : ""}
              onClick={() => ScrollToSection("contact")}
            >
              <span className="mr-2 text-yello">04.</span>
              Contact
            </h2>
            <button className="border p-2 border-yello rounded-[4px] hover:bg-yello hover:bg-opacity-20 transition ease-in duration-500">
              <a
                target="_blank" rel="noreferrer"
                href="https://drive.google.com/uc?export=download&id=1e3Bl2X6UT0ApiH3PLN0Ov4pdflNb83Ng"
              >
                {" "}
                Resume
              </a>
            </button>
          </header>

          <svg
            className="w-12 h-12 md:hidden"
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
                  <span className="mr-2 text-yello">00.</span>
                  Home
                </h2>
                <h2
                  className={aboutIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("about")}
                >
                  <span className="mr-2 text-yello">01.</span>
                  About
                </h2>
                <h2
                  className={experienceIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("experience")}
                >
                  <span className="mr-2 text-yello">02.</span>
                  Experience
                </h2>
                <h2
                  className={servicesIn || projectsIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("services")}
                >
                  <span className="mr-2 text-yello">03.</span>
                  Projects
                </h2>

                <h2
                  className={contactIn ? "text-yello" : ""}
                  onClick={() => ScrollToSection("contact")}
                >
                  <span className="mr-2 text-yello">04.</span>
                  Contact
                </h2>
                <button className="border p-2 border-yello rounded-[4px] hover:bg-yello hover:bg-opacity-20 transition ease-in duration-500">
                  <a
                    target="_blank" rel="noreferrer"
                    href="https://drive.google.com/uc?export=download&id=1e3Bl2X6UT0ApiH3PLN0Ov4pdflNb83Ng"
                  >
                    {" "}
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </header>
        )}
      </div>
    </div>
  );
};
export default Header;
