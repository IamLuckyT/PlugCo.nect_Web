import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Overview(){
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p className="text-sm text-slate-600">Your activity feed and bookings appear here.</p>
    </div>
  )
}

function Profile(){
  const { user } = useAuth()
  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h3 className="font-semibold">Profile</h3>
      <pre className="text-xs mt-3">{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default function Dashboard(){
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1">
        <div className="space-y-2">
          <Link to="" className="block p-2 border rounded">Overview</Link>
          <Link to="profile" className="block p-2 border rounded">Profile</Link>
        </div>
      </aside>
      <section className="md:col-span-3">
        <Routes>
          <Route index element={<Overview/>} />
          <Route path="profile" element={<Profile/>} />
        </Routes>
      </section>
    </div>
  )
}