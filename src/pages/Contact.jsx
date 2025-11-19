import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  async function submit(e){
    e.preventDefault()
    setStatus('Sending...')
    try{
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(res.ok){
        setStatus('Thanks for reaching out! I will reply soon.')
        setForm({ name: '', email: '', message: '' })
      }else{
        const data = await res.json()
        setStatus(data?.detail || 'Could not send message just yet.')
      }
    }catch(e){
      setStatus('Could not send message just yet.')
    }
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Contact</h1>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-neutral-300" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-neutral-300" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows={5} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-neutral-300" required />
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition">Send</button>
          {status && <p className="text-sm text-neutral-600 mt-2">{status}</p>}
        </form>
      </main>
      <Footer />
    </div>
  )
}
