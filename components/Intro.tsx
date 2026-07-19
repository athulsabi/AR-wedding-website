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
      <div className="relative z-10 text-center px-8 max-w-md pt-12 pb-20">

        {/* Invitation Message */}
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-12"
        >
        <h2 className="font-heading text-[34px] text-[#5B4030] mb-10">
            Together with our families,
        </h2>

        <div className="space-y-7 text-[18px] leading-9 text-[#5D4736] px-3">
            <p>
            With joyful hearts, we warmly invite you to join us as we celebrate
            our wedding and bless the beginning of our forever together.
            </p>

            <p>
            Your presence will make our special day even more meaningful.
            </p>
        </div>
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