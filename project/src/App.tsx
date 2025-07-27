import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DailyPosts from './components/DailyPosts';
import AboutPage from './components/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'posts':
        return <DailyPosts />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;