import React from 'react'
import { AppHeader } from "./cmps/app-header";
import { Routes, Route } from 'react-router'
import { TheaterApp } from './views/theatre-app';
import { DotDetails } from './cmps/dot-details';

export const App = () => {


  return (
    <div className="App main-container">
      <AppHeader />
      <Routes>
        <Route path='/' element={<TheaterApp />} />
      </Routes>
    </div>
  );
}

export default App;
