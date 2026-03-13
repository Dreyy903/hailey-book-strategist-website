import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Services from "../Components/Services"
import Portfolio from "../Components/Portfolio"
import Testimonials from "../Components/Testimonial"
import Team from "../Components/Team"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />      
      <Footer />
    </>
  )
}