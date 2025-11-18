import React from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Rocket, Building2, Cog, Database, ClipboardCheck, BarChart3, ShieldCheck, Search, Users } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const pages = [
  { path: '/', label: 'Home' },
  { path: '/solutions', label: 'Solutions' },
  { path: '/applications', label: 'Applications' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const Meta = ({ title, description }) => {
  React.useEffect(() => {
    if (title) document.title = title
    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])
  return null
}

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="w-8 h-8 rounded bg-red-600 text-white grid place-items-center">C</span>
            CORPEX Informatics
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {pages.map(p => (
              <NavLink key={p.path} to={p.path} className={({isActive}) => `text-sm font-medium hover:text-red-600 transition ${isActive ? 'text-red-600' : 'text-slate-700'}`}>
                {p.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Request a Demo</a>
          </div>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden p-2 rounded border border-slate-300">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} className="md:hidden border-t border-slate-200 bg-white">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Menu</span>
                  <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded border border-slate-300">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid gap-2">
                  {pages.map(p => (
                    <NavLink key={p.path} to={p.path} onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded hover:bg-slate-100 ${isActive ? 'text-red-600' : 'text-slate-700'}`}>
                      {p.label}
                    </NavLink>
                  ))}
                  <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded bg-red-600 text-white font-semibold text-center">Request a Demo</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3"><span className="w-7 h-7 rounded bg-red-600 text-white grid place-items-center">C</span> CORPEX</div>
            <p className="text-sm text-slate-600">Automation and informatics solutions for regulated industries.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {['CORPEX-QMS','CORPEX-LIMS','RENOVA-RDX','CORPEX-ERP','CORPEX-CRM','Lablet X4','StabLIMS','Leeuwenbook','WaterLIMS','Corpex Clinic'].map(s => (
                <li key={s}><a href="/solutions" className="hover:text-red-600">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Industries</h4>
            <ul className="space-y-2 text-sm">
              {['Pharmaceuticals','Food & Beverage','Chemical Industries','Biochemical Laboratories','General Manufacturing'].map(s => (
                <li key={s}><a href="/applications" className="hover:text-red-600">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-slate-600 flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 123-4567</p>
            <p className="text-sm text-slate-600 flex items-center gap-2"><Mail className="w-4 h-4"/> contact@corpex.info</p>
            <p className="text-sm text-slate-600 flex items-center gap-2"><MapPin className="w-4 h-4"/> 123 Innovation Ave, Tech City</p>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">© {new Date().getFullYear()} CORPEX Informatics. All rights reserved.</div>
      </footer>
    </div>
  )
}

const Hero = () => (
  <section className="relative h-[68vh] min-h-[480px] w-full overflow-hidden">
    <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white pointer-events-none" />
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Automation and Informatics for Regulated Industries</h1>
          <p className="text-lg md:text-xl text-slate-700 mb-6">Unifying QMS, LIMS, ERP and CRM into a compliant, data-driven platform designed for pharmaceuticals, healthcare, F&amp;B, chemicals and advanced labs.</p>
          <div className="flex items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700">Request a Demo</a>
            <a href="/solutions" className="px-5 py-3 rounded-md border border-slate-300 font-semibold hover:border-slate-400">Explore Solutions</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 py-16">
    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}}>
      {title && <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>}
      {subtitle && <p className="text-slate-600 mb-8">{subtitle}</p>}
      {children}
    </motion.div>
  </section>
)

const Card = ({ icon: Icon, title, text, href }) => (
  <a href={href || '#'} className="group block rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
    <div className="flex items-center gap-3 mb-3">
      {Icon && <Icon className="w-5 h-5 text-red-600" />}
      <h3 className="font-semibold text-lg">{title}</h3>
      <ChevronRight className="w-4 h-4 ml-auto text-slate-400 group-hover:translate-x-1 transition" />
    </div>
    <p className="text-sm text-slate-600">{text}</p>
  </a>
)

function HomePage() {
  return (
    <div>
      <Meta title="CORPEX Informatics | Automation & Regulatory Platforms (LIMS, QMS, ERP, CRM)" description="Modern automation and informatics for regulated industries. CORPEX-QMS, CORPEX-LIMS, ERP, CRM, CSV, data integration and technical services." />
      <Hero />
      <Section title="Unified Solutions" subtitle="Modular products that connect your quality, laboratory and operations data into a compliant digital backbone.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={ClipboardCheck} title="CORPEX-QMS" href="/solutions" text="Quality Management built for GxP: CAPA, deviations, documents, training and audits." />
          <Card icon={Database} title="CORPEX-LIMS" href="/solutions" text="Scalable LIMS for QC/QA and R&D with sample tracking, stability, and instrument integration." />
          <Card icon={Cog} title="RENOVA-RDX" href="/solutions" text="Regulatory data exchange and validation accelerator for CSV and electronic records." />
          <Card icon={Building2} title="CORPEX-ERP" href="/solutions" text="Manufacturing, inventory, and batch genealogy—traceability that satisfies auditors." />
          <Card icon={Users} title="CORPEX-CRM" href="/solutions" text="Customer, clinic and partner engagement with secure data flows and analytics." />
          <Card icon={Rocket} title="Specialized Apps" href="/solutions" text="Lablet X4, StabLIMS, Leeuwenbook, WaterLIMS, Corpex Clinic for niche lab workflows." />
        </div>
      </Section>
      <Section id="industries" title="Applications" subtitle="Purpose-built for the most demanding regulated environments.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Pharmaceuticals', d:'GMP/GDP compliant processes from batch release to stability and serialization.'},
            {t:'Food & Beverage', d:'HACCP, traceability and QC lab integration to protect brands and consumers.'},
            {t:'Chemical Industries', d:'Formulations, EHS compliance and batch records with end-to-end visibility.'},
            {t:'Biochemical Laboratories', d:'Sample lifecycle, ELN integration and instrument data capture.'},
            {t:'General Manufacturing', d:'Digital manufacturing records and SPC for continuous improvement.'},
          ].map(i => (
            <div key={i.t} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <h3 className="font-semibold text-lg mb-2">{i.t}</h3>
              <p className="text-sm text-slate-600">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Expert Services" subtitle="From integration to validation—our team ensures your deployment is audit-ready.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={Database} title="Data Integration" href="/services" text="Connect instruments, ELN/ERP/CRM and external partners with secure APIs." />
          <Card icon={ShieldCheck} title="Computer System Validation (CSV)" href="/services" text="Risk-based validation aligned with GAMP 5 and 21 CFR Part 11." />
          <Card icon={BarChart3} title="Statistical Analysis & Data Science" href="/services" text="SPC, trend analysis and predictive insights across your value chain." />
          <Card icon={Search} title="Technical Support" href="/services" text="Responsive L2/L3 support, monitoring and lifecycle management." />
          <Card icon={Users} title="Consultations" href="/services" text="Workshops, audits and roadmaps tailored to your compliance posture." />
        </div>
      </Section>
      <ContactSection />
    </div>
  )
}

function SolutionsPage() {
  const items = ['CORPEX-QMS','CORPEX-LIMS','RENOVA-RDX','CORPEX-ERP','CORPEX-CRM','Lablet X4','StabLIMS','Leeuwenbook','WaterLIMS','Corpex Clinic']
  return (
    <div>
      <Meta title="Solutions | CORPEX-QMS, CORPEX-LIMS, ERP, CRM and Specialized Lab Apps" description="Explore CORPEX solutions: QMS, LIMS, ERP, CRM, RENOVA-RDX plus Lablet X4, StabLIMS, Leeuwenbook, WaterLIMS, Corpex Clinic." />
      <Section title="Solutions" subtitle="Modular products that interoperate across quality, labs and operations.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(name => (
            <div key={name} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <h3 className="font-semibold text-lg mb-2">{name}</h3>
              <p className="text-sm text-slate-600">A modern, compliant solution to streamline processes and surface insights for regulated teams.</p>
              <a href="/applications" className="mt-3 inline-flex items-center gap-1 text-red-600 font-medium">See where it fits <ChevronRight className="w-4 h-4"/></a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

function ApplicationsPage() {
  return (
    <div>
      <Meta title="Applications | Pharmaceuticals, F&B, Chemicals, Biochemical Labs, Manufacturing" description="Industry applications of CORPEX platform: pharmaceuticals, food & beverage, chemical industries, biochemical laboratories and general manufacturing." />
      <Section title="Industries" subtitle="Targeted capabilities aligned to standards like GMP, GLP, HACCP and ISO.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {t:'Pharmaceuticals', d:'Batch release, stability studies, deviations/CAPA and serialization.'},
            {t:'Food & Beverage', d:'Supplier quality, traceability, QC and micro labs with HACCP controls.'},
            {t:'Chemical Industries', d:'Formulation management, EHS compliance and batch genealogy.'},
            {t:'Biochemical Laboratories', d:'Stability, bioassays and ELN/LIMS workflows for research teams.'},
            {t:'General Manufacturing', d:'Digital manufacturing records and SPC for production excellence.'},
          ].map(i => (
            <div key={i.t} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <h3 className="font-semibold text-lg mb-2">{i.t}</h3>
              <p className="text-sm text-slate-600">{i.d}</p>
              <a href="/services" className="mt-3 inline-flex items-center gap-1 text-red-600 font-medium">Related services <ChevronRight className="w-4 h-4"/></a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

function ServicesPage() {
  const services = [
    {t:'Data Integration', d:'Secure integrations with instruments and enterprise systems.'},
    {t:'Computer System Validation (CSV)', d:'Validation frameworks aligned to GAMP 5 and global regs.'},
    {t:'Statistical Analysis/Data Science', d:'SPC, trending, dashboards and predictive modeling.'},
    {t:'Technical Support', d:'Proactive monitoring and fast incident response.'},
    {t:'Consultations', d:'Compliance workshops, audits and digital roadmaps.'},
  ]
  return (
    <div>
      <Meta title="Services | Integration, CSV, Data Science, Support, Consulting" description="Implementation and advisory services: data integration, computer system validation (CSV), analytics, support and consulting for regulated operations." />
      <Section title="Services" subtitle="End-to-end delivery to deploy, validate and scale your platform.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.t} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <h3 className="font-semibold text-lg mb-2">{s.t}</h3>
              <p className="text-sm text-slate-600">{s.d}</p>
              <a href="/contact" className="mt-3 inline-flex items-center gap-1 text-red-600 font-medium">Contact sales <ChevronRight className="w-4 h-4"/></a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <Meta title="About CORPEX Informatics | Regulated Industry Experts" description="CORPEX Informatics builds automation and informatics for regulated industries. Focus on pharmaceuticals, F&B, chemicals and advanced labs." />
      <Section title="About CORPEX" subtitle="Our mission is to simplify compliance and amplify insight across the product lifecycle.">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold mb-2">Who we serve</h3>
            <p className="text-slate-700">We focus on pharmaceuticals, healthcare, food & beverage, chemical industries, biochemical laboratories and general manufacturing. Our platform unifies QMS, LIMS, ERP and CRM into a connected, auditable system.</p>
            <h3 className="font-semibold mt-6 mb-2">Team</h3>
            <p className="text-slate-700">Cross-functional teams in Development, QA and Marketing bring deep domain knowledge and engineering rigor to every release.</p>
            <h3 className="font-semibold mt-6 mb-2">Success partners</h3>
            <p className="text-slate-700">We collaborate with technology vendors, integrators and research institutions to deliver validated, future-ready solutions.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <ul className="space-y-3 text-sm text-slate-700 list-disc pl-5">
              <li>Modern web stack with secure APIs and audit trails</li>
              <li>Validation-ready configurations aligned with global regulations</li>
              <li>Scalable deployments from single site to multi-plant</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

const ContactSection = () => (
  <Section id="contact" title="Contact & Request a Demo" subtitle="Tell us about your needs and we’ll get back within one business day.">
    <ContactForm />
  </Section>
)

function ContactPage() {
  return (
    <div>
      <Meta title="Contact CORPEX | Request a Demo" description="Get in touch with CORPEX Informatics. Address, phone, and a demo request form for LIMS, QMS, ERP, CRM and integration services." />
      <Section title="Contact" subtitle="We’re here to help you plan, implement and validate.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3 text-slate-700">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 123-4567</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> contact@corpex.info</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 123 Innovation Ave, Tech City</p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  )
}

function ContactForm() {
  const [loading, setLoading] = React.useState(false)
  const [ok, setOk] = React.useState(false)
  const [error, setError] = React.useState('')
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setOk(false)
    setError('')
    const form = new FormData(e.currentTarget)
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      phone: form.get('phone'),
      message: form.get('message'),
      interest: form.get('interest'),
      source: 'website'
    }
    try {
      const res = await fetch(`${backend}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('Request failed')
      await res.json()
      setOk(true)
      e.currentTarget.reset()
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 p-6 bg-white grid gap-4" aria-label="Contact form">
      {ok && <div role="status" className="p-3 rounded bg-green-50 text-green-700">Thanks! We’ll be in touch shortly.</div>}
      {error && <div role="alert" className="p-3 rounded bg-red-50 text-red-700">{error}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input id="name" name="name" required className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
          <input id="company" name="company" className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="interest">Area of interest</label>
          <select id="interest" name="interest" className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500">
            {["CORPEX-QMS","CORPEX-LIMS","RENOVA-RDX","CORPEX-ERP","CORPEX-CRM","Lablet X4","StabLIMS","Leeuwenbook","WaterLIMS","Corpex Clinic","Data Integration","CSV","Analytics","Support","Consultations"].map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 disabled:opacity-60">{loading ? 'Sending…' : 'Send message'}</button>
        <span className="text-sm text-slate-600">or <a href="#" className="text-red-600 font-medium">Request a Demo</a></span>
      </div>
    </form>
  )
}

function PageContainer({ children }) {
  return <Layout>{children}</Layout>
}

function RoutesWrapper() {
  const location = useLocation()
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:8}} transition={{duration:0.2}}>
        <Routes>
          <Route path="/" element={<PageContainer><HomePage /></PageContainer>} />
          <Route path="/solutions" element={<PageContainer><SolutionsPage /></PageContainer>} />
          <Route path="/applications" element={<PageContainer><ApplicationsPage /></PageContainer>} />
          <Route path="/services" element={<PageContainer><ServicesPage /></PageContainer>} />
          <Route path="/about" element={<PageContainer><AboutPage /></PageContainer>} />
          <Route path="/contact" element={<PageContainer><ContactPage /></PageContainer>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return <RoutesWrapper />
}
