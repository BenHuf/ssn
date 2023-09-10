import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SSNInput from './components/SsnInput.jsx'
import Header from './components/Header.jsx'
import './index.css'
import Instructions from './components/Instructions.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <SSNInput/>
  </React.StrictMode>,
)
