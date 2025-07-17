function Service({ svg, title, text }) {
  return (
    <div className="bg-accent rounded-xl py-4 px-4">
      <div className="text-4xl text-primary mb-2">{svg}</div>
      <p className="text-base font-semibold">{title} </p>
      <p className="text-xs">{text} </p>
    </div>
  );
}

export default Service;
