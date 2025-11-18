import { Link, NavLink } from 'react-router-dom'
import { Phone, Mail, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/applications', label: 'Applications' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <img src="/logo.svg" alt="CORPEX Informatics" className="h-8 w-auto" />
            <span className="sr-only">CORPEX Informatics</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({isActive}) => `hover:text-slate-900 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+0000000000" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Phone className="h-4 w-4" /> Call</a>
            <a href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800">Request a Demo</a>
          </div>

          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {nav.map(n => (
                <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({isActive}) => `px-2 py-2 rounded ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'}`}>
                  {n.label}
                </NavLink>
              ))}
              <a href="/contact" className="px-2 py-2 rounded bg-slate-900 text-white text-center">Request a Demo</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
