import Logo from "../common/Logo";
import NavList from "../common/NavList";

function Navbar() {
  return (
    <div className="hidden md:flex w-full md:justify-between items-center mb-10">
      <Logo />
      <div className="flex items-center">
        <NavList />
        <button className="bg-[#00ADB5] ml-6 rounded-md px-4 py-2 lg:text-lg hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover hover:text-white active:text-white focus:text-white transition">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Navbar;
