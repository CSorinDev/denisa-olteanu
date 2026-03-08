import HeroSection from '../sections/HeroSection'
import NuestrasSesionesSection from '../sections/NuestrasSesionesSection.jsx'
import ReportajesSection from '../sections/ReportajesSection.jsx'
import SobreMiSection from '../sections/SobreMiSection.jsx'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SobreMiSection />
      <NuestrasSesionesSection />
      <ReportajesSection />
    </>
  )
}
