import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-100 via-blue-100 to-yellow-100 shadow-md">
      <h1 className="text-2xl font-[Great Vibes] text-pink-500">My Website</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-800 hover:text-pink-500">Home</Link>
        <Link to="/portfolio" className="text-gray-800 hover:text-pink-500">Portfolio</Link>
        <Link to="/blog" className="text-gray-800 hover:text-pink-500">Blog</Link>
        <Link to="/about" className="text-gray-800 hover:text-pink-500">About</Link>
      </div>
    </nav>
  );
}

export { Navbar };