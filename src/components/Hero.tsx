"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const destinations = [
  {
    name: "Paris",
    subtitle: "The city of love",
    image: "/paris-night.jpg",
    link: "#paris",
  },
  {
    name: "Kuala Lumpur",
    subtitle: "Twin Towers",
    image: "/twin-tower.jpg",
    link: "#kuala-lumpur",
  },
  {
    name: "Dubai",
    subtitle: "Burj Khalifa",
    image: "/burj-khalifa.jpg",
    link: "#dubai",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, 150]);
  const scaleParallax = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            style={{
              backgroundImage: `url(${destinations[currentSlide].image})`,
              y: yParallax,
              scale: scaleParallax,
            }}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="flex flex-wrap justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">TN</span>
            </div>
            <span className="text-white font-semibold text-base sm:text-lg">TripNest</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center bg-white/15 backdrop-blur-xl rounded-full px-2 py-2 space-x-1">
            {["Home", "Explore", "Experiences", "About Us", "Contact"].map((item, idx) => (
              <button
                key={idx}
                className={`px-6 lg:px-8 py-2.5 rounded-full text-sm lg:text-base font-medium transition ${
                  item === "Home"
                    ? "bg-cyan-500 text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Book Now */}
          <button className="hidden sm:flex px-6 sm:px-8 py-3 bg-white/15 backdrop-blur-xl rounded-full text-white font-medium hover:bg-white/25 transition space-x-2 items-center">
            <span>Book Now</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col-reverse lg:flex-row items-center px-6 sm:px-10 lg:px-16 pb-10 lg:pb-20">
          {/* Left Text */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-cyan-400">Luxury</span>{" "}
              <span className="text-white">Beyond Borders,</span>
              <br className="hidden sm:block" />
              <span className="text-cyan-400">Adventures</span>{" "}
              <span className="text-white">Beyond</span>
              <br className="hidden sm:block" />
              <span className="text-white">Imagination</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
              From iconic wonders to hidden treasures, discover curated
              experiences that redefine travel.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-4">
              <span className="text-white/70 text-sm sm:text-base">
                * Exclusive Destinations
              </span>
              <span className="text-white/70 text-sm sm:text-base">
                * Limited-Time Offers *
              </span>
            </div>

            <p className="text-white/70 text-xs sm:text-sm mb-8">
              24 September 2025
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-cyan-500 rounded-md text-white font-medium hover:bg-cyan-600 transition">
                Explore Destinations
              </button>
              <button className="px-6 py-3 bg-white/15 backdrop-blur-xl rounded-md text-white font-medium hover:bg-white/25 transition">
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Destination Cards */}
          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:space-x-4 mb-10 lg:mb-0">
            {destinations.map((dest, idx) => (
              <motion.a
                key={idx}
                href={dest.link}
                onClick={() => setCurrentSlide(idx)}
                className={`relative w-36 sm:w-40 md:w-44 h-60 sm:h-72 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-transform ${
                  currentSlide === idx ? "ring-2 ring-cyan-400" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ scale: 1.07 }}
              >
                <motion.img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <motion.div
                  className="absolute bottom-6 left-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-0.5">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-orange-400">{dest.subtitle}</p>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center space-x-2 pb-6">
          {destinations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all ${
                idx === currentSlide
                  ? "w-8 bg-white"
                  : "w-8 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
