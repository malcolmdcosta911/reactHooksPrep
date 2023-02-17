import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Memo from './components/wedDevSimplified/Memo';
import NotFound from './pages/NotFound';

function App() {

  localStorage.setItem('bgcolor', 'red');

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Memo/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
