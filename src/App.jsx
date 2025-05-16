import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent } from './components/ui/card';
import { Navbar } from './components/ui/navbar';
import { AppLayout } from './components/ui/applayout';
import { Button } from './components/ui/button';
import { Analytics } from "@vercel/analytics/react";
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
        className="w-6 h-6 absolute bottom-1 right-1 drop-shadow-xl md:w-8 md:h-8"
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
      <SkillCard skill="Git" logo="/github.svg" />
      <SkillCard skill="Terminal (Linux)" logo="/terminal-fill.svg" />
      <SkillCard skill="JavaScript" logo="/javascript.svg" />
      <SkillCard skill="Stripe API/Integration" logo="/stripe.svg" />
        <br />
      <SkillCard skill="HTML" logo="/html5.svg" />
      <SkillCard skill="React" logo="react.svg" />
      <SkillCard skill="Markdown" logo="markdown.svg" />
      <SkillCard skill="CSS" logo="css3.svg" />
        <br />
      <SkillCard skill="Node.js & NPM" logo="/nodejs-alt.svg" />
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = 'https://full-text-rss.p.rapidapi.com/extract.php';
      const options = {
        method: 'POST',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'full-text-rss.p.rapidapi.com',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          url: 'https://medium.com/@kennycoveneytech/feed',
          lang: '1',
          links: 'footnotes',
          content: 'text'
        })
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        setPosts([{ title: "Fetched Blog Post", body: result }]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-[Great Vibes] text-center text-pink-500">My Blog</h1>
      {posts.map((post, index) => (
        <article key={index} className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="mt-2 text-gray-700">{post.body}</p>
        </article>
      ))}
    </div>
  );
 }
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
      <Preloader />
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 transition-opacity duration-700">
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
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
