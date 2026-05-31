import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Learn', path: '/learn' },
    { name: 'About Us', path: '/about' },
  ];

  const activeStyle = ({ isActive }) =>
    `text-sm font-semibold transition-all duration-200 px-3 py-2 rounded-lg ${
      isActive
        ? 'text-indigo-400 bg-indigo-500/10 border-b-2 border-indigo-400'
        : 'text-slate-300 hover:text-indigo-300 hover:bg-slate-800/30'
    }`;

  const mobileActiveStyle = ({ isActive }) =>
    `block text-base font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
      isActive
        ? 'text-indigo-400 bg-indigo-500/10 border-l-4 border-indigo-400'
        : 'text-slate-300 hover:text-indigo-300 hover:bg-slate-800/30'
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/75 backdrop-blur-md border-b border-slate-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.982-11.795H14l1-6.104L6 14.896h4.813z" />
                </svg>
              </div>
              <span className="font-extrabold text-lg md:text-xl tracking-tight bg-gradient-to-r from-slate-50 via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                TriviaMaster
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={activeStyle}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth Controls */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center text-xs font-bold uppercase">
                  {user.username.charAt(0)}
                </div>
                <span className="text-slate-300 text-sm font-medium">
                  {user.username}
                </span>
                <div className="w-px h-4 bg-slate-800" />
                <button
                  onClick={handleLogout}
                  className="text-slate-400 hover:text-rose-400 text-sm font-semibold transition-colors duration-200 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-slate-300 hover:text-indigo-400 text-sm font-semibold px-4 py-2 transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/10 transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={mobileActiveStyle}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 pb-4 border-t border-slate-900 px-4">
            {user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold uppercase">
                    {user.username.charAt(0)}
                  </div>
                  <span className="text-slate-200 font-semibold">{user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-center py-2.5 border border-rose-500/30 hover:bg-rose-500/10 text-rose-400 font-bold rounded-xl transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 border border-slate-800 hover:bg-slate-900 text-slate-300 font-semibold rounded-xl transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
