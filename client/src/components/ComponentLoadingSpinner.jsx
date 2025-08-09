import { motion } from "motion/react";

export default function ComponentLoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <motion.div
        className="text-8xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        🍲
      </motion.div>
      <p className="text-xl font-semibold text-gray-700 dark:text-white">
        Cooking up your recipes...
      </p>
    </div>
  );
}
