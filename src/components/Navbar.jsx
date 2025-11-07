import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar(){
  const { user, signOut } = useAuth()
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg text-slate-900">PlugCo.nect</Link>
          <Link to="/about" className="text-sm text-slate-600">About</Link>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link to="/dashboard" className="px-3 py-2 rounded-md border">Dashboard</Link>
              <button onClick={signOut} className="px-3 py-2 bg-red-50 rounded-md">Sign out</button>
            </>
          ) : (
            <Link to="/auth" className="px-3 py-2 bg-brand text-white rounded-md">Get started</Link>
          )}
        </div>
      </div>
    </nav>
  )
}