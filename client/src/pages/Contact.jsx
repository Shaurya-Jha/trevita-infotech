import ContactForm from '../components/Contact/ContactForm'
import Hero from '../components/Hero'

export default function Contact() {
  return (
    <div>
        {/* hero section */}
        <div>
            <Hero />
        </div>

        {/* form section */}
        <div>
            <ContactForm />
        </div>
    </div>
  )
}
