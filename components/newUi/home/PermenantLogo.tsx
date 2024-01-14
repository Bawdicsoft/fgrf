const Fgrflogo = () => {
  return (
    <div className="relative z-50 ">
      <div className='flex flex-col gap-2 w-24 fixed bottom-5 right-5' >
        <img
          src="./pLogo.png"
          alt=""
          className="z-50 w-10 ml-5 "
        />
        <button className="bg-white text-black p-1 z-50 text-xs ">
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default Fgrflogo;