"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-700 py-8 sm:py-12 min-h-[150px] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-8 sm:gap-10">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Side - Logo + Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm sm:text-base font-bold">TripNest</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xs sm:max-w-sm">
              Curated journeys, expert planning, and unforgettable experience
            </p>
          </motion.div>

          {/* Right Side - Nav Links */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-5 mt-4 md:mt-0 text-xs sm:text-sm font-medium text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["Explore", "Discover", "FAQs", "About Company", "Contact"].map((link, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, color: "#000" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ✅ Your exact untouched motion.h1 */}
        <motion.h1
          className="absolute inset-0 flex items-center justify-center
          text-[28px] sm:text-[44px] md:text-[64px] lg:text-[80px]
          font-bold text-blue-100 select-none leading-none pointer-events-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          TripNest
        </motion.h1>

        {/* Decorative Images */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side images */}
          <div className="flex flex-row sm:flex-col gap-3 sm:gap-4">
            {[
              { src: "beach.jpg", alt: "Beach", w: "w-20 sm:w-24 h-14 sm:h-16" },
              { src: "tower.jpg", alt: "Tower", w: "w-16 sm:w-20 h-24 sm:h-28" },
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`${img.w} rounded-md overflow-hidden shadow-md`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Right side images */}
          <div className="flex flex-row sm:flex-col gap-3 sm:gap-4">
            {[
              { src: "castle.jpg", alt: "Castle", w: "w-24 sm:w-28 h-14 sm:h-16" },
              { src: "building.jpg", alt: "Building", w: "w-20 sm:w-24 h-14 sm:h-16" },
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`${img.w} rounded-md overflow-hidden shadow-md`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mt-6 text-center md:text-left gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 TripNest All Rights Reserved
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-5 text-xs sm:text-sm text-gray-600 font-medium">
            {["Instagram", "Youtube", "Facebook", "Twitter", "LinkedIn"].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, color: "#000" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
