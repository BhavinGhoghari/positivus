import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import serviceImg1 from "../../assets/service1.png";
import serviceImg2 from "../../assets/service2.png";

const Service = () => {
  return (
    <>
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center text-left md:text-center gap-6 md:gap-10">
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-normal rounded-md border border-[#B9FF66] bg-[#B9FF66] px-3 py-2 text-center md:text-center w-full md:w-auto">
            Services
          </h2>
          <p className="max-w-[600px] font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed tracking-normal text-center md:text-left w-full md:w-auto">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-10">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full border border-[#191A23] bg-[#F3F3F3] rounded-[30px] sm:rounded-[40px] lg:rounded-[45px] p-6 sm:p-8 md:p-10 shadow-[0_5px_0_0_#191A23]">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0 md:mr-6">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold border border-[#B9FF66] bg-[#B9FF66] rounded px-2 py-1 mb-4">
                Search Engine Optimization
              </h1>

              {/* Hide on mobile */}
              <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold cursor-pointer mt-auto">
                <ArrowOutwardIcon
                  className="border rounded-full p-2 bg-black text-[#B9FF66]"
                  sx={{ height: 36, width: 36 }}
                />
                Learn More
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <img
                src={serviceImg1}
                alt="Service 1"
                className="sm:w-[50px] md:w-56 lg:w-64 xl:w-72 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full border border-[#191A23] bg-[#B9FF66] rounded-[30px] sm:rounded-[40px] lg:rounded-[45px] p-6 sm:p-8 md:p-10 shadow-[0_5px_0_0_#191A23]">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0 md:mr-6">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold border border-[#B9FF66] bg-[#F3F3F3] rounded px-2 py-1 mb-4">
                Social Media Marketing
              </h1>

              {/* Hide on mobile */}
              <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold cursor-pointer mt-auto">
                <ArrowOutwardIcon
                  className="border rounded-full p-2 bg-black text-[#B9FF66]"
                  sx={{ height: 36, width: 36 }}
                />
                Learn More
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <img
                src={serviceImg2}
                alt="Service 2"
                className="sm:w-48 md:w-56 lg:w-64 xl:w-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
