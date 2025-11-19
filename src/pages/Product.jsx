import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Product(){
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)
  const [status, setStatus] = useState('')

  useEffect(() => {
    async function load(){
      try{
        const res = await fetch(`${API}/api/products/${slug}`)
        if(res.ok){
          const data = await res.json()
          setProduct(data)
        }
      }catch(e){
        setProduct(null)
      }
    }
    load()
  }, [slug])

  const fallback = {
    title: 'Arc Vase — Sand',
    price: 120,
    description: 'A minimal, matte vessel with soft arcs. Made from recycled grips and mineral blend.',
    images: ['https://images.unsplash.com/photo-1612198186123-93fb3c3a4960?q=80&w=1600&auto=format&fit=crop']
  }

  const p = product || fallback

  async function checkout(){
    // Simple checkout: create order in backend (no payment gateway yet)
    try{
      setStatus('Processing...')
      const res = await fetch(`${API}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ slug, title: p.title, price: p.price, quantity: qty }],
          subtotal: p.price * qty,
          customer_name: 'Guest',
          customer_email: 'guest@example.com',
          shipping_address: 'TBD',
        })
      })
      const data = await res.json()
      if(res.ok){
        setStatus('Order received! I will follow up by email to complete payment.')
      }else{
        setStatus(data?.detail || 'Could not place order just yet.')
      }
    }catch(e){
      setStatus('Could not place order just yet.')
    }
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
              <img src={p.images?.[0]} alt={p.title} className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{p.title}</h1>
            <p className="mt-2 text-neutral-600">{p.description}</p>
            <div className="mt-4 text-2xl font-medium">${p.price}</div>
            <div className="mt-6 flex items-center gap-3">
              <input type="number" min={1} value={qty} onChange={e=>setQty(parseInt(e.target.value || '1'))} className="w-20 px-3 py-2 border border-neutral-300 rounded-lg" />
              <button onClick={checkout} className="inline-flex items-center px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition">Add to cart</button>
            </div>
            {status && <p className="mt-3 text-sm text-neutral-600">{status}</p>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
