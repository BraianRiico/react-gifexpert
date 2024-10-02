import { GifExpertApp } from './GifExpertApp.jsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
)
