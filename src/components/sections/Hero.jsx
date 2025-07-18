import HeroInfo from "../common/HeroInfo";
import HowToContact from "../common/HowToContact";
import Profile from "../common/Profile";
function Hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Profile src="/profile1.png" />
        <HowToContact />
      </div>
      <HeroInfo />
    </div>
  );
}

export default Hero;
