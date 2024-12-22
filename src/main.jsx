import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// import { Layout } from './Layout'
import { QrCodeGenerator } from './components/Generator/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';

import './style.css';
import { Layout } from './Layout';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
