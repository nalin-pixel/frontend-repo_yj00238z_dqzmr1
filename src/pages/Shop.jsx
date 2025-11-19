import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Shop(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load(){
      try{
        const res = await fetch(`${API}/api/products`)
        const data = await res.json()
        setItems(data)
      }catch(e){
        setError('Could not load products yet. Using samples.')
        setItems([])
      }finally{
        setLoading(false)
      }
    }
    load()
  }, [])

  const fallback = [
    { title: 'Arc Vase — Sand', slug: 'arc-vase-sand', price: 120, image: 'https://images.unsplash.com/photo-1646006409288-d520d7246870?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcmMlMjBWYXNlJTIwJUUyJTgwJTk0JTIwU2FuZHxlbnwwfDB8fHwxNzYzNTU2NTI2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Contour Vessel — Stone', slug: 'contour-vessel-stone', price: 140, image: 'https://images.unsplash.com/photo-1578269174803-7e98ab7d43bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb250b3VyJTIwVmVzc2VsJTIwJUUyJTgwJTk0JTIwU3RvbmV8ZW58MHwwfHx8MTc2MzU1NjUyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Ripple Bowl — Chalk', slug: 'ripple-bowl-chalk', price: 90, image: 'https://images.unsplash.com/photo-1589464563018-fee6a8f07abb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaXBwbGUlMjBCb3dsJTIwJUUyJTgwJTk0JTIwQ2hhbGt8ZW58MHwwfHx8MTc2MzU1NjUyN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Handle Vase — Noir', slug: 'handle-vase-noir', price: 150, image: 'https://images.unsplash.com/photo-1692185123867-7d2bcdf30cd5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYW5kbGUlMjBWYXNlJTIwJUUyJTgwJTk0JTIwTm9pcnxlbnwwfDB8fHwxNzYzNTU2NTI3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]

  const list = items.length ? items.map(p => ({...p, image: p.images?.[0]})) : fallback

  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Shop</h1>
        {loading && <p className="text-neutral-500">Loading...</p>}
        {error && <p className="text-neutral-500 mb-4">{error}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <Link key={p.slug} to={`/product/${p.slug}`} className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-medium text-neutral-900">{p.title}</h3>
                <span className="text-neutral-700">${p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
