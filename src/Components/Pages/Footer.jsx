import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import footer from "../../assets/Icon.svg";

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <section className="sm:py-12 md:py-16 px-0 md:px-4 xl:px-6 2xl:px-20 md:pb-0 pb-0">
        <div className="w-full md:rounded-t-[45px] bg-[#191A23] text-white flex flex-col justify-between overflow-hidden">
          {/* Top: Logo, Navigation & Social */}
          <div className="p-4 sm:p-6 md:p-8 md:mx-2 xl:mx-4 2xl:mx-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 sm:gap-6 pb-0">
            {/* Logo - Centered on mobile & tablet, left-aligned on laptop+ */}
            <h2 className="flex items-center justify-center lg:justify-start text-xl sm:text-2xl font-bold">
              <img
                src={footer}
                alt="Positivus"
                className="w-6 h-6 sm:w-8 sm:h-8 inline-block mr-2"
              />
              Positivus
            </h2>

            {/* Navigation - Centered row layout on mobile & tablet */}
            <ul className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-300 order-3 lg:order-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#B9FF66] transition-colors duration-200 whitespace-nowrap"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#B9FF66] transition-colors duration-200 whitespace-nowrap"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#B9FF66] transition-colors duration-200 whitespace-nowrap"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#B9FF66] transition-colors duration-200 whitespace-nowrap"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#B9FF66] transition-colors duration-200 whitespace-nowrap"
                >
                  Blog
                </a>
              </li>
            </ul>

            {/* Social Icons - Centered on mobile & tablet, right-aligned on laptop+ */}
            <div className="flex justify-center lg:justify-end gap-3 sm:gap-4 md:gap-5 order-2 lg:order-3">
              <a
                href="#"
                className="hover:text-[#B9FF66] transition-colors duration-200"
              >
                <LinkedIn className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[#B9FF66] transition-colors duration-200"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[#B9FF66] transition-colors duration-200"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Middle: Contact & Subscribe */}
          <div className="p-4 sm:p-6 md:p-8 md:mx-2 xl:mx-4 2xl:mx-6 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 sm:gap-8 mt-4 sm:mt-6 pt-0">
            {/* Contact Info */}
            <div className="text-xs sm:text-sm md:text-base flex-1">
              <div className="text-center md:text-left">
                <p className="inline-block bg-[#B9FF66] text-black px-2 sm:px-3 md:px-4 py-1 md:rounded-md font-semibold mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                  Contact us:
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <p className="flex items-center justify-center md:justify-start flex-wrap gap-1">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="break-all">Email: info@positivus.com</span>
                </p>
                <p className="flex items-center justify-center md:justify-start flex-wrap gap-1">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Phone: 555-867-8901</span>
                </p>
                <p className="flex items-start justify-center md:justify-start flex-wrap gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-center md:text-left">
                    Address: 1234 Main St, Moonstone City, Stardust State 12345
                  </span>
                </p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-[#292A32] md:rounded-xl p-4 sm:p-6 w-full xl:w-[420px] xl:flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border border-gray-500 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none text-white placeholder-gray-400 md:rounded-md focus:border-[#B9FF66] transition-colors duration-200"
                />
                <button className="bg-[#B9FF66] text-black px-4 sm:px-5 py-2 sm:py-3 md:rounded-md font-semibold text-xs sm:text-sm whitespace-nowrap hover:bg-[#a3e655] transition-colors duration-200">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="p-4 sm:p-6 md:p-8 md:mx-2 xl:mx-4 2xl:mx-6 border-t border-gray-600 mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center md:justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-400">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Positivus. All Rights Reserved.
            </p>
            <a
              href="#"
              className="hover:text-[#B9FF66] transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
