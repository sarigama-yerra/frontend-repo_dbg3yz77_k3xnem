import PageHead from '../components/PageHead'

const services = [
  'Data Integration',
  'Computer System Validation (CSV)',
  'Statistical Analysis/Data Science',
  'Technical Support',
  'Consultations'
]

export default function Services(){
  return (
    <main className="py-10">
      <PageHead title="Services — CORPEX Informatics" description="Data integration, CSV, analytics, technical support, and consultations." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Services</h1>
        <p className="text-slate-600 mt-2">Expert services that ensure success</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <article key={s} className="rounded-lg border border-slate-200 p-5 hover:shadow-md">
              <h2 className="text-lg font-semibold text-slate-900">{s}</h2>
              <p className="text-sm text-slate-600 mt-2">Delivered by our team across Development, QA, and Marketing.</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
