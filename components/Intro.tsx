"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/backgroundnew.png"
        fill
        alt="Wedding Background"
        priority={false}
        className="object-cover"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-md pt-24 pb-20">

        {/* Groom */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-[58px] text-[#5B4030]"
        >
          Athul
        </motion.h2>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-heading text-[40px] text-[#B58A56] my-3"
        >
          &
        </motion.div>

        {/* Bride */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-[58px] text-[#5B4030]"
        >
          Reshma
        </motion.h2>

        {/* Invitation Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 space-y-5 text-[18px] leading-9 text-[#5D4736]"
        >
          <p>Together with our families</p>

          <p>We warmly invite you</p>

          <p>to celebrate our wedding</p>

          <p>and bless our new beginning.</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 animate-bounce"
        >
          <p className="uppercase tracking-[5px] text-xs text-[#8A6843]">
            Scroll
          </p>

          <p className="text-2xl mt-2 text-[#8A6843]">
            ↓
          </p>
        </motion.div>

      </div>
    </section>
  );
}