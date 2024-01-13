"use client";
import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimationBottom from "./AnimationBtm";
import AnimatedComponentLeft from "./AnimationLeft";
import AnimatedComponentRight from "./AnimationRight";
import AnimationTop from "./AnimationTop";
import AnimatedNumberCounter from "./AnimationCounter";
const Together = () => {

  // for cardBLood
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // const mouseXSpring = useSpring(x);
  // const mouseYSpring = useSpring(y);

  // const rotateX = useTransform(
  //   mouseYSpring,
  //   [-1.5, 1.5],
  //   ["47.5deg", "-47.5deg"]
  // );
  // const rotateY = useTransform(
  //   mouseXSpring,
  //   [-1.5, 1.5],
  //   ["-47.5deg", "47.5deg"]
  // );
  // const handleMouseMove = (e:any) => {
  //   const rect = e.target.getBoundingClientRect();

  //   const width = rect.width;
  //   const height = rect.height;

  //   const mouseX = e.clientX - rect.left;
  //   const mouseY = e.clientY - rect.top;

  //   const xPct = mouseX / width - 0.5;
  //   const yPct = mouseY / height - 0.5;

  //   x.set(xPct);
  //   y.set(yPct);
  // };

  // const handleMouseLeave = () => {
  //   x.set(0);
  //   y.set(0);
  // };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-1, 1],
    [47.5, -47.5] // Adjusted the degree values
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-1, 1],
    [-47.5, 47.5] // Adjusted the degree values
  );

  const handleMouseMove = (e:any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // Adjusted the formula to get a full range from -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // Adjusted the formula to get a full range from -1 to 1

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  // yha tk
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const count1 = useMotionValue(0);
  const count = useMotionValue(0);
  const rounded1: any = useTransform(count1, Math.round);
  const rounded: any = useTransform(count, Math.round);

  useEffect(() => {
    const animations: any[] = [];
    if (inView) {
      animations.push(animate(count1, 2700000, { duration: 10 }));
      animations.push(animate(count, 54000, { duration: 10 }));
    }
    return () => {
      animations.forEach((animation) => animation.stop());
    };
  }, [count, count1, inView]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  
  // const [index, setIndex] = useState(0);
  // const items = [
    //   {
      //     id: 1,
  //     content: "3,24,000",
  //     data: "Planted",
  //   },
  //   {
  //     id: 2,
  //     content: "3,04,000",
  //     data: "Trees",
  //   },
  //   {
  //     id: 3,
  //     content: "3,00,000",
  //     data: "You",
  //   },
  // ];
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setIndex((state) => {
  //       if (state >= items.length - 1) return 0;
  //       return state + 1;
  //     });
  //   }, 2000);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <section>
      <div className=" h-[500px] relative " id="main">
        <div className="max-w-7xl mx-auto px-3 h-full">
          <div className="w-full mx-auto flex flex-col justify-center gap-4 pt-10 lg:pt-20">
            <div className="flex justify-center">
              <h2 className="max-w-5xl text-center lg:text-5xl leading-none font-normal md:text-3xl text-2xl text-white py-2">
                Changing the world is a big job. Lets do it together.
              </h2>
            </div>
            <div className="flex -ml-32 md:ml-0 justify-center pt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-3">
                <div className="relative w-32 lg:w-40 xl:w-60 z-50">
                  <AnimationTop>
                  <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="flex md:absolute  h-full w-full"
    > 
                     <Image
          style={{
            transform: "translateZ(25px)",
          }}
                        src={"/blood.png"}
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-full"
                      />
                    </motion.div>
                  </AnimationTop>
                  <AnimatedComponentLeft>
                    <div className="absolute top-5 -right-16 md:-right-12 lg:top-6 xl:top-12 lg:-right-12 xl:-right-5 flex flex-col lg:gap-3">
                      <span className="text-white font-semibold lg:text-lg">
                        {/* <Counter1>
                          <motion.h1>{rounded2}</motion.h1>;
                        </Counter1> */}
                         <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -20 },
        }}
        transition={{ duration: 2.5 }}
      >
        {rounded}
      </motion.div>
                      </span>
                      <span className="text-white font-semibold lg:text-lg">
                        Blood Bags
                      </span>
                    </div>
                  </AnimatedComponentLeft>
                </div>

                <div className="w-32 relative h-full md:h-[120px] xl:h-[180px]   lg:w-64 z-50 ">
                 
                  <AnimationBottom>
                       {/* new from here 13-1-2024 */}
                    
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="flex md:absolute  h-full w-full"
    > 
         <Image
          style={{
            transform: "translateZ(25px)",
          }}
                        src={"/tree1.png"}
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-full"
                      />
    </motion.div>
                   

                      {/* yeha tk */}
                  </AnimationBottom>
               
                  <AnimatedComponentRight>
                    <div className="absolute top-5 -right-20 md:-right-16 lg:top-6 xl:top-12 lg:-right-16 xl:-right-10 flex flex-col lg:gap-3">
                      <span className="text-white font-semibold lg:text-lg">
                      <motion.div
                          ref={ref}
                          initial="hidden"
                          animate={controls}
                          variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: [-20] },
                          }}
                          transition={{ duration: 2.5 }}
                        >
  
                          {rounded1}
                        </motion.div>
                      </span>
                      <span className="text-white font-semibold lg:text-lg">
                        Planted Trees
                      </span>
                    </div>
                  </AnimatedComponentRight>
                
                </div>
              </div>
            </div>
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
            className="absolute animate-pulse opacity-30 maskAnimation bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
            style={{ backgroundImage: `url(/img/mask1.svg)` }}
          ></div>
          <div
            className="absolute animate-pulse opacity-40 maskAnimation2 bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
            style={{ backgroundImage: `url(/img/mask2.svg)` }}
          ></div>
          <div
            className="absolute animate-pulse opacity-5 bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
            style={{ backgroundImage: `url(/img/mask3.svg)` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default Together;
