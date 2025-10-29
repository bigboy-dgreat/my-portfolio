import React from "react";
import { useNavbar } from "../Context/NavbarContext";

const About = () => {
  const { setNavbarStyles } = useNavbar();

  return (
    <section
      id="about-section"
      className="
        bg-[#0d0e0f] text-gray-50 font-bold 
        py-20 sm:py-28 lg:py-32 
        px-4 sm:px-8 md:px-16 
        overflow-hidden
      "
    >
      <div
        className="
          flex flex-col sm:flex-row justify-center sm:justify-end 
          items-center sm:items-start text-center sm:text-left
        "
      >
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg md:text-3xl font-medium font-serif mb-6 leading-relaxed">
            With over 2 years of experience, I turn ideas into impactful, scalable software. Using tools like React, Node.js, and cloud technologies such as Firebase, AWS, and Vercel, I build secure, high-performing applications that prioritize usability and real-world impact.
          </p>

          <a
            href="/contact"
            className="
              underline font-semibold decoration-white 
              hover:decoration-gray-400 transition 
              text-xl sm:text-2xl md:text-[27.5px]
            "
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
