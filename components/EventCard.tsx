"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EventCardProps {
  tag: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapLink: string;
}

export default function EventCard({
  tag,
  title,
  description,
  date,
  time,
  venue,
  address,
  mapLink,
}: EventCardProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden px-5 py-20">

      {/* Background */}
      <Image
        src="/images/backgroundnew.png"
        alt="Wedding Background"
        fill
        className="object-cover"
        priority={false}
      />

      <div className="absolute inset-0 bg-white/5" />

      {/* Card */}
      <div className="relative z-10 mx-auto max-w-md">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            rounded-[42px]
            border border-[#E8D9BB]
            bg-[#FFFDF9]/70
            backdrop-blur-md
            shadow-[0_20px_60px_rgba(100,70,40,.15)]
            overflow-hidden
            p-7
          "
        >

          {/* Event Tag */}
          <p className="mt-10 text-center uppercase tracking-[8px] text-xs text-[#B6924F]">
            {tag}
          </p>

          {/* Title */}
          <h2 className="mt-3 text-center font-heading text-[56px] leading-none text-[#7A2F4D]">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-8 text-center text-[18px] leading-10 text-[#555555]">
            {description}
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-10">
            <div className="h-px w-16 bg-[#D2B36B]" />
            <span className="text-[#D2B36B] text-xl">❀</span>
            <div className="h-px w-16 bg-[#D2B36B]" />
          </div>

          {/* Date */}
          <p className="text-center font-heading text-[42px] text-[#7A2F4D]">
            {date}
          </p>

          {/* Time */}
          <p className="mt-4 text-center font-heading text-[28px] text-[#6F6F6F]">
            {time}
          </p>

          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-20 bg-[#D2B36B]" />

          {/* Venue */}
          <h3 className="mt-10 text-center font-heading text-[40px] leading-tight text-[#7A2F4D]">
            {venue}
          </h3>

          {/* Address */}
          <p className="mt-6 text-center text-[20px] leading-10 text-[#666666] whitespace-pre-line">
            {address}
          </p>

          {/* Location Button */}
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: .98,
            }}
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-12
              flex
              h-16
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#D5AF38]
              text-white
              text-xl
              font-semibold
              shadow-xl
            "
          >
            View Location
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}