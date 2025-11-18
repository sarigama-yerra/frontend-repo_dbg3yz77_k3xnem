import PageHead from '../components/PageHead'

export default function Home(){
  return (
    <main>
      <PageHead title="CORPEX Informatics — Digital Solutions for Regulated Industries" description="QMS, LIMS, ERP/CRM and analytics solutions for pharmaceuticals, F\u0026B, chemical, and labs." />
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Operational excellence for regulated industries</h1>
          <p className="mt-6 text-lg/7 text-slate-300 max-w-2xl">Quality, laboratory, and manufacturing software built for compliance, performance, and scale.</p>
          <div className="mt-8 flex gap-3">
            <a href="/solutions" className="bg-white text-slate-900 px-5 py-3 rounded-md font-semibold">Explore Solutions</a>
            <a href="/contact" className="bg-slate-800 text-white px-5 py-3 rounded-md font-semibold border border-slate-700">Request a Demo</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">Flagship products</h2>
          <p className="text-slate-600 mt-2">Exact names preserved</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['CORPEX-QMS','CORPEX-LIMS','RENOVA-RDX','CORPEX-ERP','CORPEX-CRM','Lablet X4','StabLIMS','Leeuwenbook','WaterLIMS','Corpex Clinic'].map(p => (
              <div key={p} className="rounded-lg border border-slate-200 p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900">{p}</h3>
                <p className="text-sm text-slate-600 mt-2">Enterprise-grade software tailored to your processes.</p>
                <a href="/solutions" className="text-sm text-slate-900 font-semibold mt-3 inline-block">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
