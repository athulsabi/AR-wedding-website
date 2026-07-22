"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* Background */}
      <Image
        src="/images/backgroundnew.png"
        alt="Wedding Background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-white/5" />

      {/* Card */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 py-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-md rounded-[42px]
          border border-white/60
          bg-[#FFFBF6]/90
          backdrop-blur-md
          shadow-[0_20px_70px_rgba(0,0,0,.15)]
          px-8 py-14"
        >

          {/* Heading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .15 }}
            className="text-center uppercase tracking-[6px] text-xs text-[#B58A56]"
          >
            With Grateful Hearts
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className="mt-5 text-center font-heading text-[56px] leading-none text-[#7A294E]"
          >
            Thank You
          </motion.h2>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .45 }}
            className="mt-8 text-center text-[20px] leading-9 text-[#6B503B]"
          >
            Your presence, love and blessings
            <br />
            mean the world to us.
          </motion.p>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .6 }}
            className="mt-10 text-center text-[18px] leading-9 text-[#6B503B]"
          >
            Thank you for celebrating this beautiful day with us.
            <br />
            We are grateful to begin this new chapter
            surrounded by the love, blessings and
            warm wishes of our family and friends.
          </motion.p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-12">

            <div className="h-px w-16 bg-[#D9B980]" />

            <span className="text-[#D9B980] text-lg">❀</span>

            <div className="h-px w-16 bg-[#D9B980]" />

          </div>

          {/* With Love */}
          <p className="mt-10 text-center uppercase tracking-[6px] text-xs text-[#B58A56]">
            With Love
          </p>

          {/* Couple Names */}
          <div className="mt-8 text-center">

            <h3 className="font-heading text-[54px] leading-tight text-[#7A294E]">
              Athul
            </h3>

            <p className="my-2 font-heading text-[34px] text-[#B58A56]">
              &
            </p>

            <h3 className="font-heading text-[54px] leading-tight text-[#7A294E]">
              Reshma
            </h3>

          </div>

          {/* Logo */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/Logo.png"
              alt="AR Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Bottom Divider */}
          <div className="mx-auto mt-12 h-px w-24 bg-[#D9B980]" />

          {/* Footer */}
          <p className="mt-8 text-center text-[15px] tracking-[2px] text-[#8C6A48]">
            Made with ❤️
          </p>

          <p className="mt-2 text-center text-sm italic text-[#9D7A58]">
            for our beloved family &amp; friends
          </p>

        </motion.div>

      </div>

    </section>
  );
}