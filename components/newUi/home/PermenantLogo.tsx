import Link from "next/link";

const Fgrflogo = () => {
  return (
    <div className="relative z-50 ">
      <div className="flex flex-col gap-2 w-24 fixed bottom-5 right-5">
        <img
          src="./pLogo.png"
          alt=""
          className="z-50 w-10 ml-5 animate-bounce"
        />
        <Link
          href={"/donation"}
          className="overflow-hidden relative group bg-white text-black p-1 z-50 text-xs "
        >
          <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-10 bg-[#19afaf] top-1/2 group-hover:h-60 group-hover:-translate-y-32 ease"></span>
          <span className="relative group-hover:text-white">Donate Now</span>
        </Link>
      </div>
    </div>
  );
};

export default Fgrflogo;
