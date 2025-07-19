function ContactMe() {
  return (
    <div className="flex flex-col items-center " id="contact-me">
      <h3
        className="text-2xl 
      text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 
      "
      >
        Lets Develop Together
      </h3>
      <p className="text-base text-center mb-6 md:text-lg lg:text-2xl ">
        Have an idea or need a front-end developer for your next project?
      </p>
      <div className="flex flex-col md:flex-row md:w-full">
        <input
          className="text-[#797979] bg-accent border-1 border-[#AFAFAF] rounded-xl px-4 py-2 w-full mb-4 md:mb-0 md:mr-6  focus:outline-none focus:ring-2 focus:ring-primary transition "
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="whitespace-nowrap bg-primary text-white rounded-lg px-4 py-2 self-center  hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-hover transition">
          Contact me
        </button>
      </div>
    </div>
  );
}
export default ContactMe;
