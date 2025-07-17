import ServiceExample from "../../assets/serviceExample.svg?react";
import Service from "../common/Service";

import { FaCode } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

function Services() {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold text-center ">Services</h3>
      <p className="text-xs text-center mb-4">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 ">
        <Service
          svg={<FaCode />}
          title="Web Development"
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
        <Service
          svg={<LuLayoutDashboard />}
          title="UI/UX Implementation"
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
        <Service
          svg={<FaBolt />}
          title="SPA Development"
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
        <Service
          svg={<FaTachometerAlt />}
          title="Performance Optimization"
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
      </div>
    </div>
  );
}

export default Services;
