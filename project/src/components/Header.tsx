import React from 'react';
import { Home, BookOpen, User, Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'posts', label: 'Daily Posts', icon: BookOpen },
    { id: 'about', label: 'About', icon: User },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-sky-400 to-emerald-400 p-2 rounded-xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                GraceUp
              </h1>
              <p className="text-xs text-slate-500 -mt-1">Inner Peace & Freedom</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === id
                    ? 'bg-sky-50 text-sky-700 shadow-sm'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}