import Hero from './components/hero/hero.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Logos from './components/logos/logos.jsx';
import DashboardImg from './components/dashboard-img/dashboard-img.jsx';
import Features from './components/features/features.jsx';
import Testimonials from './components/testimonials/testimonials.jsx';
import CTA from './components/cta/cta.jsx';
import Footer from './components/footer/footer.jsx';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <DashboardImg />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
