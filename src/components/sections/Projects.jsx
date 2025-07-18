import Filters from "../common/Filters";
import ProjectShowcase from "../common/ProjectShowcase";

function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-center">My Projects</h3>
      <p className="text-base text-center ">
        Explore some of the projects I've worked on. Each project reflects my
        commitment to quality, performance, and intuitive user experiences.
      </p>
      <Filters />
      <ProjectShowcase />
    </div>
  );
}

export default Projects;
