// SkillChart.jsx
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "React",
    uv: 90,
    fill: "#00ADB5",
  },
  {
    name: "Tailwind",
    uv: 80,
    fill: "#3F3D56",
  },
  {
    name: "Next.js",
    uv: 70,
    fill: "#FF5722",
  },
];

export default function Chart() {
  return (
    <div className="flex justify-center items-center  rounded-2xl p-6 shadow-md">
      <RadialBarChart
        width={400}
        height={300}
        cx={150}
        cy={150}
        innerRadius={30}
        outerRadius={130}
        barSize={15}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </RadialBarChart>
    </div>
  );
}
