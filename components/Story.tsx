"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative min-h-[190svh] overflow-hidden">

      {/* Background */}
      <motion.div
        animate={{ scale: 1.04 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/backgroundnew.png"
          alt="Wedding Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/5" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center px-8 py-24 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading text-[42px] text-[#5B4030]"
        >
          Our Story
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mt-6 mb-20"
        >
          <div className="h-px w-16 bg-[#C7A26A]" />
          <span className="text-[#C7A26A] text-xl">❀</span>
          <div className="h-px w-16 bg-[#C7A26A]" />
        </motion.div>

        {/* Intro Quote */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading text-[34px] leading-relaxed text-[#5C3A2B]"
        >
          Every love story is beautiful,
          <br />
          but ours is our favorite.
        </motion.p>

        {/* Paragraph 1 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-36"
        >
          <p className="leading-9 text-[18px] text-[#5D4736]">
            By God's grace and the blessings of our families,
            our paths crossed when we least expected it.
            What began as a simple conversation slowly
            blossomed into friendship, understanding,
            and a love that continues to grow every day.
          </p>
        </motion.div>

        {/* Paragraph 2 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40"
        >
          <p className="leading-9 text-[18px] text-[#5D4736]">
            Through every smile, every challenge,
            and every cherished moment,
            we discovered that home is not a place—
            it is wherever we are together.
          </p>
        </motion.div>

        {/* Paragraph 3 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40"
        >
          <p className="leading-9 text-[18px] text-[#5D4736]">
            Now, as we begin this beautiful new chapter,
            we would be truly honored to celebrate
            our special day with the people
            who have supported, encouraged,
            and loved us throughout our journey.
          </p>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-44"
        >
          <p className="font-heading text-[32px] text-[#B58A56]">
            And so our forever begins...
          </p>
        </motion.div>

      </div>

    </section>
  );
}