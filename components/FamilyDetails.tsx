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

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-xs text-[#9B7A54]">
            Together With
          </p>

          <h2 className="mt-4 font-heading text-[44px] leading-none text-[#5B4030]">
            Our Families
          </h2>

          <p className="mt-5 text-[17px] leading-8 text-[#6B503B]">
            We are blessed by the love,
            <br />
            guidance and support of our families.
          </p>
        </motion.div>

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
            Athul
          </h3>

          <p className="mt-7 text-center text-[#8B6A46]">
            Son of
          </p>

          <p className="mt-3 text-center text-[20px] leading-9 text-[#5B4030]">
            Sabi P
            <br />
            &
            <br />
            Animol K
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
            Reshma
          </h3>

          <p className="mt-7 text-center text-[#8B6A46]">
            Daughter of
          </p>

          <p className="mt-3 text-center text-[20px] leading-9 text-[#5B4030]">
            Sasidharan TS
            <br />
            &
            <br />
            Susheela R
          </p>
        </motion.div>

      </div>
    </section>
  );
}