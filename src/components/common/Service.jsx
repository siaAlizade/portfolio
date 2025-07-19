function Service({ svg, title, text }) {
  return (
    <div className="flex flex-col justify-center  bg-accent rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md  ">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-2 md:mb-4">
        {svg}
      </div>
      <p className=" text-base sm:text-lg md:text-xl lg:text-2xl font-semibold md:mb-1 xl:mb-2">
        {title}{" "}
      </p>
      <p className=" text-xs sm:text-base md:text-xl lg:text-2xl">{text} </p>
    </div>
  );
}

export default Service;
