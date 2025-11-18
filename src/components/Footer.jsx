export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <img src="/logo.svg" alt="CORPEX Informatics" className="h-8 w-auto mb-3" />
          <p className="text-slate-600">Digital solutions for regulated industries.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
          <p className="text-slate-600">Elzohour, Egypt</p>
          <p className="text-slate-600">+20 000 000 000</p>
          <p className="text-slate-600">info@corpex.info</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Legal</h3>
          <p className="text-slate-600">© {new Date().getFullYear()} CORPEX Informatics</p>
        </div>
      </div>
    </footer>
  )
}
