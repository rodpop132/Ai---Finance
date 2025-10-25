"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

const PHRASES = [
  "Aquecendo o amor...",
  "Preparando suas receitas de conexão...",
  "Pronto para reacender sentimentos reais?"
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const phraseTimer = window.setInterval(() => {
      setPhraseIndex((index) => (index + 1) % PHRASES.length);
    }, 1500);

    const redirectTimer = window.setTimeout(onComplete, 3000);

    return () => {
      window.clearInterval(phraseTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [onComplete]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B1220] text-text">
      <motion.div
        className="relative flex h-24 w-full max-w-xs items-center justify-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/30 blur-[60px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        />
        <motion.svg
          viewBox="0 0 24 24"
          className="h-20 w-20 text-primary"
          initial={{ x: -32, scale: 0.9, opacity: 0.8 }}
          animate={{
            x: [ -32, -8, 0, -6, 0 ],
            scale: [0.9, 1.05, 1],
            opacity: 1
          }}
          transition={{
            duration: 2,
            ease: [0.2, 0.8, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
            11.54L12 21.35z"
          />
        </motion.svg>
        <motion.svg
          viewBox="0 0 24 24"
          className="h-16 w-16 text-secondary"
          initial={{ x: 32, scale: 0.9, opacity: 0.75 }}
          animate={{
            x: [32, 6, 0, 4, 0],
            scale: [0.9, 1.08, 1],
            opacity: 1
          }}
          transition={{
            duration: 2,
            ease: [0.2, 0.8, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
            11.54L12 21.35z"
          />
        </motion.svg>
      </motion.div>

      <motion.p
        key={phraseIndex}
        className="mt-10 text-center text-lg font-medium sm:text-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {PHRASES[phraseIndex]}
      </motion.p>

      <div className="mt-12 h-[3px] w-64 overflow-hidden rounded-full bg-white/10 sm:w-80">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default LoadingScreen;
