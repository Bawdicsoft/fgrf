import Link from 'next/link';
import React from 'react';
const ContactUs: React.FC = () => {
    return (
        <section className="py-10 ">
            <div className='flex flex-col justify-center items-center px-5 bg-white rounded-lg'>
                <div className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                    <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                        Contact Us
                    </span>
                </div>
                <div className='bg-white grid grid-cols-1 lg:grid-cols-2  gap-5 p-5 rounded-lg'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <div className=''>
                                <label className='font-bold text-sky-800 pl-2'>Name</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl max-w-[190px]" />
                                </div>
                            </div>
                            <div className=''>
                                <label className='font-bold text-sky-800 pl-2'>Email</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl max-w-[190px]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <label className='font-bold text-sky-800 pl-2'>Phone No</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl max-w-[190px]" />
                                </div>
                            </div>
                            <div className=''>
                                <label className='font-bold text-sky-800 pl-2'>Full Name</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl max-w-[190px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <label className='font-bold text-sky-800 pl-2'>Message</label>
                            <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0">
                                <textarea rows={4} className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl resize-none w-full">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactUs;