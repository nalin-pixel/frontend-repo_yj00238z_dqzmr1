import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  )
}
