"use client"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FcDonate } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
    return (<>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="bg-white py-2 px-4">
                <Link href="/">
                    <img
                        className=" w-48 h-28 lg:block md:block cursor-pointer"
                        src="/img/fgrf.png"
                        alt="tokenLauncher"
                    />
                </Link>
            </div>
            <div className="hidden  md:col-span-5 lg:col-span-4 xl:col-span-5 md:flex flex-col">
                {/* containter-1 */}
                <div className="grid grid-col-1 md:grid-cols-3">
                    <div className="grid grid-cols-2 md:grid-cols-5 place-content-center place-items-center py-2 md:px-16  lg:px-16 xl:px-24  border-r-2 border-black ">
                        <FaFacebook className="w-5 h-5" />
                        <div className="bg-black text-white  rounded-full w-5 h-5 flex justify-center items-center">
                            <IoLogoInstagram className="w-4 h-4" />
                        </div>
                        <div className="bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
                            <FaTwitter className="w-3 h-3" />
                        </div>
                        <div className="bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
                            <IoLogoTiktok className="w-3 h-3" />
                        </div>
                        <div className="bg-black text-white w-5 h-5  rounded-full flex justify-center items-center">
                            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="white"></path> </svg>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 py-2  px-4 place-content-center  border-r-2 border-black">
                        <div className="flex items-center gap-1">
                            <IoSpeedometerOutline className="w-4 h-4" />
                            <p className="text-[12px] text-gray-700">Mon Friday At 10:00 Pm</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <IoMail className="w-4 h-4" />
                            <p className="text-sm text-gray-700">www.FGRF UK.com</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 py-2 px-3 place-items-center  place-content-center ">
                        <span className="hover:text-light-blue rounded-md lg:text-xs xl:text-xs font-semibold text-black">
                            DONATE TO FUND
                        </span>
                        <div className="w-24 bg-[#edeef0] shadow-inner  border-[#faf9f9] rounded-md flex justify-center items-center">
                            <span className="w-8  hover:text-light-blue px-3 rounded-md lg:text-xs xl:text-xs font-semibold text-black">
                                <strong>&#163;</strong>
                            </span>
                            <div className="w-28 h-8 bg-[#edeef0] shadow-inner  border-[#faf9f9] rounded-md flex justify-around items-center">

                                <input
                                    type="number"
                                    id="small-input"
                                    placeholder="Amount"
                                    className="block w-full  text-gray-900 bg-transparent sm:text-xs outline-none focus:border-transparent focus:ring-0 focus:outline-none"
                                    required
                                />

                            </div>
                        </div>

                        <select
                            id="countries"
                            className="bg-[#edeef0] p-1 rounded-lg text-gray-900 text-sm block  outline-none"
                            required
                        >
                            <option value="single">Single</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        <button className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md lg:text-xs xl:text-xs text-black font-extrabold">
                            DONATE NOW
                        </button>
                    </div>
                </div>
                {/* containter-2 */}
                <div className="grid grid-col-1  lg:grid-cols-3 border-b-0 border-t-2  border-black" >
                    <div className="md:col-span-2 grid grid-cols-1  place-content-center place-items-start lg:grid-cols-3 border-b-0 border-r-2  border-black">
                        <h1 className="text-xl font-bold">Our Department</h1>
                        <h1 className="text-xl font-bold">Appeal</h1>
                        <h1 className="text-xl font-bold">Donation</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 place-content-center">
                        <div className="md:col-span-2 flex justify-center items-center">
                            <h1 className="text-xl font-bold"> Call now</h1>
                            <div className="flex justify-start items-center">
                                <FiPhoneCall />
                                <span className="text-sm ">+44 7300 559919</span>
                            </div>
                        </div>
                        <div className="bg-sky-800 text-white p-2 flex justify-center items-center">
                            <FcDonate className="w-16 h-16" />
                        </div>
                    </div>
                </div>
            </div>
            <button className="md:hidden self-center">
                <GiHamburgerMenu className="text-2xl" />
            </button>
        </div>
    </>
    );
}


