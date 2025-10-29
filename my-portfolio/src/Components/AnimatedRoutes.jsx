import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Homepage from "./Homepage";
import ProfilePage from "./ProfilePage";
import ContactPage from "./ContactPage";
import ServicePage from "./ServicePage";
import Work from "./WorkPage";
import Lab from "./Lab";
import NotesPage from "./NotesPage";
import NoteDetail from "./NoteDetail";
import Download from "./Download";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function AnimatedRoutes({
  isLockedModalOpen,
  setIsLockedModalOpenFromNav,
  overlayOpen,
  setOverlayOpen,
}) {
  const location = useLocation();
  const locationForRoutes =
    location.pathname === "/menu" ? { ...location, pathname: "/" } : location;

  return (
    // ✅ Persistent dark background that NEVER unmounts
    <div className="relative bg-[#0d0e0f] text-white min-h-screen overflow-hidden">
      {/* ✅ A fixed background layer that stays even when pages transition */}
      <div className="fixed inset-0 bg-[#0d0e0f] -z-10" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={locationForRoutes.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen"
        >
          <Routes location={locationForRoutes}>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:slug" element={<NoteDetail />} />
            <Route path="/download" element={<Download />} />
            <Route
              path="/work"
              element={
                <Work
                  isLockedModalOpen={isLockedModalOpen}
                  setIsLockedModalOpenFromNav={setIsLockedModalOpenFromNav}
                  overlayOpen={overlayOpen}
                  setOverlayOpen={setOverlayOpen}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;



















// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// import Homepage from "./Homepage";
// import ProfilePage from "./ProfilePage";
// import ContactPage from "./ContactPage";
// import ServicePage from "./ServicePage";
// import Work from "./WorkPage";
// import Lab from "./Lab";
// import Notes from "./Notes";
// import NotesPage from "./NotesPage";
// import NoteDetail from "./NoteDetail";
// import Download from "./Download";

// const pageVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// function AnimatedRoutes({
//   isLockedModalOpen,
//   setIsLockedModalOpenFromNav,
//   overlayOpen,
//   setOverlayOpen,
// }) {
//   const location = useLocation();

//   const locationForRoutes =
//     location.pathname === "/menu" ? { ...location, pathname: "/" } : location;

//   return (
//     // ✅ Ensures dark background during transitions
//     <div className="overflow-hidden bg-[#0d0e0f] text-white min-h-screen transition-colors duration-500">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={locationForRoutes.pathname}
//           className="bg-[#0d0e0f] min-h-screen"
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={pageVariants}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           <Routes location={locationForRoutes}>
//             {/* Home */}
//             <Route path="/" element={<Homepage />} />

//             {/* Profile */}
//             <Route path="/profile" element={<ProfilePage />} />

//             {/* Services */}
//             <Route path="/services" element={<ServicePage />} />

//             {/* Lab */}
//             <Route path="/lab" element={<Lab />} />

//             {/* Notes */}
//             <Route path="/notes" element={<NotesPage />} />
//             <Route path="/notes/:slug" element={<NoteDetail />} />

//             {/* Download */}
//             <Route path="/download" element={<Download />} />

//             {/* Work */}
//             <Route
//               path="/work"
//               element={
//                 <Work
//                   isLockedModalOpen={isLockedModalOpen}
//                   setIsLockedModalOpenFromNav={setIsLockedModalOpenFromNav}
//                   overlayOpen={overlayOpen}
//                   setOverlayOpen={setOverlayOpen}
//                 />
//               }
//             />

//             {/* Contact */}
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default AnimatedRoutes;
























// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// import Homepage from "./Homepage";
// import ProfilePage from "./ProfilePage";
// import ContactPage from "./ContactPage";
// import ServicePage from "./ServicePage";
// import Work from "./WorkPage"; // ✅ this is your Work component with modal
// import Lab from "./Lab";
// import Notes from "./Notes";
// import NotesPage from "./NotesPage";
// import NoteDetail from "./NoteDetail";
// import Download from "./Download";

// const pageVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// function AnimatedRoutes({
//   isLockedModalOpen,
//   setIsLockedModalOpenFromNav,
//   overlayOpen,
//   setOverlayOpen,
// }) {
//   const location = useLocation();

//   const locationForRoutes =
//     location.pathname === "/menu" ? { ...location, pathname: "/" } : location;

//   return (
//     <div className="overflow-hidden">  {/* ✅ prevents global scroll/overflow */}
//       <AnimatePresence mode="wait">
//         <Routes location={locationForRoutes} key={locationForRoutes.pathname}>
//           {/* Home */}
//           <Route
//             path="/"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <Homepage />
//               </motion.div>
//             }
//           />

//           {/* Profile */}
//           <Route
//             path="/profile"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <ProfilePage />
//               </motion.div>
//             }
//           />

//           {/* Services */}
//           <Route
//             path="/services"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <ServicePage />
//               </motion.div>
//             }
//           />

//           {/* Lab */}
//           <Route
//             path="/lab"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <Lab />
//               </motion.div>
//             }
//           />

//           {/* Notes */}
//           <Route
//             path="/notes"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <NotesPage />
//               </motion.div>
//             }
//           />
//           <Route
//             path="/download"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <Download />
//               </motion.div>
//             }
//           />

//           {/* Note Detail */}
//           <Route
//             path="/notes/:slug"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <NoteDetail />
//               </motion.div>
//             }
//           />

//           {/* Work */}
//           <Route
//             path="/work"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <Work
//                   isLockedModalOpen={isLockedModalOpen}
//                   setIsLockedModalOpenFromNav={setIsLockedModalOpenFromNav}
//                   overlayOpen={overlayOpen}
//                   setOverlayOpen={setOverlayOpen}
//                 />
//               </motion.div>
//             }
//           />

//           {/* Contact */}
//           <Route
//             path="/contact"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <ContactPage />
//               </motion.div>
//             }
//           />
//         </Routes>
//       </AnimatePresence>
//     </div>
//   );
// }


// export default AnimatedRoutes;

