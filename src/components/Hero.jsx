import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="h-64 bg-neutral-50" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
              Hand-crafted vases & modern décor
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Upcycled from recycled grips and salvaged materials. Each piece is unique, sustainable, and made with care.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#gallery" className="inline-flex items-center px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition">Explore collection</a>
              <a href="#story" className="inline-flex items-center px-5 py-3 rounded-full border border-neutral-300 hover:border-neutral-900 transition">Our ethos</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
              <img src="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx2YXNlfGVufDB8MHx8fDE3NjM1NTY1MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Handmade vase" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
