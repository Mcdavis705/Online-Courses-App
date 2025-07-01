import {React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import Home from './pages/Home'
import Programs from './pages/Programs'
import LogIn from './pages/LogIn'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import ProgramsDetails from './pages/ProgramsDetails'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Programs" element={<Programs />} />
          <Route path="Programs/:id" element={<ProgramsDetails/>} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
