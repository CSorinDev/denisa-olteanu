import HomeHero from '../sections/HomeHero.jsx'
import NuestrasSesionesSection from '../sections/NuestrasSesionesSection.jsx'
import ReportajesSection from '../sections/ReportajesSection.jsx'
import SobreMiSection from '../sections/SobreMiSection.jsx'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SobreMiSection />
      <NuestrasSesionesSection />
      <ReportajesSection />
    </>
  )
}
