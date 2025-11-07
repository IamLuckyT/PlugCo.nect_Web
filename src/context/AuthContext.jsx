import React, { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const session = supabase.auth.getSession().then(({data})=>{
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return ()=> listener?.subscription?.unsubscribe?.()
  },[])

  const signInWithGoogle = async ()=>{
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { }
    })
    if(error) throw error
  }

  const signOut = async ()=>{
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{supabase, user, loading, signInWithGoogle, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext)