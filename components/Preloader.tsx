"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 360] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl border-4 border-blue-500 border-t-transparent flex items-center justify-center font-black text-lg mb-4"
          >
            ABK
          </motion.div>
          <p className="text-sm font-semibold tracking-widest text-slate-300">Aung Bo Bo Kyaw</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
