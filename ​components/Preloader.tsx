"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Preloader ကြာချိန် 0.8 စက္ကန့်

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white"
        >
          {/* Animated Logo */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full flex items-center justify-center font-bold text-xl mb-4"
          >
            ABK
          </motion.div>
          <p className="text-sm font-semibold tracking-widest text-gray-300">
            Aung Bo Bo Kyaw
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
