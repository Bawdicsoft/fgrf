import Link from 'next/link';
import React from 'react';
import NewsSlider from './NewsSlider';
import ContactUs from './Contactus';


const NewsSection: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-sky-600 via-sky-900 to-sky-600 py-20">
            <div className='flex flex-col justify-center items-center px-5'>
                <h2 className='text-white text-4xl font-bold py-5'>News</h2>
                <div className='bg-white grid grid-cols-1 lg:grid-cols-4 max-w-5xl gap-5 p-5 rounded-lg'>
                    <div className='flex flex-col justify-evenly'>
                        <div>
                            <iframe className="w-full aspect-video " src="/video/v2.mp4"></iframe>
                        </div>
                        <div>
                            <iframe className="w-full aspect-video " src="/video/v2.mp4"></iframe>
                        </div>
                    </div>
                    <div className='col-span-2 h-[360px]'>
                        <iframe className="w-full h-full aspect-video " src="/video/v2.mp4"></iframe>

                    </div>
                    <div className='flex flex-col justify-evenly'>
                        <div>
                            <iframe className="w-full aspect-video " src="/video/v2.mp4"></iframe>
                        </div>
                        <div>
                            <iframe className="w-full aspect-video " src="/video/v2.mp4"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider */}
            <div className='flex justify-center items-center'>
                <div className='max-w-5xl'>
                    <NewsSlider />

                </div>
            </div>
            {/* contact us */}
            <div className='flex justify-center items-center'>
                <div className='max-w-5xl'>
                    <ContactUs />

                </div>
            </div>
        </section>
    );
};
export default NewsSection;