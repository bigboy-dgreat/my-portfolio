import React, { useEffect, useState } from "react";

const ViewportDebugger = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log("Width:", width); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine breakpoint name and color
  const getBreakpointInfo = () => {
    if (width < 640)
      return { label: "MOBILE (<640px)", color: "bg-orange-500" };
    if (width < 768)
      return { label: "SMALL MOBILE (640–767px)", color: "bg-amber-500" };
    if (width < 1024)
      return { label: "TABLET (768–1023px)", color: "bg-green-500" };
    if (width < 1280)
      return { label: "LAPTOP (1024–1279px)", color: "bg-blue-500" };
    if (width < 1536)
      return { label: "DESKTOP (1280–1535px)", color: "bg-purple-500" };
    return { label: "LARGE DESKTOP (≥1536px)", color: "bg-pink-500" };
  };

  const { label, color } = getBreakpointInfo();

  return (
    <div
      className={`
        fixed bottom-3 right-3 
        z-[9999] 
        text-white 
        text-xs sm:text-sm 
        font-mono 
        px-3 py-1.5 rounded-md 
        shadow-lg 
        flex items-center gap-2 
        transition-all duration-300 
        ${color}
      `}
    >
      <span>{width}px</span>
      <span className="hidden sm:inline">→ {label}</span>
    </div>
  );
};

export default ViewportDebugger;

