import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Menubar from './component/Menubar';
import  Home  from './pages/Home';
// import  About  from './pages/About';

function App() {
  return (
    <div>
      {/* <Menubar/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
