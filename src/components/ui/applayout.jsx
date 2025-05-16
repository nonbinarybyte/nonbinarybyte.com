import { Navbar } from './navbar';
import React from 'react';


function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100">
        {children}
      </main>
    </div>
  );
}

export { AppLayout };