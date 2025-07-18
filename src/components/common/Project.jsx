function Project({
  src,
  title,
  text,
  bgClass = "bg-projectbg",
  textClass = "text-projectbg",
}) {
  return (
    <div className="flex flex-col w-xs ">
      <div className={`${bgClass} rounded-xl mb-4 shadow-md`}>
        <img className="h-fit" src={src} alt={src} />
      </div>
      <p className={`text-sm ${textClass}`}>{title}</p>
      <p className="text-base font-bold">{text}</p>
    </div>
  );
}

export default Project;
