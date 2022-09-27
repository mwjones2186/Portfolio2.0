import { useState } from "react";
import { motion } from "framer-motion";

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const aboutTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const aboutH2 = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const aboutP = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 2.0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const aboutBtn = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 2.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function About({ isFirstMount }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isFirstMount && <InitialTransition />}

      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        className="space-y-12"
      ></motion.div>

      <motion.div
      initial="false"
      >
        <motion.h1
          variants={aboutTitle}
          className="text-6xl font-black text-center"
        >
          This is my about page
        </motion.h1>
      </motion.div>

      <motion.div>
        <motion.h2
          variants={aboutH2}
          className="text-6xl font-black text-center"
        >
          My Life!
        </motion.h2>
      </motion.div>

      <motion.div>
        <motion.p variants={aboutP} className="text-6xl font-black text-center">
          I like my family!
        </motion.p>
        <motion.button
          variants={aboutBtn}
          className="text-6xl font-black text-center"
        >
          Click to see my resume
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

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

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
function InitialTransition() {
  useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          This is The Home Page
        </text>
      </motion.svg>
    </motion.div>
  );
}
