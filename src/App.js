import React from 'react'
import LoginForm from './components/loginForm';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
  // <LoginForm/>

    <Routes>
   <Route path="/" element={<LoginForm/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>

  )
}

export default App
