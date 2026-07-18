"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface WelcomeProps {
  onOpen: () => void;
}

export default function Welcome({ onOpen }: WelcomeProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background */}
      <Image
        src="/images/backgroundnew.png"
        alt="Wedding Background"
        fill
        priority
        className="object-contain bg-[#f8f3eb]"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center">

        {/* Ganapathi */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="pt-10"
        >
          <Image
            src="/images/ganapathi.png"
            alt="Lord Ganesha"
            width={85}
            height={85}
            priority
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="mt-8 w-full max-w-xs text-center px-6"
        >
          {/* Wedding Invitation */}
          <p className="uppercase tracking-[7px] text-[10px] text-[#7E6548]">
            Wedding Invitation
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-[#B58A56] mx-auto mt-4 mb-8" />

          {/* Groom */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-heading text-[46px] leading-none text-[#5B4030]"
          >
            Athul
          </motion.h1>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-heading text-[36px] my-3 text-[#B58A56]"
          >
            &
          </motion.div>

          {/* Bride */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="font-heading text-[46px] leading-none text-[#5B4030]"
          >
            Reshma
          </motion.h1>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-5 text-[18px] font-semibold text-[#8A6843]"
          >
            21 August 2026
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpen}
            className="mt-10 mx-auto w-64 rounded-full border border-[#C7A46B] bg-white/65 backdrop-blur-md py-3 text-sm uppercase tracking-[4px] text-[#6F5136] shadow-[0_8px_20px_rgba(181,138,86,0.18)] transition-all duration-300 hover:bg-white/80"
          >
            Open Invitation
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}