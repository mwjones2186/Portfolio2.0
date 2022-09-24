import { useState } from "react";
import { motion } from "framer-motion";

const content = (isFirstMount) => ({
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
    },
  });

export default function Thanks ({isFirstMount}) {
    return (
        
    )
}