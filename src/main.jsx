import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Home from './pages/Home';
import Programs from './pages/Programs';
import LogIn from './pages/LogIn';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import ProgramsDetails from './pages/ProgramsDetails';
 
// Import  Providers
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext.jsx';

// Mount the app to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="Programs" element={<Programs />} />
              <Route path="Programs/:id" element={<ProgramsDetails />} />
              <Route path="LogIn" element={<LogIn />} />
              <Route path="Admin" element={<Admin />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
