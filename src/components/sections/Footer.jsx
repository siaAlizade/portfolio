import HowToContact from "../common/HowToContact";
import Logo from "../common/Logo";
import NavList from "../common/NavList";
import TradeMark from "../common/TradeMark";

function Footer() {
  return (
    <footer className=" mt-8">
      <NavList />
      <HowToContact />
      <TradeMark />
    </footer>
  );
}

export default Footer;
