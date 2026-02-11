
import './App.css'
import {  HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import MessagesPage from './pages/MessagesPage'


function App() {


  return (
  <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/messages" />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
