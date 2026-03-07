import { Mail } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <a
        href="http://maps.google.com/maps?q=calle+alloza+119,+castell%C3%B3n+de+la+plana"
        target="_blank"
      >
        <MapPin />
        <span>C/ Alloza 119, Castellón de la Plana</span>
      </a>
      <a href="tel:642017128">
        <Phone />
        <span>642017128</span>
      </a>
      <a href="mailto:denisanicoletaolteanu@gmail.com">
        <Mail />
        <span>denisanicoletaolteanu@gmail.com</span>
      </a>
      <p>
        <Clock />
        <span>L-V 10:30-14:00 17:00-19:30</span>
      </p>
    </footer>
  )
}
