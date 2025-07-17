import Project from "./Project";

function ProjectShowcase() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center gap-y-8 h-[860px] overflow-hidden ">
        <Project
          src="/projectExample.png"
          title="Web Design "
          text="Business Landing Page Design "
          bgClass="bg-blue-50"
          textClass="text-blue-500"
        />
        <Project
          src="/projectExample2.png"
          title="Web Design "
          text="Ecom Web Page Design  "
          bgClass="bg-emerald-50"
          textClass="text-emerald-500"
        />{" "}
        <Project
          src="/projectExample2.png"
          title="Web Design "
          text="Ecom Web Page Design  "
          bgClass="bg-rose-50"
          textClass="text-rose-300"
        />
      </div>
      <button className="w-full mt-2 py-2 px-4 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover transition">
        Show more
      </button>
    </>
  );
}

export default ProjectShowcase;
