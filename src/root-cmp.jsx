import React from 'react'
import { AppHeader } from "./cmps/app-header";
import { Routes, Route } from 'react-router'

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
