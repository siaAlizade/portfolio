function FilterBtn({ children }) {
  return (
    <button className="cursor-pointer text-2xl px-4 py-2 bg-accent  border-1 border-[#545454] rounded-lg focus:bg-primary active:bg-primary  hover:bg-primary hover:text-white active:text-white focus:text-white transition">
      {children}
    </button>
  );
}

export default FilterBtn;
