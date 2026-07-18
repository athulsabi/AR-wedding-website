"use client";

import { motion } from "motion/react";

const petals = [
  { left: "10%", delay: 0 },
  { left: "30%", delay: 2 },
  { left: "55%", delay: 4 },
  { left: "75%", delay: 1 },
  { left: "90%", delay: 3 },
];

export default function FloatingPetals() {
  return (
    <>
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          initial={{
            y: -100,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: petal.left,
            top: 0,
            fontSize: "18px",
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}