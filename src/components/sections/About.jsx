// import Profile from "../common/Profile";

import PieChartWithCenterLabel from "../ui/PieChartWithCenterLabel";

function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">About Me</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
      </div>
      <PieChartWithCenterLabel />
    </div>
  );
}

export default About;
{
  // the previous structure
  /* <Profile src="/profile2.png" />
      <AboutInfo /> */
}
