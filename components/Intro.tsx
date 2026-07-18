"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/images/background.webp"
        alt="Background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 text-center px-8 max-w-md">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="font-heading text-[58px] text-[#503B2B]"
        >
          Athul
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="text-4xl text-[#B58A56] my-2"
        >
          &
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="font-heading text-[58px] text-[#503B2B]"
        >
          Reshma
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-12 space-y-4 text-[18px] leading-9 text-[#5D4736]"
        >
          <p>Together with our families</p>

          <p>We warmly invite you</p>

          <p>to celebrate our wedding</p>

          <p>and bless our new beginning.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 animate-bounce"
        >
          <p className="uppercase tracking-[5px] text-xs text-[#8A6843]">
            Scroll
          </p>

          <p className="text-2xl mt-2 text-[#8A6843]">↓</p>
        </motion.div>

      </div>

    </section>
  );
}