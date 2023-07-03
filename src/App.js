import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BandagePage from './pages/BandagePage';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Maintenance from './pages/Maintenance';
import MedicinePage from './pages/MedicinePage';
import FirstAidKit from './pages/FirstAidKit';
import About from './pages/About';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/bandage' element={<BandagePage/>}/>
          <Route path='/medicine' element={<MedicinePage/>}/>
          <Route path='/FirstAidKit' element={<FirstAidKit/>}/>
          <Route path='/Maintenance' element={<Maintenance/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
