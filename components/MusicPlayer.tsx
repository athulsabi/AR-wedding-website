"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  isPlaying: boolean;
}

export default function MusicPlayer({ isPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(isPlaying);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current
        .play()
        .catch((err) => console.log("Autoplay prevented:", err));
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/WeddingMusic.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.6 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setPlaying(!playing)}
        className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-white bg-[#CFA64D] text-white shadow-xl"
      >
        {playing ? (
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <Music size={30} />
          </motion.div>
        ) : (
          <Pause size={30} />
        )}
      </motion.button>
    </>
  );
}