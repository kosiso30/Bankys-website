
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NeokingsApp() {
  const [filter, setFilter] = useState("all");

  const playHoverSound = () => {
    const sound = new Audio("/sounds/hover.mp3");
    sound.play();
  };

  const handleNavigation = (section) => {
    const anchor = document.getElementById(section);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-yellow-400 font-serif">
      <motion.nav
        className="flex justify-center gap-10 px-10 py-6 text-lg font-semibold border-b border-yellow-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button onClick={() => handleNavigation("gallery")}>Gallery</button>
        <button onClick={() => handleNavigation("roadmap")}>Roadmap</button>
        <button onClick={() => handleNavigation("countdown")}>Countdown</button>
        <button onClick={() => handleNavigation("mint")}>Mint</button>
        <button onClick={() => handleNavigation("community")}>Community</button>
      </motion.nav>

      <motion.h1
        className="text-center text-8xl font-bold italic tracking-widest pt-12 pb-10 text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        HALL OF FRAMES
      </motion.h1>

      <div className="flex justify-center gap-6 mb-8" id="gallery">
        <button onClick={() => setFilter("all")} className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600">All</button>
        <button onClick={() => setFilter("classic")} className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600">Classic</button>
        <button onClick={() => setFilter("modern")} className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600">Modern</button>
      </div>

      <div className="flex justify-center p-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={playHoverSound}
          className="w-full max-w-6xl rounded-lg overflow-hidden border-8 border-yellow-500"
        >
          <img
            src="/images/final-hall-of-frames.png"
            alt="Hall of Frames"
            className="w-full object-cover rounded"
          />
        </motion.div>
      </div>

      <div id="roadmap" className="h-screen bg-black text-center pt-20 text-2xl">ROADMAP SECTION</div>
      <div id="countdown" className="h-screen bg-black text-center pt-20 text-2xl">COUNTDOWN SECTION</div>
      <div id="mint" className="h-screen bg-black text-center pt-20 text-2xl">MINT SECTION</div>
      <div id="community" className="h-screen bg-black text-center pt-20 text-2xl">COMMUNITY SECTION</div>
    </div>
  );
}
