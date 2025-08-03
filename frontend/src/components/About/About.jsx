import React, { useState } from "react";
import { motion } from "framer-motion";
import { features, stats, teamMembers } from "../../assets/dummydata";

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3c2a21] to-[#1a120b] text-amber-50
    overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light" />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 px-4 text-center relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif bg-clip-text
          text-transparent bg-gradient-to-r from-amber-500 to-yellow-600"
          >
            Culinary Express
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Crafting unforgettable dining experiences directly to your door.
          </motion.p>
        </div>
      </motion.section>
      <section className="py-12 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 ">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div
                  className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-500/30 rounded-xl
                blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                />
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
