import AboutInfo from "../common/AboutInfo";
import Profile from "../common/Profile";

function About() {
  return (
    <div className="flex flex-col items-center">
      <Profile src="/profile2.png" />
      <AboutInfo />
    </div>
  );
}

export default About;
