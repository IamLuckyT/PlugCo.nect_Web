import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">PlugCo.nect — Find and connect with local service providers</h1>
          <p className="mt-4 text-lg text-slate-600">Discover verified local businesses, book services, and grow your customer base.</p>
          <div className="mt-6 flex gap-4">
            <Link to="/auth" className="px-6 py-3 rounded bg-brand text-white font-semibold">Get started</Link>
            <Link to="/about" className="px-6 py-3 rounded border">Learn more</Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold mb-2">Sample feed</h3>
          <div className="space-y-3">
            <div className="p-3 border rounded">Plumbing — Quick Fix Plumbing</div>
            <div className="p-3 border rounded">Mechanic — RightShift Garage</div>
            <div className="p-3 border rounded">Accommodation — Sunset Guesthouse</div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h4 className="font-semibold">For users</h4>
          <p className="mt-2 text-sm text-slate-600">Search services, read reviews, and book directly.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h4 className="font-semibold">For businesses</h4>
          <p className="mt-2 text-sm text-slate-600">List your services, receive leads, and manage bookings.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h4 className="font-semibold">Secure login</h4>
          <p className="mt-2 text-sm text-slate-600">Sign in with Google or OTP (SMS) for secure access.</p>
        </div>
      </section>
    </div>
  )
}