import React from "react";

const AvailabilityBanner = () => {
  return (
    <div className="w-full bg-[#ff4bf4] text-black py-2 sm:py-3 px-3 sm:px-5 text-center sm:text-left overflow-hidden">
      <p className="text-base sm:text-lg font-medium leading-snug ml-">
        Available for new projects,{" "}
        <a
          href="/contact"
          className="underline underline-offset-4 font-semibold hover:text-gray-800 transition-colors"
        >
          get in touch
        </a>
      </p>
    </div>
  );
};

export default AvailabilityBanner;


