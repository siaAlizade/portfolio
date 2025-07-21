import HeroInfo from "../common/HeroInfo";
import HowToContact from "../common/HowToContact";
import Profile from "../common/Profile";
import profile1 from "../../assets/profile1.png";
function Hero({ onContact }) {
  return (
    <div className="flex flex-col justify-center items-center sm:w-full sm:flex-row-reverse sm:justify-between">
      <div>
        <Profile src={profile1} />
        <HowToContact />
      </div>
      <HeroInfo onContact={onContact} />
    </div>
  );
}

export default Hero;
