import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import EmbarazoPage from './pages/EmbarazoPage'
import BebesPage from './pages/BebesPage'
import ComunionesPage from './pages/ComunionesPage'
import NavidadPage from './pages/NavidadPage'
import ContactoPage from './pages/ContactoPage'
import AvisoLegalPage from './pages/AvisoLegalPage'
import PrivacidadPage from './pages/PrivacidadPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/embarazo" element={<EmbarazoPage />} />
          <Route path="/bebes" element={<BebesPage />} />
          <Route path="/comuniones" element={<ComunionesPage />} />
          <Route path="/navidad" element={<NavidadPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/politica-privacidad" element={<PrivacidadPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
