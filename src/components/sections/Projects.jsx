import Filters from "../common/Filters";
import ProjectShowcase from "../common/ProjectShowcase";

function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl  text-center  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
        My Projects
      </h3>
      <p className="text-base text-center  md:text-lg lg:text-2xl mb-4">
        Explore some of the projects I've worked on. Each project reflects my
        commitment to quality, performance, and intuitive user experiences.
      </p>
      <Filters />
      <ProjectShowcase />
    </div>
  );
}

export default Projects;
