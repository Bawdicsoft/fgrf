'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Form from '@/components/home/Form';

const Together = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {
      id: 1,
      content: '3,24,000',
      data: 'Planted',
    },
    {
      id: 2,
      content: '3,04,000',
      data: 'Trees',
    },
    {
      id: 3,
      content: '3,00,000',
      data: 'You',
    },
  ];
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section>
      <div className=" h-[500px] relative " id="main">
        <div className="max-w-7xl mx-auto px-3 h-full">
          <div className="w-full mx-auto flex flex-col justify-center gap-4 pt-10 lg:pt-20">
            <h2 className="text-center lg:text-5xl leading-none font-normal md:text-3xl text-2xl text-white py-2">
              Changing the world is a big job. Lets do it together.
            </h2>
            {/* <div className="flex justify-center gap-4 flex-col items-center md:flex-row mt-3 md:mt-8">
              {items.map((data: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="w-48 h-[70px] font-bold relative py-2 flex justify-center  border-4 border-[#faf8f8] shadow-inner bg-[#efeff1] text-black rounded-full border-y-4 border-x-8 lg:flex lg:items-center lg:flex-col"
                  >
                    <AnimatePresence>
                      <motion.div
                        key={items[index].id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ ease: 'easeInOut' }}
                        style={{ position: 'absolute' }}
                      >
                        <p className="text-center">{data.content}</p>
                        <p className="text-center">{data.data}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div
            className="absolute maskAnimation bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover z-[3]"
            style={{ backgroundImage: `url(/img/mask1.svg)` }}
          ></div>
          <div
            className="absolute maskAnimation2 bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover z-[3]"
            style={{ backgroundImage: `url(/img/mask2.svg)` }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover z-[3]"
            style={{ backgroundImage: `url(/img/mask3.svg)` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default Together;
