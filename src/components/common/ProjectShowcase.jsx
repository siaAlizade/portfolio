import Project from "./Project";

function ProjectShowcase() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-8 h-[860px] md:h-[430px] overflow-hidden ">
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
      <button
        className="w-full mt-2  text-sm font-medium  rounded-lg 
        md:text-lg lg:text-2xl bg-primary text-white 
        px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 xl:px-8 xl:py-3.5
       hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover transition
      "
      >
        Show more
      </button>
    </>
  );
}

export default ProjectShowcase;
