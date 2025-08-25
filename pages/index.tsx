import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useTranslation } from '../lib/i18n'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import About from '../src/components/About/About'
import Services from '../src/components/Services/Services' 
import Prices from '../src/components/Prices/Prices'
import Appointment from '../src/components/Appointment/Appointment'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'
import { ToastProvider } from '../src/contexts/ToastContext'
import Toast from '../src/components/Toast/Toast'

interface HomeProps {
  locale: string
}

export default function Home({ locale }: HomeProps) {
  const { t } = useTranslation(locale)

  // SEO meta tags based on locale
  const getMetaTags = () => {
    const seoConfig = {
      de: {
        title: 'Medizinische Assistenz - Schnelle Termine in Deutschland',
        description: 'Professionelle medizinische Assistenz in Deutschland. Terminvereinbarung, Übersetzung und Begleitung bei Arztbesuchen.',
        url: '/'
      },
      ru: {
        title: 'Медицинская Консультация - Быстрая запись к врачу в Германии',
        description: 'Профессиональная медицинская помощь в Германии. Запись к врачу, переводы и сопровождение на приёмах.',
        url: '/ru'
      },
      en: {
        title: 'Medical Assistance - Quick Appointments in Germany',
        description: 'Professional medical assistance in Germany. Appointment scheduling, translation and accompaniment to doctor visits.',
        url: '/en'
      }
    }
    return seoConfig[locale as keyof typeof seoConfig] || seoConfig.de
  }

  const meta = getMetaTags()

  return (
    <ToastProvider>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com${meta.url}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://yourdomain.com${meta.url}`} />
        
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="de" href="https://yourdomain.com/" />
        <link rel="alternate" hrefLang="ru" href="https://yourdomain.com/ru" />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://yourdomain.com/" />
      </Head>

      <Header locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Prices locale={locale} />
      <Appointment locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
      <Toast />
    </ToastProvider>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale || 'de'
  
  return {
    props: {
      locale,
    },
  }
}