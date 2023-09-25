import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Catalogo from './Pages/Catálogo';
import Toolbar from './Pages/Toolbar';
import Buscador from './Pages/Buscador'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toolbar/>
    <Catalogo/>
  </React.StrictMode>
);


