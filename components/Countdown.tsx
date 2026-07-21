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
    <section className="relative min-h-[100svh] overflow-hidden">

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
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-8 pb-16">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-md text-center -translate-y-10"
        >

          {/* Heading */}
          <p className="uppercase tracking-[5px] text-xs text-[#9B7A54]">
            We're Getting Married In
          </p>

          <div className="mx-auto mt-5 mb-8 h-px w-24 bg-[#C7A26A]" />

          {/* Countdown */}
          <div className="flex items-start justify-center gap-2">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Sec" },
            ].map((item, index) => (
              <div key={item.label} className="flex items-start">

                <div className="text-center">
                  <div className="text-[38px] font-semibold text-[#6A4332]">
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
          <div className="my-9 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#C7A26A]" />
            <span className="text-xl text-[#C7A26A]">❀</span>
            <div className="h-px w-16 bg-[#C7A26A]" />
          </div>

          {/* Date */}
          <p className="font-heading text-[42px] text-[#5C3A2B]">
            21 August 2026
          </p>

          {/* Time */}
          <p className="mt-3 font-heading text-[28px] tracking-[2px] text-[#9B7A54]">
            10:05 AM – 10:25 AM
          </p>

        </motion.div>

      </div>

    </section>
  );
}