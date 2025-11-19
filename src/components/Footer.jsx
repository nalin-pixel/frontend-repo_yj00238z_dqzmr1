export default function Footer(){
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} ALMA Studio — Hand-crafted, upcycled design.</p>
        <div className="text-neutral-500 text-sm flex items-center gap-4">
          <a href="/contact" className="hover:text-neutral-900">Contact</a>
          <a href="#" className="hover:text-neutral-900">Instagram</a>
          <a href="#" className="hover:text-neutral-900">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
