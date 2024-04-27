import React, { useState } from 'react';
import Star from './Star';
import './App.css';
import { IoStarOutline } from "react-icons/io5";


function App() {
  const [activeId, setActiveId] = useState(-1);

  return (
      <div className='container'>
          <Star id={1} activeId={activeId} setActiveId={setActiveId}/>
          <Star id={2} activeId={activeId} setActiveId={setActiveId}/>
          <Star id={3} activeId={activeId} setActiveId={setActiveId}/>
          <Star id={4} activeId={activeId} setActiveId={setActiveId}/>
          <Star id={5} activeId={activeId} setActiveId={setActiveId}/>
      </div>
  );
};

export default App;