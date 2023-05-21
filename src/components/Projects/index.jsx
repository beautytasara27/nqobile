import { forwardRef, useContext } from "react";
import ProjectThumbnail from "../ProjectThumbnail";
import AppContext from "../../context/AppContext";
import homeImage from "../../assets/images/home.jpg";
const Projects = forwardRef((props, ref) => {
  const { Projects } = useContext(AppContext);
  if (props.projectsIn) {
    document.getElementById("projects").classList.add("landing");
  }
  return (
    <div className="bg-themeDarker">
      <div className="flex justify-center mx-4 sm:mx-6 lg:mx-8 mb-20">
        <div className="w-full max-w-6xl">
          <div>
            <h1
              ref={ref}
              className="scroll-mt-40 font-anton-regular tracking-wider text-2xl my-20  text-white"
            >
              <span className="lg:pr-4 text-yello">02.</span> Our Services
            </h1>
          </div>
          <div className="w-full mb-20" id="projects">
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
  );
});

export default Projects;
