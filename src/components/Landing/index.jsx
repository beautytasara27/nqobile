import { forwardRef, useContext } from "react";
import AppContext from "../../context/AppContext";
const Landing = forwardRef(({ ScrollToSection }, ref) => {
  const { Landing } = useContext(AppContext);
  return (
    <div ref={ref} className="landingImage flex justify-center mt-50 h-screen   mx-4 sm:mx-6 lg:mx-8 text-black">
      <div  className="w-full max-w-6xl h-full bg-white lg:bg-transparent flex justify-center items-center lg:items-end" >
        <div className="hidden lg:flex justify-center items-center mb-20">
          <button
            className=" bg-white w-[60px] h-[60px] animate-bounce rounded-[30px] border  border-yello  hover:bg-black hover:bg-opacity-100 hover:text-white transition ease-in duration-500"
            onClick={() => ScrollToSection("about")}
          >
            <i className="fa-solid fa-2x fa-angles-down"></i>
          </button>
        </div>
        <div  className="lg:hidden space-y-6 font-rubik-regular ">
          <h1 className="text-4xl lg:text-7xl font-anton-regular tracking-widest">
            {" "}
            {Landing.name}
          </h1>
          <h1 className="text-4xl lg:text-7xl font-rubik-bold text-gray-300">
            {" "}
            {Landing.heading}
          </h1>
          <p className="w-full md:w-2/3 lg:w-1/2 pt-4 text-sm">{Landing.bio} </p>

          <div className="pt-4">
            {" "}
            <button onClick={()=>ScrollToSection("contact")} className="border text-sm px-5 py-4 border-yello rounded-[4px] hover:bg-yello hover:bg-opacity-20 transition ease-in duration-500">
              <a target="_blank" rel="noreferrer" href={Landing.bottonLink}>
                {Landing.buttonText}
              </a>
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
});
export default Landing;
