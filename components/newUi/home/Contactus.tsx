import Link from 'next/link';
import React from 'react';
const ContactUs: React.FC = () => {
    return (
        <section className="py-20">
            <div className='flex flex-col justify-center items-center px-5'>
                <div className=" rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                    <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                        Contact Us
                    </span>
                </div>
                <div className='bg-white grid grid-cols-1 lg:grid-cols-2  gap-5 p-5 rounded-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <div className=''>
                                <label className='font-bold text-sky-800'>Name</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl" />
                                </div>
                            </div>
                            <div className=''>
                                <label className='font-bold text-sky-800'>Email</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <label className='font-bold text-sky-800'>Phone No</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl" />
                                </div>
                            </div>
                            <div className=''>
                                <label className='font-bold text-sky-800'>Full Name</label>
                                <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                    <input type='text' className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold text-sky-800'>Message</label>
                            <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                                <textarea className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
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