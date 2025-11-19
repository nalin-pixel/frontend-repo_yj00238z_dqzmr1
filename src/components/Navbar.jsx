import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 text-sm transition-colors ${isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-lg">
            ALMA Studio
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/shop', label: 'Shop' })}
            {navItem({ to: '/contact', label: 'Contact' })}
            <Link to="/cart" className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 hover:border-neutral-300">
              <ShoppingCart size={18} />
              <span className="text-sm">Cart</span>
            </Link>
          </nav>
          <button className="md:hidden inline-flex items-center p-2" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
            <Link to="/" className="py-2" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/shop" className="py-2" onClick={() => setOpen(false)}>Shop</Link>
            <Link to="/contact" className="py-2" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/cart" className="py-2" onClick={() => setOpen(false)}>Cart</Link>
          </div>
        </div>
      )}
    </header>
  )
}
