import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent } from './components/ui/card';
import { Navbar } from './components/ui/navbar';
import { AppLayout } from './components/ui/applayout';
import { Button } from './components/ui/button';
import { Analytics } from "@vercel/analytics/react";
import { motion } from 'framer-motion';
import ProgressBar from 'react-animated-progress-bar';
import './App.css';

// Google Fonts Import
const fontLink = document.createElement('link');
fontLink.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Ubuntu:wght@400;700&family=Raleway:wght@300&family=Baloo+2:wght@400;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function SkillCard({ skill, logo, percentage }) { 
  return (
    <div className="w-full max-w-sm p-4 border-2 border-pink-200 rounded-2xl shadow-lg bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 relative flex flex-col items-center md:w-72">
      <div className="flex items-center justify-between w-full">
        <span className="text-lg text-gray-800 font-[Great Vibes] md:text-xl">{skill}</span>
        <img src={logo} alt={skill} className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <ProgressBar
        width="100%"
        height="10px"
        rect="true"
        fontColor="#000"
        percentage={percentage}
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="rgba(255,255,255,0.5)"
        bgColor="#a7f3d0" // pastel pink (Tailwind pink-300)
        trackBorderColor="#f9a8d4"// pastel pink border
      />
      <motion.img
        src="/cupcake.png"
        alt="Cupcake"
        className="w-6 h-6 absolute bottom-1 right-1 drop-shadow-xl"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}


function Portfolio() {
  return (
    <div className="p-8 space-y-4 flex flex-wrap gap-4 justify-center">
      <h1 className="text-3xl font-bold text-pink-500 font-[Great Vibes] w-full text-center">My Skills</h1>
      <SkillCard skill="Git" logo="/github.svg" percentage="35" />
      <SkillCard skill="Terminal (Linux)" logo="/terminal-fill.svg" percentage="15" />
      <SkillCard skill="JavaScript" logo="/javascript.svg" percentage="10" />
      <SkillCard skill="Stripe API/Integration" logo="/stripe.svg" percentage="35" />
      <SkillCard skill="HTML" logo="/html5.svg" percentage="100" />
      <SkillCard skill="React" logo="react.svg" percentage="1" />
      <SkillCard skill="Markdown" logo="markdown.svg" percentage="100" />
      <SkillCard skill="CSS" logo="css3.svg" percentage="99" />
      <SkillCard skill="Node.js & NPM" logo="/nodejs-alt.svg" percentage="10" />
    </div>
  );
}

function Home() {
  return (
    <div className="p-4 text-gray-800 font-[Raleway]">
      <h1 className="text-3xl font-bold text-pink-500 font-[Great Vibes]">Welcome to My Website!</h1>
      <p className="mt-2 text-gray-700 font-[Ubuntu]">This is a combined Portfolio, Blog, and Personal Website.</p>
      <Link to="/portfolio">
        <Button className="mt-4 bg-pink-200 text-gray-800 hover:bg-pink-300">View Portfolio</Button>
      </Link>
      <Link to="https://forum.nonbinarybyte.com/">
        <Button className="mt-4 ml-2 bg-blue-200 text-gray-800 hover:bg-blue-300">Go Checkout the Forum</Button>
      </Link>
      <Link to="/about">
        <Button className="mt-4 ml-2 bg-yellow-200 text-gray-800 hover:bg-yellow-300">About Me</Button>
      </Link>
      <Link to="/extras">
        <Button className="mt-4 ml-2 bg-green-200 text-gray-800 hover:bg-green-300">Extras</Button>
      </Link>
    </div>
  );
}


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

function About() {
  return (
    <div className="p-4 text-gray-800 space-y-4 max-w-2xl mx-auto">
      <div className="flex flex-col items-center">
        <img src="/your-profile-picture.jpg" alt="Your Profile" className="w-32 h-32 rounded-2xl mb-4" />
        <h2 className="text-2xl font-semibold">Kenny Thomas-Moore</h2>
        <p className="text-sm text-gray-500">Location: Fayetteville, North Carolina, USA.</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://linktr.ee/nonbinarybyte" className="text-blue-600">LinkTree</a>
          <a href="https://github.com/nonbinarybyte" className="text-gray-800">GitHub</a>
          <a href="mailto:kennythefemme@gmail.com" className="text-pink-600">Email</a>
        </div>
      </div>
      <p>
        Hello! I am Kenny Thomas-Moore, a passionate developer with a love for building interactive and user-friendly web applications. With a strong foundation in JavaScript, React, and other web technologies, I enjoy turning ideas into functional, beautiful digital experiences.
      </p>
      <p>
        I have experience working with APIs, including Stripe for payment integrations, and have a strong understanding of modern front-end development best practices. My background also includes working with Markdown, Node.js, and version control using Git.
      </p>
      <p>
        I am always excited to learn new technologies and take on challenging projects. Feel free to connect with me through the links above.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 transition-opacity duration-700">
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/extras" element={<Extras />} />
            </Routes>
          </AppLayout>
        <footer className="p-4 text-center text-gray-800 font-[Raleway]">
          <p className="text-sm">© 2025 Kenny Thomas-Moore / Nonbinarybyte. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
