import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Prices from './components/Prices/Prices'
import Appointment from './components/Appointment/Appointment'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useScrollAnimation } from './utils/useScrollAnimation'

function App() {
  useScrollAnimation()

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App