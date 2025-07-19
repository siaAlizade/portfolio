import React from "react";

const skills = [
  { name: "Java Script", level: 90, colorClass: "bg-[#F7DF1E]" },
  { name: "React", level: 80, colorClass: "bg-[#61DAFB]" },
  { name: "Type Script", level: 60, colorClass: "bg-[#3178C6]" },
  { name: "Next.js", level: 50, colorClass: "bg-[#000000]" },
];

export default function Skills() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">My Skills 🙌</h2>
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              {skill.name}
            </span>
            <span className="text-sm text-gray-500">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200  h-4">
            <div
              className={`${skill.colorClass} h-4  transition-all duration-700 ease-out`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
