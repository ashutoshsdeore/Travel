"use client";
import { motion } from "framer-motion";

const accommodations = [
  { name: "Resort", image: "resorts.jpg" },
  { name: "Villa", image: "villa.jpg" },
  { name: "Hotel", image: "hotels.jpg" },
];

const hotels = [
  { name: "Hotel", logo: "hotel.png" },
  { name: "Peter Laurence", logo: "peter.jpg" },
  { name: "Mountain Resort", logo: "resort.png" },
  { name: "The Hotel", logo: "thehotel.jpg" },
  { name: "Boutique", logo: "boutique.png" },
  { name: "Reviv", logo: "hidden.png" },
];

export default function PerfectStay() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Explore stays
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Your Perfect Stay Awaits!
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover curated accommodations designed for comfort and convenience
            at every location.
          </motion.p>

          {/* Scrolling Hotel Logos */}
          <div className="relative overflow-hidden mb-16">
            <motion.div
              className="flex gap-12 sm:gap-16 md:gap-20 animate-scroll px-4 sm:px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...hotels, ...hotels].map((hotel, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={hotel.logo}
                    alt={hotel.name}
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain opacity-85 hover:opacity-100 transition"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient edges for better visual fade */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Info + Images Section */}
          <div className="bg-gradient-to-br from-blue-50/60 to-cyan-50/40 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Images */}
              <motion.div
                className="grid grid-cols-2 gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                {accommodations.map((acc, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`relative overflow-hidden rounded-3xl shadow-md ${
                      idx === 0 ? "col-span-2 h-52 sm:h-64" : "h-36 sm:h-44"
                    }`}
                  >
                    <img
                      src={acc.image}
                      alt={acc.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xs sm:text-sm font-semibold text-cyan-600">
                  Together, We Make Travel Unforgettable
                </h3>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                  Plan Your Adventure With Us
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Every adventure is meticulously crafted for{" "}
                  <span className="text-cyan-600 font-medium cursor-pointer">
                    luxury
                  </span>
                  ,{" "}
                  <span className="text-cyan-600 font-medium cursor-pointer">
                    comfort
                  </span>{" "}
                  and{" "}
                  <span className="text-cyan-600 font-medium cursor-pointer">
                    unforgettable
                  </span>{" "}
                  experiences tailored to your journey.
                </p>

                {/* Features */}
                <div className="space-y-5">
                  {[
                    {
                      title: "Trust",
                      text: "Your journey is in safe hands — expertly planned, every step of the way.",
                    },
                    {
                      title: "Safety",
                      text: "Travel securely with our carefully curated experiences and trusted partners.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-3"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center mt-1">
                        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
