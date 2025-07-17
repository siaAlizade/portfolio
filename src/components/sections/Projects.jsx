import Filters from "../common/Filters";
import ProjectShowcase from "../common/ProjectShowcase";

function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-center">My Projects</h3>
      <p className="text-xs text-center ">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </p>
      <Filters />
      <ProjectShowcase />
    </div>
  );
}

export default Projects;
