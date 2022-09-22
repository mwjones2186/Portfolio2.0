import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../Componants/portfolioProjects.js";
import { wrap } from "popmotion";

const variants = {
  enter: (number) => {
    return {
      x: number > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (number) => {
    return {
      zIndex: 0,
      x: number < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const title = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: true ? 2.8 : 0 },
  },
});

const content = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Projects({ isFirstMount }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="projects"
      >
        {isFirstMount && <InitialTransition />}

        <motion.div
          initial="initial"
          animate="animate"
          variants={title(isFirstMount)}
          className="space-y-12"
        >
          <motion.h1 variants={title} className="project-page-title">
            Here are some of my projects!
          </motion.h1>
        </motion.div>
        <AnimatePresence
          initial={false}
          custom={direction}
          className="project-container"
        >
          <motion.img
            key={page}
            src={images[imageIndex].image}
            custom={direction}
            variants={content}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="animate-image"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
        <div></div>
        <h1 key={page} className="project-title">
          {images[imageIndex].title}
        </h1>
        <a className="project-repo" href={images[imageIndex].repo}>
          <i class="fab fa-github"></i>
        </a>
        <a className="project-deployed" href={images[imageIndex].deployed}>
          <i class="fab fa-chrome"></i>
        </a>
        <p className="project-program">
          Built with: {images[imageIndex].programmedWith}
        </p>
        <p className="project-description">
          Description: {images[imageIndex].description}
        </p>
      </motion.section>
    </>
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
      duration: 0.3,
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
      duration: 1.5,
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
