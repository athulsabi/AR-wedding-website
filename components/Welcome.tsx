"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface WelcomeProps {
  onOpen: () => void;
}

export default function Welcome({ onOpen }: WelcomeProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="relative h-screen overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/background.webp"
        alt="Wedding Background"
        fill
        priority
        className="object-cover"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Ganapathi (Independent Layer) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/Ganapathi.png"
            alt="Lord Ganesha"
            width={72}
            height={72}
            className="drop-shadow-md"
          />
        </motion.div>

      </div>

      {/* Center Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-8 pt-20">

        <div className="w-full max-w-xs text-center -translate-y-4">

          {/* Wedding Invitation */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="uppercase tracking-[6px] text-[10px] text-[#7E6548]"
          >
            Wedding Invitation
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-16 h-px bg-[#B58A56] mx-auto mt-4 mb-6"
          />

          {/* Groom */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="font-heading text-[46px] leading-none text-[#5B4030]"
          >
            Athul
          </motion.h1>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="font-heading text-[42px] my-2 text-[#B58A56]"
          >
            &
          </motion.div>

          {/* Bride */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.2 }}
            className="font-heading text-[46px] leading-none text-[#5B4030]"
          >
            Reshma
          </motion.h1>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-3 text-lg font-medium tracking-wide text-[#8A6843]"
          >
            21 August 2026
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpen}
            className="mt-12 w-56 rounded-full border border-[#C7A46B] bg-white/70 backdrop-blur-md py-3 text-sm uppercase tracking-[3px] text-[#6F5136] shadow-[0_8px_25px_rgba(181,138,86,0.18)] transition-all duration-300 hover:bg-white/85"
          >
            Open Invitation
          </motion.button>

        </div>

      </div>
    </motion.section>
  );
}