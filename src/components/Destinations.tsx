"use client";
import { motion } from "framer-motion";
import React from "react";

interface Destination {
  name: string;
  visits: string;
  image: string;
  size: string;
}

const destinations: Destination[] = [
  { name: "London", visits: "902 visits", image: "london.jpg", size: "h-44 md:h-52 lg:h-56" },
  { name: "United States", visits: "892 visits", image: "US.jpg", size: "h-56 md:h-64 lg:h-72" },
  { name: "Maldives", visits: "2,304 visits", image: "maldives.jpg", size: "h-72 md:h-80 lg:h-96" },
  { name: "Thailand", visits: "1,204 visits", image: "Thailand.jpg", size: "h-56 md:h-64 lg:h-72" },
  { name: "Switzerland", visits: "985 visits", image: "switherland.jpg", size: "h-44 md:h-52 lg:h-56" },
];

export default function Destinations(): React.JSX.Element {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore The{" "}
          <span className="text-cyan-500">World&apos;s Finest</span>{" "}
          Destinations
        </motion.h2>

        {/* Destination Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              className="w-36 sm:w-44 md:w-52 lg:w-56 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <motion.div
                className={`w-full ${dest.size} overflow-hidden rounded-3xl shadow-md`}
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>

              {/* Text */}
              <div className="mt-3 sm:mt-4">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  {dest.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">{dest.visits}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
