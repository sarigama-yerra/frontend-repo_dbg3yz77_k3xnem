import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Applications from './pages/Applications'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Test from './Test'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-slate-900 text-white px-3 py-2 rounded">Skip to content</a>
      <Header />
      <div id="main" className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="applications" element={<Applications />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
