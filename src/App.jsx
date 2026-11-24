import { Routes, Route, Navigate } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App