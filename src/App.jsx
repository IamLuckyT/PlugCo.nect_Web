import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'

export default function App(){
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/dashboard/*" element={<Dashboard/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}