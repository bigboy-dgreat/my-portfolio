import { useState, useEffect } from "react";

export const useNavbarAlignment = () => {
  const [positions, setPositions] = useState({
    menuX: 20,
    contactX: window.innerWidth - 20,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let resizeTimer;

    const updatePositions = () => {
      const menuEl = document.querySelector(
        '[aria-label="Open menu"], [aria-label="Close menu"], .menu-btn, nav a[href="/menu"]'
      );

      let contactEl = document.querySelector('a[href="/contact"], .contact-btn');
      if (!contactEl) {
        const buttons = Array.from(document.querySelectorAll("button, a"));
        contactEl = buttons.find(
          (el) => el.textContent.trim().toLowerCase() === "contact"
        );
      }

      if (menuEl && contactEl) {
        const menuRect = menuEl.getBoundingClientRect();
        const contactRect = contactEl.getBoundingClientRect();

        setPositions({
          menuX: menuRect.left,
          contactX: contactRect.right,
        });
      } else {
        setPositions({ menuX: 20, contactX: window.innerWidth - 20 });
      }

      setWindowWidth(window.innerWidth);
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updatePositions, 150);
    };

    updatePositions();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 🧠 Conditional logic: use simpler padding on mobile
  const isMobile = windowWidth < 768; // Tailwind's md breakpoint

  const sectionStyle = isMobile
    ? { paddingLeft: "1.5rem", paddingRight: "1.5rem" } // ≈ Tailwind px-6
    : {
        paddingLeft: `${positions.menuX}px`,
        paddingRight: `${window.innerWidth - positions.contactX}px`,
      };

  const getSectionStyle = (offsetLeft = 0, offsetRight = 0, offsetRatio = 1) => {
    if (isMobile) {
      return { paddingLeft: "1.5rem", paddingRight: "1.5rem" };
    }

    const left = (positions.menuX + offsetLeft) * offsetRatio;
    const right = (window.innerWidth - positions.contactX + offsetRight) * offsetRatio;

    return {
      paddingLeft: `${left}px`,
      paddingRight: `${right}px`,
    };
  };

  return { ...positions, sectionStyle, getSectionStyle };
};


