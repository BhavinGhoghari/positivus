import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus has transformed our marketing strategy! We’ve seen huge growth in engagement and conversions. Their team really goes above and beyond.",
    name: "Jane Doe",
    role: "Head of Marketing at ABC Ltd",
  },
  {
    quote:
      "Amazing experience working with Positivus. They helped us scale quickly and effectively, always available when needed.",
    name: "Michael Brown",
    role: "CEO at Startup Co",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-normal rounded-md border border-[#B9FF66] bg-[#B9FF66] px-3 py-2">
            Testimonials
          </h2>
          <p className="w-full md:w-[465px] font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed text-black">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        {/* Testimonials */}
        <div className="w-full h-[500px] mt-12 rounded-[45px] bg-[#191A23] text-white flex flex-col justify-between px-6 sm:px-8 py-10 relative overflow-hidden">
          <motion.div
            animate={{
              x: isMobile ? -current * 320 : -current * 580, // slide one card width on mobile
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`flex ${
              isMobile ? "flex-row" : "flex-col sm:flex-row"
            } gap-6 justify-center`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`min-w-[280px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[550px]
                  max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px]
                  flex-shrink-0 transition-all duration-300 ${
                    current === index
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-70"
                  }`}
              >
                <div className="relative bg-[#292A32] border border-[#B9FF66] text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                  <p className="text-sm sm:text-base leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <div className="absolute -bottom-3 left-8 sm:left-12 w-5 h-5 bg-[#292A32] border-r border-b border-[#B9FF66] rotate-45"></div>
                </div>

                <div className="mt-4 sm:mt-6 ml-4 sm:ml-14 text-center sm:text-left">
                  <p className="text-[#B9FF66] font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-12">
            <button onClick={prevSlide} className="p-2 hover:opacity-80">
              <ChevronLeft className="w-7 h-7 text-gray-300" />
            </button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="p-1"
                >
                  {current === index ? (
                    <CircleDot className="w-5 h-5 text-[#B9FF66]" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              ))}
            </div>

            <button onClick={nextSlide} className="p-2 hover:opacity-80">
              <ChevronRight className="w-7 h-7 text-gray-300" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
