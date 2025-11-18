import { useState } from 'react'
import PageHead from '../components/PageHead'

export default function Contact(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try{
      const res = await fetch(`${baseUrl}/contact`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ ok:true, msg: data.message })
      e.currentTarget.reset()
    }catch(err){
      setStatus({ ok:false, msg: err.message })
    }
  }

  async function handleDemo(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget.form || e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.product = payload.area_of_interest || 'General'
    try{
      const res = await fetch(`${baseUrl}/demo-request`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Demo request failed')
      setStatus({ ok:true, msg: data.message })
    }catch(err){
      setStatus({ ok:false, msg: err.message })
    }
  }

  return (
    <main className="py-10">
      <PageHead title="Contact — CORPEX Informatics" description="Get in touch. Request a demo of CORPEX solutions." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Area of Interest</label>
                <select name="area_of_interest" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                  {['CORPEX-QMS','CORPEX-LIMS','RENOVA-RDX','CORPEX-ERP','CORPEX-CRM','Lablet X4','StabLIMS','Leeuwenbook','WaterLIMS','Corpex Clinic','Consultations'].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div className="sm:col-span-2 flex gap-3">
                <button type="submit" className="bg-slate-900 text-white px-5 py-2 rounded-md">Send</button>
                <button onClick={handleDemo} className="bg-slate-100 text-slate-900 px-5 py-2 rounded-md border border-slate-300">Request a Demo</button>
              </div>
              {status && (
                <p role="status" className={`sm:col-span-2 text-sm mt-2 ${status.ok ? 'text-green-700' : 'text-red-700'}`}>{status.msg}</p>
              )}
            </form>
          </div>
          <aside className="space-y-2 text-slate-700">
            <p className="font-semibold">Elzohour, Egypt</p>
            <p>+20 000 000 000</p>
            <p>info@corpex.info</p>
          </aside>
        </div>
      </div>
    </main>
  )
}
