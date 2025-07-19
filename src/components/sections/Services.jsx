import ServiceExample from "../../assets/serviceExample.svg?react";
import Service from "../common/Service";

import { FaCode } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

function Services() {
  return (
    <div>
      <h3 className=" text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 ">
        Services
      </h3>
      <p className="text-center  text-base md:text-lg lg:text-2xl mb-4">
        I provide a range of web development services focused on quality,
        performance, and user experience:
      </p>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-2 lg:gap-x-6 xl:gap-x-10 ">
        <Service
          svg={<FaCode />}
          title="Web Development"
          text="Building modern, scalable, and responsive websites using React and Next.js."
        />
        <Service
          svg={<LuLayoutDashboard />}
          title="UI/UX Implementation"
          text="Translating design systems and Figma prototypes into pixel-perfect components with Tailwind CSS."
        />
        <Service
          svg={<FaBolt />}
          title="SPA Development"
          text="Creating seamless, single-page applications with smooth routing and optimized state management."
        />
        <Service
          svg={<FaTachometerAlt />}
          title="Performance Optimization"
          text="Auditing and enhancing site speed, accessibility, and best practices for a smoother user experience."
        />
      </div>
    </div>
  );
}

export default Services;
