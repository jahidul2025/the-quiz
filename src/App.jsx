import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Learn from './pages/Learn';
import About from './pages/About';
import QuizApp from './QuizApp';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          {/* Global Header Navigation */}
          <Navbar />

          {/* Main Views Container */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/learn"
                element={
                  <ProtectedRoute>
                    <Learn />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<About />} />
              
              {/* Protected Quiz Page */}
              <Route
                path="/quiz"
                element={
                  <ProtectedRoute>
                    <QuizApp />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          {/* Minimal aesthetic Footer */}
          <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-600">
            <p>© {new Date().getFullYear()} TriviaMaster. Built using React + Tailwind CSS v4.</p>
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
