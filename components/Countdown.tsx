"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const weddingDate = new Date("2026-08-21T10:05:00");

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor(
        (difference % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-20">

      {/* Background */}
      <motion.div
        animate={{ scale: 1.05 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/background.webp"
          alt="Wedding Background"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-xs text-[#9B7A54]"
        >
          Our Wedding Begins In
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 font-heading text-5xl text-[#5C3A2B]"
        >
          Countdown
        </motion.h2>

        <div className="w-24 h-px bg-[#C7A26A] mx-auto mt-6 mb-10" />

        {/* Countdown */}
        <div className="flex justify-center items-start gap-2">

          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Sec" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex items-start"
            >
              <div className="text-center">

                <div className="text-4xl font-semibold text-[#6A4332]">
                  {String(item.value).padStart(2, "0")}
                </div>

                <p className="mt-1 text-[10px] uppercase tracking-[2px] text-[#8D6A52]">
                  {item.label}
                </p>

              </div>

              {index !== 3 && (
                <div className="mx-2 mt-1 text-3xl font-light text-[#C7A26A]">
                  :
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-14">
          <div className="h-px w-16 bg-[#C7A26A]" />
          <span className="text-[#C7A26A] text-xl">❀</span>
          <div className="h-px w-16 bg-[#C7A26A]" />
        </div>

        {/* Date */}
        <h3 className="font-heading text-3xl text-[#5C3A2B]">
          21 August 2026
        </h3>

        <p className="mt-3 uppercase tracking-[3px] text-[#9B7A54]">
          10:05 AM – 10:25 AM
        </p>

        {/* Venue */}
        <div className="mt-10 space-y-3">

          <h4 className="text-2xl font-medium text-[#5C3A2B]">
            Padinjare Madom
          </h4>

          <p className="leading-8 text-[#6A4332]">
            Sree Guruvayoorappan Temple
            <br />
            Pattambi, Palakkad
          </p>

        </div>

      </div>

    </section>
  );
}