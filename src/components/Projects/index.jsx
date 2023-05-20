import { forwardRef, useContext } from "react";
import ProjectThumbnail from "../ProjectThumbnail";
import AppContext from "../../context/AppContext";
import homeImage from "../../assets/images/home.jpg";
const Projects = forwardRef((props, ref) => {
  const { Projects } = useContext(AppContext);
  return (
    <div className="bg-[#EBD3AC]">
    <div className="flex justify-center mx-4 sm:mx-6 lg:mx-8 mb-20">
      <div className="w-full max-w-6xl">
        <div className="flex justify-center">
          <h1
            ref={ref}
            className=" scroll-mt-40 font-rubik-bold text-2xl mb-20"
          >
            Other Noteworthy Projects
          </h1>
        </div>
        <div className="flex  relative">
          <div
            className="w-1/4 inset-0 bg-black opacity-50 flex flex-col space-y-4 text-black pt-10"
            style={{
              backgroundImage: `url(${homeImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            {" "}
          </div>
          <div className="absolute inset-0 flex flex-col mt-20 w-1/4">
            <h2 className="text-3xl text-center">Our Services</h2>
            <p className="p-2">
              Make use of professionals who can do the job the right way so you
              don’t have to waste your time or money.
            </p>
            <button className="mx-10 border px-5 py-3 mt-10 border-yello rounded-[4px] hover:bg-yello hover:bg-opacity-20 transition ease-in duration-500">
              Get Quote
            </button>
          </div>

          <div className="w-3/4 pl-4 ">
            {Projects && (
              <div className="sm:grid grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
                {Projects.map((project) => (
                  <div className="w-full" key={project.name}>
                    <ProjectThumbnail project={project} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});

export default Projects;
