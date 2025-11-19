import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Cart(){
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Cart</h1>
        <p className="text-neutral-600">A simple checkout is enabled from each product page. For a full cart and payment gateway (Stripe/PayPal), I can add that next.</p>
      </main>
      <Footer />
    </div>
  )
}
