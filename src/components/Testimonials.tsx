"use client";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    location: "London",
    rating: "4.5",
    review:
      "Amazing experience! Every destination exceeded expectations. Highly recommended!",
  },
  {
    name: "Jane Smith",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    location: "New York",
    rating: "4.9",
    review:
      "TripNest took care of everything from flights to stays — all seamless and stress-free!",
  },
  {
    name: "Peter Patrick",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    location: "Hyderabad",
    rating: "4.8",
    review:
      "Every detail of our trip was perfectly planned. Truly unforgettable!",
  },
  {
    name: "Emma Davis",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    location: "Paris",
    rating: "4.7",
    review:
      "From luxury to comfort, the entire experience felt tailor-made. Beautiful memories!",
  },
  {
    name: "Mike Wilson",
    avatar:
      "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200",
    location: "Dubai",
    rating: "5.0",
    review:
      "Exceptional service and unforgettable adventures. Can’t wait for the next trip!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500); // Slightly slower for readability
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-3">
            Loved By Travelers Worldwide
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover why our journeys leave lasting impressions across the globe.
          </p>
        </div>

        {/* Avatar Animation */}
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-10">
          {testimonials.map((t, idx) => {
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isActive ? 1.2 : 0.9,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 ${
                    isActive ? "border-cyan-400" : "border-white"
                  } shadow-md`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Animated Testimonial Card */}
        <div className="relative max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-cyan-100"
            >
              <Quote className="absolute -left-6 top-6 w-8 h-8 sm:w-10 sm:h-10 text-cyan-200" />
              <Quote className="absolute -right-6 bottom-6 w-8 h-8 sm:w-10 sm:h-10 rotate-180 text-cyan-200" />

              <h4 className="text-base sm:text-lg font-bold text-gray-900">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">
                {testimonials[activeIndex].location}
              </p>

              <div className="flex justify-center items-center space-x-1 mb-3 sm:mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-gray-700 text-sm font-medium">
                  {testimonials[activeIndex].rating}
                </span>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                {testimonials[activeIndex].review}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 shadow-sm mt-16 p-6 sm:p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-600 mb-2">
            Connect With Our Travel Experts
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Start your next journey with expert guidance and curated experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-600 text-sm font-medium hover:bg-cyan-50 transition">
              Message our travel experts
            </button>
            <button className="px-6 py-3 rounded-full bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 transition">
              Reach Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
