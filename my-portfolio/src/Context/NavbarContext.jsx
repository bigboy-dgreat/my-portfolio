import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarStyles, setNavbarStyles] = useState({
    background: "bg-transparent",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const setDarkNavbar = () => {
    setNavbarStyles((prev) => {
      // ✅ Only update if background is different
      if (prev.background === "bg-[#0d0e0f]") return prev;
      return { background: "bg-[#0d0e0f]" };
    });
  };

  const setTransparentNavbar = () => {
    console.log("setTransparentNavbar called");
    setNavbarStyles((prev) => {
      if (prev.background === "bg-transparent") return prev;
      return { background: "bg-transparent" };
    });
  };

  return (
    <NavbarContext.Provider
      value={{
        navbarStyles,
        setNavbarStyles,
        setDarkNavbar,
        setTransparentNavbar,
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);














// import { createContext, useContext, useState } from "react";

// const NavbarContext = createContext();

// export const NavbarProvider = ({ children }) => {
//   const [navbarStyles, setNavbarStyles] = useState({
//     background: "bg-transparent",
//   });
//   const [menuOpen, setMenuOpen] = useState(false);

//   const setDarkNavbar = () => {
//     setNavbarStyles({ background: "bg-[#0d0e0f]" });
//   };

//   const setTransparentNavbar = () => {
//     console.log("setTransparentNavbar called");
//     setNavbarStyles({ background: "bg-transparent" });
//   };

//   return (
//     <NavbarContext.Provider
//       value={{
//         navbarStyles,
//         setNavbarStyles, // ✅ add this line!
//         setDarkNavbar,
//         setTransparentNavbar,
//         menuOpen,
//         setMenuOpen
//       }}
//     >
//       {children}
//     </NavbarContext.Provider>
//   );
// };

// export const useNavbar = () => useContext(NavbarContext);










// import { createContext, useState, useContext, useEffect } from "react";


// const NavbarContext = createContext();


// export const NavbarProvider = ({ children }) => {
//   // Default to dark background instead of transparent
//   const [navbarStyles, setNavbarStyles] = useState({
//     background: "bg-[#0d0e0f]",
//   });

//   // Helper methods to switch background dynamically
//   const setDarkNavbar = () => 
//     setNavbarStyles({ background: "bg-[#0d0e0f]" });

//   const setTransparentNavbar = () =>
//     setNavbarStyles({ background: "bg-transparent" })

//   // Safety: ensure Tailwind never purges the dynamic classes
//   useEffect(() =>{
//     // no-op, just reference both classes to keep them in build
//     const keepClasses = ["bg-[#0d0e0f]", "bg-transparent"];
//     console.debug("Tailwind safelist loaded:", keepClasses);
//   }, [])

//   return (
//     <NavbarContext.Provider
//     value={{
//       navbarStyles,
//       setNavbarStyles,
//       setDarkNavbar,
//       setTransparentNavbar,
//     }}
//     >
//       {children}
//     </NavbarContext.Provider>
//   );
// };

// export const useNavbar = () => useContext(NavbarContext);





















// import { createContext, useState, useContext } from "react";

// const NavbarContext = createContext();

// export const NavbarProvider = ({ children }) => {
//       const [navbarStyles, setNavbarStyles] = useState({
//            background: "bg-transparent", // default background
//       });

//       return (
//             <NavbarContext.Provider value={{ navbarStyles, setNavbarStyles }}>
//                   { children }
//             </NavbarContext.Provider>
//       );
// };

// export const useNavbar = () => useContext(NavbarContext);
