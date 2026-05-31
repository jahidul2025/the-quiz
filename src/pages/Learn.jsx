import React, { useState } from 'react';

const languagesData = [
  {
    id: 'html',
    name: 'HTML5',
    logo: '🌐',
    tagline: 'HyperText Markup Language',
    description: 'The standard markup language for documents designed to be displayed in a web browser. It defines the structure and layout of web content using elements represented by tags.',
    colorClass: 'from-orange-500/10 to-amber-600/5 border-orange-500/30 text-orange-400',
    keyConcepts: [
      { name: 'Semantic Elements', desc: '<header>, <article>, <footer> define meaningful sections.' },
      { name: 'DOM Tree', desc: 'The hierarchical tree model representing structural nodes.' },
      { name: 'Forms & Inputs', desc: 'Robust data capture with validation attributes.' }
    ],
    codeSnippet: `<!-- Semantically structured document -->
<header>
  <h1>Welcome to TriviaMaster</h1>
</header>
<main>
  <article>
    <p>Practice makes perfect!</p>
  </article>
</main>`
  },
  {
    id: 'css',
    name: 'CSS3',
    logo: '🎨',
    tagline: 'Cascading Style Sheets',
    description: 'Used for describing the presentation of a document written in a markup language. CSS defines colors, layouts, grids, flexbox, typography, and interactive transitions.',
    colorClass: 'from-blue-500/10 to-indigo-600/5 border-blue-500/30 text-blue-400',
    keyConcepts: [
      { name: 'Flexbox Layouts', desc: 'One-dimensional positioning for alignment and space distribution.' },
      { name: 'CSS Grid', desc: 'Two-dimensional grid-based layout systems for complex structures.' },
      { name: 'Custom Properties', desc: 'Variables (e.g. --primary-color) for dynamic theming.' }
    ],
    codeSnippet: `/* Modern Flexbox & Variables */
:root {
  --accent: #6366f1;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--accent);
}`
  },
  {
    id: 'js',
    name: 'JavaScript',
    logo: '⚡',
    tagline: 'ECMAScript Standard',
    description: 'A lightweight, interpreted, object-oriented language with first-class functions. It is the scripting language that brings web pages to life, handling user inputs, asynchronous operations, and dynamic content.',
    colorClass: 'from-yellow-500/10 to-amber-600/5 border-yellow-500/30 text-yellow-300',
    keyConcepts: [
      { name: 'Asynchronous JS', desc: 'Promises, Async/Await syntax for handling APIs cleanly.' },
      { name: 'Array Methods', desc: 'Declarative methods like .map(), .filter(), and .reduce().' },
      { name: 'Closures & Scope', desc: 'Lexical environments allowing functions to access parent variables.' }
    ],
    codeSnippet: `// Async fetch with modern arrow functions
const fetchQuestions = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.filter(q => q.active);
  } catch (err) {
    console.error("Failed to load:", err);
  }
};`
  },
  {
    id: 'ts',
    name: 'TypeScript',
    logo: '📘',
    tagline: 'Strongly Typed JavaScript',
    description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static types to the language, helping detect errors before code execution.',
    colorClass: 'from-blue-600/10 to-indigo-700/5 border-blue-600/30 text-blue-400',
    keyConcepts: [
      { name: 'Type Interfaces', desc: 'Declare custom shapes for objects, functions, and classes.' },
      { name: 'Generics', desc: 'Reusable components that work across a variety of types.' },
      { name: 'Union & Intersection', desc: 'Combine multiple types using | and & operators.' }
    ],
    codeSnippet: `// Safe object configurations with Interface
interface User {
  id: number;
  name: string;
  role?: 'admin' | 'user';
}

function greet(user: User): string {
  return \`Hello, \${user.name} (\${user.role || 'guest'})\`;
}`
  },
  {
    id: 'tsx',
    name: 'TSX',
    logo: '💎',
    tagline: 'React with Static Typing',
    description: 'TSX stands for TypeScript XML. It allows you to write typed React components where props, states, and event handlers are fully type-safe, preventing common UI bugs during integration.',
    colorClass: 'from-cyan-500/10 to-indigo-600/5 border-cyan-500/30 text-cyan-400',
    keyConcepts: [
      { name: 'Component Props Type', desc: 'Guarantee parent components pass the correct data structure.' },
      { name: 'Type-Safe Hooks', desc: 'useState<User | null>(null) handles empty initial states safely.' },
      { name: 'Event Handlers', desc: 'Specify FormEvent or MouseEvent to safely access values.' }
    ],
    codeSnippet: `import React, { FormEvent } from 'react';

interface FormProps {
  onSubmit: (text: string) => void;
}

export const SafeForm: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit("Form Submitted Safely");
  };
  return <form onSubmit={handleSubmit}>...</form>;
};`
  },
  {
    id: 'react',
    name: 'React 19',
    logo: '⚛️',
    tagline: 'Declarative Component UI Library',
    description: 'A popular frontend library developed by Meta. It allows developers to build reusable component structures, manage application state smoothly, and perform efficient DOM updates.',
    colorClass: 'from-cyan-500/10 to-blue-600/5 border-cyan-500/30 text-cyan-400',
    keyConcepts: [
      { name: 'Hooks System', desc: 'useState, useEffect, and useContext for modular logic.' },
      { name: 'Virtual DOM', desc: 'Fibers reconcile changes efficiently before rendering.' },
      { name: 'Props & State', desc: 'Unidirectional data flow for predictable application states.' }
    ],
    codeSnippet: `// Pure functional component using hooks
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  },
  {
    id: 'next',
    name: 'Next.js',
    logo: '▲',
    tagline: 'The React Framework for the Web',
    description: 'Next.js is a flexible React framework that gives you building blocks to create fast web applications. It handles routing, rendering (SSR, SSG, ISR), bundling, and optimization out-of-the-box.',
    colorClass: 'from-slate-500/10 to-slate-800/5 border-slate-700/40 text-slate-300',
    keyConcepts: [
      { name: 'App Router', desc: 'Modern file-system router with layout-nesting support.' },
      { name: 'Server Components', desc: 'Execute component code on the server to reduce bundle sizes.' },
      { name: 'Hybrid Rendering', desc: 'Easily mix Static and Dynamic generation on a per-page level.' }
    ],
    codeSnippet: `// Server Component fetching data directly
import React from 'react';

async function fetchStars() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return repo.stargazers_count;
}

export default async function StarsPage() {
  const stars = await fetchStars();
  return <p>Next.js stars: {stars} ⭐️</p>;
}`
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    logo: '🐹',
    tagline: 'Simple, Reliable & Efficient Backend',
    description: 'Go is an open-source programming language developed by Google. It is compiled, statically typed, and designed for concurrent backend microservices with native support for CSP-style concurrency.',
    colorClass: 'from-teal-500/10 to-cyan-600/5 border-teal-500/30 text-teal-400',
    keyConcepts: [
      { name: 'Goroutines', desc: 'Lightweight concurrent threads of execution managed by Go runtime.' },
      { name: 'Channels', desc: 'Pipes that connect concurrent goroutines, allowing safe message passing.' },
      { name: 'Interfaces', desc: 'Implicit interfaces decouple implementations from declarations.' }
    ],
    codeSnippet: `package main
import (
	"fmt"
	"time"
)

func worker(ch chan string) {
	time.Sleep(time.Second)
	ch <- "Job Complete"
}

func main() {
	ch := make(chan string)
	go worker(ch)
	fmt.Println(<-ch)
}`
  },
  {
    id: 'python',
    name: 'Python',
    logo: '🐍',
    tagline: 'Dynamic & Expressive Language',
    description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Used heavily in AI, Web Backend, and Data Science.',
    colorClass: 'from-green-500/10 to-emerald-600/5 border-green-500/30 text-green-400',
    keyConcepts: [
      { name: 'List Comprehensions', desc: 'Compact syntax to construct lists based on existing lists.' },
      { name: 'Decorators', desc: 'Modify function or class behavior dynamically using wrappers.' },
      { name: 'Dynamic Typing', desc: 'Variables are bound to objects, not specific static types.' }
    ],
    codeSnippet: `# Python list comprehension with decorators
def log_args(func):
    def wrapper(*args):
        print(f"Arguments: {args}")
        return func(*args)
    return wrapper

@log_args
def square_odds(numbers):
    return [n * n for n in numbers if n % 2 != 0]`
  },
  {
    id: 'java',
    name: 'Java',
    logo: '☕',
    tagline: 'Write Once, Run Anywhere',
    description: 'Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It compiles to bytecode which runs on any system with a JVM.',
    colorClass: 'from-rose-500/10 to-orange-600/5 border-rose-500/30 text-rose-400',
    keyConcepts: [
      { name: 'OOP Principles', desc: 'Encapsulation, Inheritance, Polymorphism, and Abstraction.' },
      { name: 'JVM Virtualization', desc: 'Bytecode acts as an intermediary, yielding absolute cross-platform execution.' },
      { name: 'Garbage Collection', desc: 'Automatic heap memory reclamation to prevent memory leaks.' }
    ],
    codeSnippet: `import java.util.List;

public class LanguageViewer {
    public static void main(String[] args) {
        List<String> items = List.of("Java", "TypeScript", "Python");
        items.stream()
             .filter(s -> s.startsWith("J"))
             .forEach(System.out::println);
    }
}`
  }
];

export default function Learn() {
  const [activeTab, setActiveTab] = useState('html');
  const activeLanguage = languagesData.find((lang) => lang.id === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-16 animate-slide-up">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-3">
          Language Guide Hub
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Unlock type sheets, syntax concepts, and features for 10 essential languages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Left Sidebar / Mobile Top bar */}
        <div className="lg:col-span-4 flex lg:flex-col gap-2.5 overflow-x-auto pb-4 lg:pb-0 scrollbar-none flex-nowrap lg:flex-wrap">
          {languagesData.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setActiveTab(lang.id)}
              className={`flex-shrink-0 w-44 lg:w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 cursor-pointer transform
                ${activeTab === lang.id
                  ? 'bg-indigo-600/20 border-indigo-500/80 text-indigo-300 ring-1 ring-indigo-500/30'
                  : 'bg-slate-900/55 border-slate-800/80 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 hover:scale-[1.02] hover:-translate-y-0.5 lg:hover:translate-x-1 lg:hover:translate-y-0 hover:border-slate-600 hover:shadow-lg hover:shadow-indigo-500/5'
                }`}
            >
              <span className="text-xl">{lang.logo}</span>
              <div className="min-w-0">
                <div className="font-bold text-sm tracking-wide leading-tight truncate">{lang.name}</div>
                <div className="text-slate-500 text-xxs font-normal truncate mt-0.5">{lang.tagline}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Active Language Details */}
        {activeLanguage && (
          <div className={`lg:col-span-8 glass-card rounded-2xl p-6 md:p-8 border-t-4 animate-pop-in grid grid-cols-1 md:grid-cols-12 gap-6 bg-gradient-to-br ${activeLanguage.colorClass}`}>
            {/* Info details */}
            <div className="md:col-span-5 space-y-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                  {activeLanguage.tagline}
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-100 flex items-center gap-2">
                  <span>{activeLanguage.logo}</span>
                  <span>{activeLanguage.name}</span>
                </h2>
              </div>

              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                {activeLanguage.description}
              </p>

              {/* Concepts */}
              <div className="space-y-3 pt-1">
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Core Concepts
                </h3>
                <div className="space-y-2">
                  {activeLanguage.keyConcepts.map((concept, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-xs">
                      <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-slate-200">{concept.name}</h4>
                        <p className="text-slate-500 mt-0.5 leading-snug">{concept.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Code snippet display */}
            <div className="md:col-span-7 flex flex-col min-w-0">
              <div className="bg-slate-950/90 rounded-xl border border-slate-900 overflow-hidden shadow-xl h-full flex flex-col min-w-0">
                {/* Fake Window Bar */}
                <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-900 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-500 text-xxs font-mono">
                    {activeLanguage.id}.code
                  </span>
                </div>
                
                {/* Scrollable code block */}
                <pre className="p-4 overflow-x-auto text-xxs md:text-xs font-mono text-slate-300 leading-relaxed flex-1 select-all bg-slate-950/30">
                  <code>{activeLanguage.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
