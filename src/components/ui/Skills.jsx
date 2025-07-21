// 🔢 Skill Levels (You Can Use This Scale)
// Level	Meaning
// 🟢 Beginner	You're learning the basics; need tutorials to build things
// 🟡 Intermediate	You can build things on your own, but still need to look things up
// 🔵 Proficient	You use it fluently; can debug, structure code, and make decisions
// 🟣 Efficient	You build fast, reusable, scalable, clean systems consistently
// 🔴 Expert	You can teach others, contribute to open source, build libraries

const skills = [
  { name: "Java Script", level: "Efficent", colorClass: "bg-[#F7DF1E]" },
  { name: "React", level: "Efficent", colorClass: "bg-[#61DAFB]" },
  { name: "Type Script", level: "Proficient", colorClass: "bg-[#3178C6]" },
  { name: "Next.js", level: "Intermediate", colorClass: "bg-[#000000]" },
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
            <span className="text-sm text-gray-500">{skill.level}</span>
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
