import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
