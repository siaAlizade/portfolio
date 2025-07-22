function HeroInfo({ onContact }) {
  return (
    <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
      <p className="md:text-lg lg:text-2xl mb-0.5 md:mb-1 lg:mb-1.5">Hi i am</p>
      <p className="text-primary font-semibold md:text-lg lg:text-2x  md:mb-0.5 lg:mb-1  ">
        Siavash Alizade
      </p>
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-0 ">
        Front-End <span className="sm:hidden">Developer</span>
      </h3>
      <h3
        className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold  sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 
      sm:translate-x-[82px] md:translate-x-[98px] lg:translate-x-[130px] xl:translate-x-[162px]"
      >
        Developer
      </h3>
      <p className="text-base md:text-lg lg:text-2xl mb-4">
        I build clean, responsive web interfaces using React, TypeScript, and
        Tailwind CSS — powered by tools like Zustand and React Query for
        efficient state and data management. I care about performance,
        accessibility, and delivering smooth user experiences.
      </p>
      <button
        className="mt-2 text-base md:text-lg lg:text-2xl rounded-sm bg-primary text-white 
        px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 xl:px-8 xl:py-3.5
       hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover transition"
      >
        <a className="cursor-pointer" onClick={onContact}>
          Hire Me
        </a>
      </button>
    </div>
  );
}

export default HeroInfo;
