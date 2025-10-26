import { motion } from "framer-motion";

export default function DecorativeSidebars() {
  return (
    <>
      {/* Left Sidebar Decoration */}
      <div className="hidden xl:block fixed left-0 top-0 h-screen w-20 pointer-events-none z-50">
        <div className="relative h-full">
          {/* Elegant vertical line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
          
          {/* Decorative circles */}
          <motion.div
            className="absolute left-6 top-1/4 w-5 h-5 rounded-full border-2 border-primary/40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-7 top-1/2 w-3 h-3 rounded-full bg-primary/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute left-6 top-3/4 w-4 h-4 rounded-full border-2 border-primary/40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>

      {/* Right Sidebar Decoration */}
      <div className="hidden xl:block fixed right-0 top-0 h-screen w-20 pointer-events-none z-50">
        <div className="relative h-full">
          {/* Elegant vertical line with gradient */}
          <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
          
          {/* Decorative circles */}
          <motion.div
            className="absolute right-6 top-1/3 w-4 h-4 rounded-full bg-primary/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-7 top-1/2 w-5 h-5 rounded-full border-2 border-primary/40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute right-6 top-2/3 w-3 h-3 rounded-full bg-primary/40"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>
    </>
  );
}
