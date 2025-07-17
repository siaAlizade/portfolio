import Logo from "../common/Logo";
import NavList from "../common/NavList";

function Navbar() {
  return (
    <div className="hidden md:flex">
      <Logo />
      <NavList />
      <button className="bg-[#00ADB5]">Download CV</button>
    </div>
  );
}

export default Navbar;
