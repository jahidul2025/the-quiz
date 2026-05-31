import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Level Up Your{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Web Development
          </span>{' '}
          Skills
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Challenge yourself with our interactive trivia quizzes. Learn the details of JavaScript, CSS, HTML, and React while tracking your progress.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {user ? (
            <Link
              to="/quiz"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <span>Play Quiz Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          ) : (
            <>
              <Link
                to="/quiz"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-base"
              >
                <span>Try the Quiz</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-base"
              >
                Create Free Account
              </Link>
            </>
          )}
        </div>

        {user && (
          <p className="text-indigo-400 font-semibold mt-4 text-sm animate-pop-in">
            👋 Welcome back, {user.username}! Ready to secure a perfect score?
          </p>
        )}
      </div>

      {/* Stats Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="glass-card rounded-2xl p-6 text-center animate-slide-up hover:-translate-y-1 hover:border-slate-700/60 hover:shadow-lg transition-all duration-300">
          <div className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-1">5+</div>
          <div className="text-slate-300 font-semibold text-sm mb-1">Core Topics</div>
          <div className="text-slate-500 text-xs">HTML, CSS, JS, React, HTTP & Git</div>
        </div>
        <div className="glass-card rounded-2xl p-6 text-center animate-slide-up hover:-translate-y-1 hover:border-slate-700/60 hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.1s' }}>
          <div className="text-3xl md:text-4xl font-extrabold text-purple-400 mb-1">100%</div>
          <div className="text-slate-300 font-semibold text-sm mb-1">Interactive</div>
          <div className="text-slate-500 text-xs">Get instant visual correct/incorrect feedback</div>
        </div>
        <div className="glass-card rounded-2xl p-6 text-center animate-slide-up hover:-translate-y-1 hover:border-slate-700/60 hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
          <div className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-1">Detailed</div>
          <div className="text-slate-300 font-semibold text-sm mb-1">Review Cards</div>
          <div className="text-slate-500 text-xs">Review incorrect choices at the final screen</div>
        </div>
      </div>

      {/* Features Showcase Section */}
      <div className="space-y-12">
        <h2 className="text-2xl md:text-3.5xl font-extrabold text-slate-100 text-center mb-8">
          Why Practice on TriviaMaster?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl p-6 md:p-8 flex gap-4 items-start hover:-translate-y-1 hover:border-slate-700/60 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Learn More section</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Check our new language study reference page. Study CSS syntax, JavaScript concepts, and HTML document structures before hopping into the quiz.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-2xl p-6 md:p-8 flex gap-4 items-start hover:-translate-y-1 hover:border-slate-700/60 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Secure Authentication</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Log in securely to protect your active sessions. Take quizzes on any computer by signing up for your customized local username.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
