"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
    
          {/* Background */}
          <Image
            src="/images/backgroundnew.png"
            fill
            alt="Wedding Background"
            className="object-cover"
          />
    
          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-white/5" />
    
          {/* Content */}
          <div className="relative z-10 flex min-h-[100svh] items-center justify-center">
            <h2 className="font-heading text-5xl text-[#5C3A2B]">
              Our Story
            </h2>
          </div>
        </section>
      );
    }