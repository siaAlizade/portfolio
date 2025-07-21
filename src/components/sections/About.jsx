// import Profile from "../common/Profile";

import PieChartWithCenterLabel from "../ui/PieChartWithCenterLabel";
import Skills from "../ui/Skills";

function About() {
  return (
    <div
      id="about-me"
      className="flex flex-col items-center sm:gap-6  lg:gap-6 xl:gap-2 sm:flex-row-reverse sm:justify-between sm:w-full"
    >
      <div className="mb-6 sm:max-w-sm md:max-w-xs lg:max-w-md xl:max-w-2xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
          About Me
        </h3>
        <p className="text-sm md:text-md lg:text-xl mb-4 ">
          I’m a passionate front-end developer who thrives on turning ideas into
          interactive, user-friendly experiences. Whether I’m building sleek
          components with Tailwind or managing complex state with Zustand, I
          always aim for clean code and intuitive design. Right now, I’m focused
          on mastering Next.js and expanding my skills to build fast, scalable,
          and SEO-friendly web apps. I'm always learning, always improving — and
          always excited to build something meaningful!
        </p>
      </div>
      <Skills />
      {/* <PieChartWithCenterLabel /> */}
    </div>
  );
}

export default About;
{
  // the previous structure
  /* <Profile src="/profile2.png" />
      <AboutInfo /> */
}
