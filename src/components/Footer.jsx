import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-sm text-slate-600 text-center">
        © {new Date().getFullYear()} PlugCo.nect — Built for connecting local services.
      </div>
    </footer>
  )
}