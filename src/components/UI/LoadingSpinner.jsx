import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div
      className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-500"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
    />
  );
}
