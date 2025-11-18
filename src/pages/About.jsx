import PageHead from '../components/PageHead'

export default function About(){
  return (
    <main className="py-10">
      <PageHead title="About — CORPEX Informatics" description="Company overview, focus industries, team, and success partners." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">About CORPEX Informatics</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Company Overview</h2>
            <p className="text-slate-600 mt-2">We build digital platforms that elevate quality, laboratory operations, and manufacturing performance.</p>
            <h2 className="text-xl font-semibold text-slate-900 mt-6">Focus Industries</h2>
            <ul className="list-disc pl-5 text-slate-600 mt-2 space-y-1">
              <li>Pharmaceuticals</li>
              <li>Food & Beverage</li>
              <li>Chemical Industries</li>
              <li>Biochemical Laboratories</li>
              <li>General Manufacturing</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Team</h2>
            <ul className="list-disc pl-5 text-slate-600 mt-2 space-y-1">
              <li>Development</li>
              <li>Quality Assurance</li>
              <li>Marketing</li>
            </ul>
            <h2 className="text-xl font-semibold text-slate-900 mt-6">Success Partners</h2>
            <p className="text-slate-600 mt-2">Trusted by organizations in regulated sectors to deliver compliant, scalable solutions.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
