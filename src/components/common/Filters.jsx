import FilterBtn from "./FilterBtn";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { MdApps } from "react-icons/md"; // Google-style grid icon

function Filters() {
  return (
    <ul className="flex justify-center gap-3 mb-6">
      <li>
        <FilterBtn>
          <MdApps />
        </FilterBtn>
      </li>
      <li>
        <FilterBtn>
          <IoLogoJavascript />
        </FilterBtn>
      </li>
      <li>
        <FilterBtn>
          <FaReact />
        </FilterBtn>
      </li>
      <li>
        <FilterBtn>
          <RiNextjsLine />
        </FilterBtn>
      </li>
    </ul>
  );
}

export default Filters;
