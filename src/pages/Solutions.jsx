import PageHead from '../components/PageHead'

const products = [
  'CORPEX-QMS','CORPEX-LIMS','RENOVA-RDX','CORPEX-ERP','CORPEX-CRM','Lablet X4','StabLIMS','Leeuwenbook','WaterLIMS','Corpex Clinic'
]

export default function Solutions(){
  return (
    <main className="py-10">
      <PageHead title="Solutions — CORPEX Informatics" description="QMS, LIMS, ERP, CRM and specialized platforms including Lablet X4, StabLIMS, Leeuwenbook, WaterLIMS, Corpex Clinic." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Solutions</h1>
        <p className="text-slate-600 mt-2">Exact product names preserved.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <article key={p} className="rounded-lg border border-slate-200 p-5 hover:shadow-md">
              <h2 className="text-lg font-semibold text-slate-900">{p}</h2>
              <p className="text-sm text-slate-600 mt-2">Designed for compliance, traceability, and performance.</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
