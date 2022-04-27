import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import { AppNoticiasProvider } from './shared/hooks/NoticiasContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AppNoticiasProvider>

    <App />
  </AppNoticiasProvider>
  
  </BrowserRouter>
  </React.StrictMode>
)
