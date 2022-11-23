import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {Rutas} from './Routes/Routes.js'
import { Menu } from './Menu/Menu.js';
import { Footer } from './Footer/Footer.js'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Rutas />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
