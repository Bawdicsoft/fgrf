"use client";
// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// interface AnimatedComponentProps {
//   children: any;
// }

// const AnimatedComponentRight: React.FC<AnimatedComponentProps> = ({
//   children,
// }: {
//   children: any;
// }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     // rootMargin: '-50px 0px',
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         visible: { opacity: 1, x: 0 },
//         hidden: { opacity: 0, x: [150] },
//       }}
//       transition={{ duration: 1.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimatedComponentRight;

// import { motion, useAnimation, Variants } from "framer-motion";
// import { useMedia } from "react-use";
// import { useEffect } from "react";

// interface MyAnimatedComponentProps {
//   children: React.ReactNode;
// }

// const AnimatedComponentRight: React.FC<MyAnimatedComponentProps> = ({
//   children,
// }) => {
//   const controls = useAnimation();

//   const isExtraSmall = useMedia("(max-width: 576px)");
//   const isSmall = useMedia("(min-width: 577px) and (max-width: 768px)");
//   const isMedium = useMedia("(min-width: 769px) and (max-width: 992px)");
//   const isLarge = useMedia("(min-width: 993px) and (max-width: 1200px)");

//   const xVariants = (isDesktop: boolean, xValue: number): Variants => ({
//     hidden: { opacity: 0, x: [xValue] },
//     visible: { opacity: 1, x: 0 },
//   });

//   useEffect(() => {
//     if (isExtraSmall) {
//       controls.start(xVariants(false, 50));
//     } else if (isSmall) {
//       controls.start(xVariants(false, 100));
//     } else if (isMedium) {
//       controls.start(xVariants(true, 150));
//     } else if (isLarge) {
//       controls.start(xVariants(true, 200));
//     } else {
//       controls.start(xVariants(true, 250));
//     }
//   }, [isExtraSmall, isSmall, isMedium, isLarge, controls]);

//   return (
//     <motion.div
//       initial="hidden"
//       animate={controls}
//       variants={xVariants(true, 0)}
//       transition={{ duration: 1.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimatedComponentRight;

// new Code
import { motion, useAnimation, Variants } from "framer-motion";
import { useMedia } from "react-use";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface MyAnimatedComponentProps {
  children: React.ReactNode;
}

const AnimatedComponentRight: React.FC<MyAnimatedComponentProps> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const isExtraSmall = useMedia("(max-width: 576px)");
  const isSmall = useMedia("(min-width: 577px) and (max-width: 768px)");
  const isMedium = useMedia("(min-width: 769px) and (max-width: 992px)");
  const isLarge = useMedia("(min-width: 993px) and (max-width: 1200px)");

  const xVariants = (isDesktop: boolean, xValue: number): Variants => ({
    hidden: { opacity: 0, x: [xValue] },
    visible: { opacity: 1, x: 0 },
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    if (isExtraSmall) {
      controls.start(xVariants(true, 50));
    } else if (isSmall) {
      controls.start(xVariants(true, 100));
    } else if (isMedium) {
      controls.start(xVariants(true, 150));
    } else if (isLarge) {
      controls.start(xVariants(true, 200));
    } else {
      controls.start(xVariants(true, 250));
    }
  }, [inView, isExtraSmall, isSmall, isMedium, isLarge, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: [250] },
      }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponentRight;
