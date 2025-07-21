import Logo from "../common/Logo";
import NavList from "../common/NavList";

function Navbar({ onContact }) {
  return (
    <div className="hidden md:flex w-full md:justify-between items-center mb-10">
      <Logo />
      <div className="flex items-center">
        <NavList onContact={onContact} />
        <button className="bg-[#00ADB5] ml-6 rounded-md px-4 py-2 lg:text-lg xl:text-xl hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover hover:text-white active:text-white focus:text-white transition">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Navbar;
