import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  ["/Heif.png", "/wedd.png"],
  ["/Have.png", "/prada.png"],
  ["/zedx.png", "/Heif.png"],
  ["/Have.png", "/prada.png"],
  ["/prada.png", "/Have.png"],
  ["/Heif.png", "/zedx.png"],
];

// Different intervals for each logo (ms)
const intervals = [10500, 8000, 6000, 16000, 7500, 15000];


const LogoSlot = ({ logoSet, interval, delay }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null); // ✅ store interval ID

  const startInterval = () => {
    stopInterval(); // clear any existing one
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % logoSet.length);
    }, interval);
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    // start initial interval
    startInterval();

    const handleResize = () => {
      startInterval(); // restart on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      stopInterval();
      window.removeEventListener("resize", handleResize);
    };
  }, [logoSet, interval]);

  // Fade duration = 25% of the interval (max 2.5s)
  const fadeDuration = Math.min((interval / 1000) * 0.25, 2.5);

  return (
    <div className="flex justify-center items-center p-6 relative">
      {logoSet.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="Client Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{
            duration: fadeDuration,
            delay,
            ease: "easeInOut",
          }}
          className={`object-contain absolute filter brightness-0 invert ${
            src.includes("zedx") ? "h-8 sm:h-16 md:h-9" : "h-16 sm:h-20 md:h-20"
          }`}
        />
      ))}
    </div>
  );
};

const ClientsSection = () => {
  return (
    <section className="bg-[#0d0e0f] text-white border-b border-white pb-64">
      <h2 className="text-3xl sm:text-5xl mb-6 sm:mb-12 font-serif font-bold p-6 md:-ml-[7px] -ml-2.5 mt-3">
        CLIENTS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-44 gap-x-12 md:gap-x-12 relative">
        {logos.map((set, i) => (
          <LogoSlot
            key={i}
            logoSet={set}
            interval={intervals[i % intervals.length]}
            delay={i * 0.3} // stagger logos (0.3s apart)
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
