"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Adventure {
  location: string;
  price: string;
  image: string;
}

const adventures: Adventure[] = [
  { location: "Bali, Indonesia", price: "$2,800", image: "Bali.jpg" },
  { location: "London", price: "$3,200", image: "londonn.jpg" },
  { location: "Bangkok, Thailand", price: "$1,800", image: "bangkok.jpg" },
  { location: "Singapore", price: "$2,800", image: "singapore.jpg" },
  { location: "Dubai", price: "$2,500", image: "dubai.jpg" },
  { location: "New York", price: "$3,800", image: "newyork.jpg" },
];

export default function EpicAdventures(): React.JSX.Element {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 border border-cyan-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-56 sm:w-72 lg:w-96 h-56 sm:h-72 lg:h-96 border border-cyan-200 rounded-full opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-500 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Best Deals
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Epic Adventures, Exclusive Price
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Handpicked experiences crafted for travelers who value both luxury and value
        </motion.p>

        {/* Explore Button */}
        <motion.div
          className="flex justify-center sm:justify-end mb-10 max-w-7xl mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <button className="flex items-center space-x-3 text-cyan-500 hover:text-cyan-600 transition group">
            <span className="font-semibold text-sm sm:text-base">Explore more</span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-500 flex items-center justify-center group-hover:bg-cyan-600 transition">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </button>
        </motion.div>

        {/* Adventure Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {adventures.map((adventure, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-3xl h-64 sm:h-72 lg:h-80 cursor-pointer bg-white shadow-md hover:shadow-xl transition-all"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <motion.img
                src={adventure.image}
                alt={adventure.location}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Text and Button */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">
                    {adventure.location}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90">
                    {adventure.price} + taxes
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-600 transition shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
