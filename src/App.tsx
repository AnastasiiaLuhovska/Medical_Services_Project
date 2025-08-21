import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastProvider } from './contexts/ToastContext'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Prices from './components/Prices/Prices'
import Appointment from './components/Appointment/Appointment'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useScrollAnimation } from './utils/useScrollAnimation'
import { useAppSelector } from './store/hooks'

const AppContent = () => {
  const language = useAppSelector(state => state.language.currentLanguage)
  useScrollAnimation()

  useEffect(() => {
    // Set initial HTML lang attribute
    document.documentElement.lang = language
    
    // Update page title and meta description based on language
    const titles = {
      de: 'Medizinische Assistenz - Schnelle Termine in Deutschland',
      ru: 'Медицинская Консультация - Быстрая запись к врачу в Германии',
      en: 'Medical Assistance - Quick Appointments in Germany'
    }
    
    const descriptions = {
      de: 'Professionelle medizinische Assistenz in Deutschland. Terminvereinbarung, Übersetzung und Begleitung bei Arztbesuchen.',
      ru: 'Профессиональная медицинская помощь в Германии. Запись к врачу, переводы и сопровождение на приёмах.',
      en: 'Professional medical assistance in Germany. Appointment scheduling, translation and accompaniment to doctor visits.'
    }
    
    document.title = titles[language]
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language])
    }
  }, [language])

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Prices />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </Provider>
  )
}

export default App