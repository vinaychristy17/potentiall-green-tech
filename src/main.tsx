import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Now points to your Figma logic
import './styles/index.css' // Points to your Figma style configuration
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)