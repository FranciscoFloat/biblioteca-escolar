import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexComponent from './components/Index'
import LibrosComponent from './components/Libros/Libros'
import FooterComponent from './shared/FooterComponents'
import HeaderComponent from './shared/HeaderComponent'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <HeaderComponent />
        <main>
          <Routes>
            <Route path="/" element={<IndexComponent />} />
            <Route path="/libros" element={<LibrosComponent />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  )
}

export default App
