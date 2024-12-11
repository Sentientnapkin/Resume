// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Blogs from "./pages/Blogs.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <Navbar />
        <Routes>
          <Route path="/Resume/" element={<Home />} />
          <Route path="/Resume/experience" element={<Experience />} />
          <Route path="/Resume/projects" element={<Projects />} />
          <Route path="/Resume/education" element={<Education />} />
          <Route path="/Resume/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
