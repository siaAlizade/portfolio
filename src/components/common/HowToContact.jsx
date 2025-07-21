import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function HowToContact() {
  return (
    <ul className="flex gap-3 justify-center items-center py-4">
      <li>
        <a
          className="text-xl hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition "
          href="https://github.com/siaAlz"
        >
          <FaGithub />
        </a>
      </li>

      <li>
        <a
          className="text-xl hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition"
          href="https://t.me/+989941259563"
        >
          <FaTelegramPlane />
        </a>
      </li>
      <li>
        <a className="text-xl hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          className="text-xl hover:text-primary-hover active:text-primary-hover focus:text-primary-hover transition"
          href="https://www.linkedin.com/in/siavash-alizade-795916371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
}

export default HowToContact;
