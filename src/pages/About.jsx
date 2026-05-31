import React from 'react';

export default function About() {
  const values = [
    {
      title: 'Expert Curation',
      desc: 'Our questions are carefully researched to cover essential conceptual and practical web development skills.',
      icon: '🧠'
    },
    {
      title: 'Modern Aesthetics',
      desc: 'Built using state-of-the-art Glassmorphism CSS styling and Tailwind v4 grids for maximum responsiveness.',
      icon: '✨'
    },
    {
      title: 'Client-first Storage',
      desc: 'No heavy backend needed. All user session states and registrations are handled securely on your device.',
      icon: '🔒'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-20 animate-slide-up">
      {/* Intro section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-6">
          About TriviaMaster
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          TriviaMaster is a premium portal designed to make learning modern web development technologies fun, visual, and highly efficient. 
        </p>
      </div>

      {/* Main card description */}
      <div className="glass-card rounded-2xl p-6 md:p-10 mb-16 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-100">
            Our Vision
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Many learning platforms present questions but omit quick interactive feedback. TriviaMaster addresses this by displaying correct/incorrect color prompts immediately when an option is selected. 
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            This active recall system combined with immediate feedback is scientifically proven to double information retention speeds.
          </p>
        </div>

        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 text-center hover:scale-[1.03] hover:border-slate-700/60 hover:shadow-md transition-all duration-300">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-slate-200 font-bold text-sm">Vite 8</div>
            <div className="text-slate-500 text-xs mt-1">Superfast loads</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 text-center hover:scale-[1.03] hover:border-slate-700/60 hover:shadow-md transition-all duration-300">
            <div className="text-2xl mb-1">⚛️</div>
            <div className="text-slate-200 font-bold text-sm">React 19</div>
            <div className="text-slate-500 text-xs mt-1">State hooks</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 text-center hover:scale-[1.03] hover:border-slate-700/60 hover:shadow-md transition-all duration-300">
            <div className="text-2xl mb-1">🎨</div>
            <div className="text-slate-200 font-bold text-sm">Tailwind v4</div>
            <div className="text-slate-500 text-xs mt-1">Modern UI</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 text-center hover:scale-[1.03] hover:border-slate-700/60 hover:shadow-md transition-all duration-300">
            <div className="text-2xl mb-1">💾</div>
            <div className="text-slate-200 font-bold text-sm">Auth API</div>
            <div className="text-slate-500 text-xs mt-1">LocalStorage</div>
          </div>
        </div>
      </div>

      {/* Core Values grid */}
      <div className="space-y-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 text-center">
          What Sets Us Apart
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 text-center border-t-2 border-t-indigo-500/25 hover:-translate-y-1 hover:border-slate-700/60 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{val.icon}</div>
              <h4 className="text-base font-bold text-slate-200 mb-2">{val.title}</h4>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
