import PageHead from '../components/PageHead'

const industries = [
  'Pharmaceuticals', 'Food & Beverage', 'Chemical Industries', 'Biochemical Laboratories', 'General Manufacturing'
]

export default function Applications(){
  return (
    <main className="py-10">
      <PageHead title="Applications — CORPEX Informatics" description="Software for Pharmaceuticals, F&B, Chemical Industries, Biochemical Labs, and General Manufacturing." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Applications</h1>
        <p className="text-slate-600 mt-2">Industries we serve</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(i => (
            <article key={i} className="rounded-lg border border-slate-200 p-5 hover:shadow-md">
              <h2 className="text-lg font-semibold text-slate-900">{i}</h2>
              <p className="text-sm text-slate-600 mt-2">Accelerate compliance and productivity with tailored workflows.</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
