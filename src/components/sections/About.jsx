// import Profile from "../common/Profile";

import PieChartWithCenterLabel from "../ui/PieChartWithCenterLabel";

function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">About Me</h3>
        <p className="text-sm">
          I’m a passionate front-end developer who thrives on turning ideas into
          interactive, user-friendly experiences. Whether I’m building sleek
          components with Tailwind or managing complex state with Zustand, I
          always aim for clean code and intuitive design. Right now, I’m focused
          on mastering Next.js and expanding my skills to build fast, scalable,
          and SEO-friendly web apps. I'm always learning, always improving — and
          always excited to build something meaningful!
        </p>
      </div>
      <PieChartWithCenterLabel className="transition" />
    </div>
  );
}

export default About;
{
  // the previous structure
  /* <Profile src="/profile2.png" />
      <AboutInfo /> */
}
