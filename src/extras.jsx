// src/Extras.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Extras() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 text-gray-800 font-[Raleway]">
      <div className="max-w-5xl mx-auto relative">
        {/* Floating Cupcake Animation */}
        <motion.img
          src="/cupcake.png"
          alt="Floating Cupcake"
          className="w-10 h-10 absolute top-4 right-4 drop-shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <h1 className="text-4xl font-[Great Vibes] text-pink-500 text-center mb-6">Extras</h1>

        <p className="text-center text-gray-700 font-[Ubuntu] mb-8">
          Here's a special presentation I've put together. Enjoy!
        </p>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video">
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSyUSiQ0UwrDzs40KjSZnlv3in7we1-sC3ahfAVQ3abkZ9bcRzbRP81NMrbRQQu5g2moD6eFBCZ7KqY/pubembed?start=true&loop=false&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://docs.google.com/presentation/d/1ZcSsrGSNJYggURZir_0en66xC4lSYHeBvjlX7Kzi6kE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-200 text-gray-800 hover:bg-pink-300 px-6 py-2 rounded-xl shadow-md transition"
          >
            View on Google Slides
          </a>
        </div>
      </div>
    </div>
  );
}

export default Extras;
