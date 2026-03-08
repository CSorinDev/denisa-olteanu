import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import EmbarazoPage from './pages/EmbarazoPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/embarazo" element={<EmbarazoPage />} />
      </Route>
    </Routes>
  )
}

export default App
