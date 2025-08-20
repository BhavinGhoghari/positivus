import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    description:
      "We conduct thorough research to understand your industry, competitors, and target audience, then develop a customized marketing strategy tailored to your business goals.",
  },
  // 👉 add more steps here
];

const Working = () => {
  const [openStep, setOpenStep] = useState(1); // first one open by default

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-start md:items-center text-left md:text-center gap-6 md:gap-10 mb-10">
        <h2 className="font-medium text-3xl sm:text-4xl md:text-[40px] leading-tight tracking-normal rounded-md border border-[#B9FF66] bg-[#B9FF66] px-3 py-2">
          Our Working Process
        </h2>
        <p className="w-full sm:w-[350px] md:w-[400px] font-normal text-base sm:text-lg md:text-[18px] leading-relaxed tracking-normal">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step) => {
          const isOpen = openStep === step.id;

          return (
            <div
              key={step.id}
              className={`flex flex-col w-full border border-[#191A23] rounded-[50px] p-4 sm:p-6 md:p-10 shadow-[0_5px_0_0_#191A23] transition-colors duration-300
          ${isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"}`}
            >
              {/* Header: number + title + icon */}
              <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
                {/* Number + Title */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <h2 className="font-medium text-2xl sm:text-4xl md:text-[60px] leading-tight">
                    {String(step.id).padStart(2, "0")}
                  </h2>
                  <p className="font-medium text-lg sm:text-xl md:text-[30px] leading-tight">
                    {step.title}
                  </p>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-end">
                  {isOpen ? (
                    <RemoveIcon
                      onClick={() => toggleStep(step.id)}
                      className="cursor-pointer border border-black rounded-full bg-[#F3F3F3] hover:bg-black hover:text-white"
                      sx={{ height: 40, width: 40 }}
                    />
                  ) : (
                    <AddIcon
                      onClick={() => toggleStep(step.id)}
                      className="cursor-pointer border border-black rounded-full bg-[#F3F3F3] hover:bg-black hover:text-white"
                      sx={{ height: 40, width: 40 }}
                    />
                  )}
                </div>
              </div>

              {/* Description: show on all screens when open */}
              {isOpen && (
                <div className="mt-4 sm:mt-6 border-t border-black pt-4 sm:pt-6">
                  <p className="font-normal text-base sm:text-[18px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Working;
