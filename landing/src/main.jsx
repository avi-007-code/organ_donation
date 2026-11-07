import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import './styles.css'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const isLoginRoute = path === '/login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{isLoginRoute ? <Login /> : <App />}</React.StrictMode>,
)
