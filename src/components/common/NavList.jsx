function NavList({ onContact }) {
  return (
    <ul className="hidden sm:flex gap-6 text-base lg:text-lg justify-center xl:text-xl">
      <li className="hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition">
        <a href="#home">Home</a>
      </li>
      <li className="hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition">
        <a href="#about-me">About Me</a>
      </li>
      <li className="hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition">
        <a href="#services">Services</a>
      </li>
      <li className="hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition">
        <a href="#projects">Projects</a>
      </li>
      <li
        onClick={onContact}
        className="cursor-pointer hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition"
      >
        <a>Contact</a>
      </li>
    </ul>
  );
}

export default NavList;
