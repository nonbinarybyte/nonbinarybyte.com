import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { motion } from 'framer-motion';
import './App.css';

// Google Fonts Import
const fontLink = document.createElement('link');
fontLink.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Ubuntu:wght@400;700&family=Raleway:wght@300&family=Baloo+2:wght@400;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-yellow-100 z-50"
    >
      <div className="relative">
        <div className="animate-fall">
          {[...Array(10)].map((_, i) => (
            <motion.img
              key={i}
              src="/cupcake.png"
              alt="Cupcake"
              className="w-12 h-12 absolute drop-shadow-2xl"
              initial={{ y: -100, scale: 0.8 }}
              animate={{ y: [0, -15, 0], scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              style={{
                left: `${Math.random() * 100}%`,
                filter: "hue-rotate(45deg) saturate(200%) drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))",
                transform: "perspective(500px) rotateX(20deg)"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkillCard({ skill, logo }) {
  return (
    <div className="w-full max-w-sm p-4 border-2 border-pink-200 rounded-2xl shadow-lg bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 relative flex justify-between items-center md:w-72">
      <span className="text-lg text-gray-800 font-[Great Vibes] md:text-xl">{skill}</span>
      <img src={logo} alt={skill} className="w-8 h-8 md:w-10 md:h-10" />
      <motion.img
        src="/cupcake.png"
        alt="Cupcake"
        className="w-8 h-8 absolute bottom-2 right-2 drop-shadow-xl md:w-10 md:h-10"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="p-8 space-y-4 flex flex-wrap gap-4 justify-center">
      <h1 className="text-3xl font-bold text-pink-500 font-[Great Vibes] w-full text-center">My Skills</h1>
      <SkillCard skill="Git" logo="/git-logo.png" />
      <SkillCard skill="React" logo="/react-logo.png" />
      <SkillCard skill="JavaScript" logo="/js-logo.png" />
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
      <Link to="/blog">
        <Button className="mt-4 ml-2 bg-blue-200 text-gray-800 hover:bg-blue-300">Read Blog</Button>
      </Link>
      <Link to="/about">
        <Button className="mt-4 ml-2 bg-yellow-200 text-gray-800 hover:bg-yellow-300">About Me</Button>
      </Link>
    </div>
  );
}

function Blog() {
  return <div className="p-4 text-center text-gray-800">Blog coming soon.</div>;
}

function About() {
  return <div className="p-4 text-center text-gray-800">About Me coming soon.</div>;
}

function App() {
  return (
    <Router>
      <Preloader />
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 transition-opacity duration-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
