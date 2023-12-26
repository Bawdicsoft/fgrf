"use client";
import { useState } from 'react';
import ModelCanvas from "@/components/3dModel/ModelCanvas";
import { FullPageLoader } from '@/components/3dModel/fullPageLoader';
import Achievement from "@/components/home/Achievement";
import Donation from "@/components/home/Donation";
import Hero from "@/components/home/Hero";
import Section2 from "@/components/home/Section2";
import Together from "@/components/home/Together";




export default function Home() {
  const [isModelLoading, setIsModelLoading] = useState(true);

  const handleModelLoaded = () => {
    setIsModelLoading(false); 
  };
  return (
    <>
     {isModelLoading && <FullPageLoader />}
      <div className="relative">
        <div className="fixed top-[80%] right-[3%] z-50 flex flex-col items-center">
          <img
            src="/img/center-lg.png"
            className="w-10 animate-bounce"
            alt=""
          />
          <button className="bg-[#1eb1af] text-white text-sm px-2 py-1 rounded-lg">
            Donate Now
          </button>
        </div>
        <Hero />
        <Section2 />
        <div className="relative">
          <Donation />
          <ModelCanvas onModelLoaded={handleModelLoaded}
          />
        </div>
        {/* <OurProject />s */}
        <Achievement />
        <Together />
        {/* <BackgroundCanvas /> */}
        {/*<ThreadsParticles />*}
        {/* <div className="gradiant-bg w-full h-screen z-[-3] fixed top-0 left-0"></div> */}
      </div>
    </>
  );
}
