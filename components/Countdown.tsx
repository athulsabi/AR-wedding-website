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
    <section className="relative min-h-[100svh] overflow-hidden px-6 py-16">

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
          src="/images/backgroundnew.png"
          alt="Wedding Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/5" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-md text-center pt-20">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-xs text-[#9B7A54]"
        >
          We're Getting Married In
        </motion.p>

        <div className="w-24 h-px bg-[#C7A26A] mx-auto mt-6 mb-8" />

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
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="h-px w-16 bg-[#C7A26A]" />
          <span className="text-[#C7A26A] text-xl">❀</span>
          <div className="h-px w-16 bg-[#C7A26A]" />
        </div>

        {/* Date & Muhurtham */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="-mt-4"
        >
          <p className="font-heading text-[40px] font-medium tracking-[0.5px] text-[#5C3A2B]">
            21 August 2026
          </p>

          <p className="mt-4 font-heading text-[24px] font-normal tracking-[3px] text-[#9B7A54]">
            Muhurtham
          </p>

          <p className="mt-4 font-heading text-[24px] font-normal tracking-[3px] text-[#9B7A54]">
            10:05 AM – 10:25 AM
          </p>
        </motion.div>

      </div>

    </section>
  );
}