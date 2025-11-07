import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Auth(){
  const { signInWithGoogle, user } = useAuth()
  const nav = useNavigate()

  React.useEffect(()=>{
    if(user) nav('/dashboard')
  },[user])

  const handleGoogle = async ()=>{
    try{
      await signInWithGoogle()
    }catch(e){
      alert(e.message || 'Sign-in failed')
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-2xl font-bold mb-4">Sign in to PlugCo.nect</h3>
      <button onClick={handleGoogle} className="w-full px-4 py-3 rounded border">Sign in with Google</button>
      <div className="mt-4 text-sm text-slate-500">(Email/password and OTP flows can be added — this template uses Supabase Google OAuth.)</div>
    </div>
  )
}