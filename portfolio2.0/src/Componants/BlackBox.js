import { motion } from "framer-motion";
export default function InitialTransition() {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
    >
      <motion.svg className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect className="w-full h-full text-gray-600 fill-current" />
        </pattern>
        <text
          className="text-4xl font-bold"
          text-anchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          THIS IS THE HOME PAGE
        </text>
      </motion.svg>
    </motion.div>
  );
}
