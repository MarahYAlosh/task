
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MessagesPage from './pages/MessagesPage'


function App() {


  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/messages" />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
