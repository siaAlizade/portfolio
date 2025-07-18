function HeroInfo() {
  return (
    <div>
      <p>Hi i am</p>
      <p className="text-primary font-semibold mt-0.5">Siavash Alizade</p>
      <h3 className="text-2xl font-bold mb-2">Front-End Developer</h3>
      <p className="text-base  mb-4">
        I build clean, responsive web interfaces using React, TypeScript, and
        Tailwind CSS — powered by tools like Zustand and React Query for
        efficient state and data management. I care about performance,
        accessibility, and delivering smooth user experiences. Currently diving
        deeper into Next.js and modern web architecture.
      </p>
      <button className="mt-2 text-base rounded-sm bg-primary text-white py-1 px-4 hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover transition">
        <a href="#contact-me">Hire Me</a>
      </button>
    </div>
  );
}

export default HeroInfo;
