import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Illustration from "../../assets/Illustration.svg";
import icon from "../../assets/Icon.png";
import amazon from "../../assets/amazon.svg";
import zoom from "../../assets/zoom.svg";
import dribble from "../../assets/dribble.svg";
import hubspot from "../../assets/hubspot.svg";
import netflix from "../../assets/netflix.svg";
import notion from "../../assets/notion.svg";

const images = [amazon, dribble, hubspot, notion, netflix, zoom];

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 lg:px-20 py-4 relative">
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <img src={icon} alt="Positivus" className="w-7 h-7" />
            Positivus
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#" className="hover:text-green-500 transition">
              About us
            </a>
            <a href="#" className="hover:text-green-500 transition">
              Services
            </a>
            <a href="#" className="hover:text-green-500 transition">
              Use Cases
            </a>
            <a href="#" className="hover:text-green-500 transition">
              Pricing
            </a>
            <a href="#" className="hover:text-green-500 transition">
              Blog
            </a>
          </nav>
          <button className="hidden md:block border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
            Request a quote
          </button>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-6 text-lg z-50">
              <a
                href="#"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                About us
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Use Cases
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <button className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
                Request a quote
              </button>
            </div>
          )}
        </header>
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-20 py-16">
          <div>
            <h1 className="font-medium text-[60px] leading-[100%] tracking-[0]">
              Navigating the <br />
              digital landscape <br />
              for success
            </h1>
            <p className="font-normal text-[20px] leading-[28px] tracking-[0]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:[#B9FF66] transition">
              Book a consultation
            </button>
          </div>

          {/* Right Side Illustration with Icons */}
          <div className="relative mt-10 md:mt-0  flex items-center justify-center">
            {/* <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
              className="w-99 h-99 rounded-full flex items-center justify-center"
            > */}
            <div className=" flex items-center justify-center">
              <img src={Illustration} alt="Speaker" className="w-full h-full" />
            </div>
            {/* </motion.div> */}
            {/* Megaphone */}
            {/* <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
                className="relative z-10 w-90 h-90 flex items-center justify-center"
              >
                <img src={speaker} alt="Speaker" className="w-full h-full" />
              </motion.div>
            </div> */}

            {/* Floating Icons */}
            {/* Heart */}
            {/* <motion.div
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: -15, rotate: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
              className="absolute top-12 right-28 w-14 h-14 rounded-full border-2 border-black bg-black flex items-center justify-center"
            >
              <Heart
                className="w-8 h-8"
                stroke="black"
                fill="white"
                strokeWidth={2}
              />
            </motion.div> */}
            {/* Share */}
            {/* <motion.div
              initial={{ y: 0 }}
              animate={{ y: -15 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                delay: 0.3,
              }}
              className="absolute top-20 right-6 w-14 h-14 rounded-full border-2 border-[#B9FF66] bg-[#B9FF66] flex items-center justify-center"
            >
              <Share2 className="w-6 h-6" fill="black" strokeWidth={2} />
            </motion.div> */}
            {/* Play */}
            {/* <motion.div
              initial={{ y: 0 }}
              animate={{ y: -15 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                delay: 0.6,
              }}
              className="absolute bottom-24 right-14 w-14 h-14 rounded-full border-2 border-black bg-black flex items-center justify-center"
            >
              <Play
                className="w-6 h-6"
                stroke="black"
                fill="white"
                strokeWidth={2}
              />
            </motion.div> */}
            {/* MapPin */}
            {/* <motion.div
              initial={{ y: 0 }}
              animate={{ y: -15 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                delay: 0.9,
              }}
              className="absolute bottom-10 right-24 w-14 h-14 rounded-full border-2 border-[#B9FF66] bg-[#B9FF66] flex items-center justify-center"
            >
              <MapPinIcon
                className="w-9 h-9"
                stroke="#B9FF66"
                fill="black"
                strokeWidth={2}
              />
            </motion.div> */}

            {/* Extra floating circles for style */}
            {/* <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-32 left-12 w-6 h-6 rounded-full bg-[#B9FF66]"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-16 left-20 w-4 h-4 rounded-full bg-[#B9FF66]"
            ></motion.div> */}
          </div>
        </section>
        {/* Logo Infinite Slider */}
        <div className="relative w-full overflow-hidden py-5">
          {/* Mobile: Two rows */}
          <div className="flex flex-col gap-4 sm:hidden">
            {/* First row */}
            <motion.div
              className="flex gap-4 justify-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...images.slice(0, 3), ...images.slice(0, 3)].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 min-w-[80px] flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`Slide ${i}`}
                    className="h-[32px] object-contain mix-blend-luminosity filter grayscale"
                  />
                </div>
              ))}
            </motion.div>

            {/* Second row */}
            <motion.div
              className="flex gap-4 justify-center mt-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...images.slice(3, 6), ...images.slice(3, 6)].map((img, i) => (
                <div
                  key={i + 3}
                  className="flex-shrink-0 min-w-[80px] flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`Slide ${i + 3}`}
                    className="h-[32px] object-contain mix-blend-luminosity filter grayscale"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tablet/Desktop: Single row */}
          <motion.div
            className="hidden sm:flex gap-4 sm:gap-6 lg:gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...images, ...images, ...images].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 min-w-[120px] sm:min-w-[120px] lg:min-w-[160px] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="h-[40px] sm:h-[40px] lg:h-[50px] object-contain mix-blend-luminosity filter grayscale"
                />
              </div>
            ))}
          </motion.div>
        </div>
        `
      </div>
    </>
  );
};

export default Landing;
