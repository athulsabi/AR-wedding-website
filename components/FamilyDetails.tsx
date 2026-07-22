"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FamilyDetails() {
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

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-md flex-col justify-center px-8 py-24">

        

        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 rounded-[34px] border border-[#E7D6BC] bg-white/70 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-md"
        >
          <p className="text-center uppercase tracking-[4px] text-xs text-[#B58A56]">
            The Groom
          </p>

          <h3 className="mt-5 text-center font-heading text-[42px] text-[#5B4030]">
            Athul S
          </h3>

          <p className="mt-7 text-center text-[#8B6A46]">
            Son of
          </p>

          <p className="mt-3 text-center text-[20px] leading-9 text-[#5B4030]">
            Mr. Sabi P
            <br />
            &
            <br />
            Mrs. Animol K
          </p>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-[34px] border border-[#E7D6BC] bg-white/70 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-md"
        >
          <p className="text-center uppercase tracking-[4px] text-xs text-[#B58A56]">
            The Bride
          </p>

          <h3 className="mt-5 text-center font-heading text-[42px] text-[#5B4030]">
            Reshma TS
          </h3>

          <p className="mt-7 text-center text-[#8B6A46]">
            Daughter of
          </p>

          <p className="mt-3 text-center text-[20px] leading-9 text-[#5B4030]">
            Mr. Sasidharan T
            <br />
            &
            <br />
            Mrs. Suseela R
          </p>
        </motion.div>

      </div>
    </section>
  );
}