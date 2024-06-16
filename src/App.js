import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import './App.css';
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';




function App() {
  return (
    <BrowserRouter>
      <Navigation />  
      <Routes>  
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
