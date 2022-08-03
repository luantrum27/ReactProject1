import React from 'react'
import { Routes, Route } from 'react-router-dom';
import GraphicDesign from '../components/Portfolio/Category/GraphicDesign';
import Logo from '../components/Portfolio/Category/Logo';
import Mockup from '../components/Portfolio/Category/Mockup';
import Video from '../components/Portfolio/Category/Video';


function PortfolioRouter() {
  return (
    <Routes>
        <Route path='/portfolio/logo' element={<Logo />}/>
        <Route path='/portfolio/mockup' element={<Mockup />}/>
        <Route path='/portfolio/graphic-design' element={<GraphicDesign />}/>
        <Route path='/portfolio/video' element={<Video />}/>
    </Routes>
  )
}

export default PortfolioRouter