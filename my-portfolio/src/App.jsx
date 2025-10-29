import { useState } from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navbar from "./Components/Navbar"

const App = () => {
  // Lifted modal state (shared between Navbar + Work)
  const [isLockedModalOpen, setIsLockedModalOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0e0f] text-white">
      {/* Pass modal state + setter to Navbar */}
      <Navbar
        isLockedModalOpen={isLockedModalOpen}
        setIsLockedModalOpenFromNav={setIsLockedModalOpen}
        overlayOpen={overlayOpen}
        setOverlayOpen={setOverlayOpen}
      />

      {/* Pass modal state + setter to all pages via AnimatedRoutes */}
      <AnimatedRoutes
        isLockedModalOpen={isLockedModalOpen}
        setIsLockedModalOpenFromNav={setIsLockedModalOpen}
        overlayOpen={overlayOpen}
        setOverlayOpen={setOverlayOpen}
      />

     
    </div>
  );
};

export default App;








// import AnimatedRoutes from "./Components/AnimatedRoutes";
// import Navbar from "./Components/Navbar";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-neutral-900 text-white">
//       <Navbar />

//       <AnimatedRoutes />
//     </div>
//   );
// };

// export default App;



