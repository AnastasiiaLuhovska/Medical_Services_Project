import { GetStaticPropsContext } from 'next'
import { translations, Language } from './translations'

export const useTranslation = (locale: string = 'de') => {
  const currentLanguage = (locale as Language) || 'de'

  const t = (key: string): string => {
    const languageTranslations = translations[currentLanguage] as Record<string, string>
    
    if (languageTranslations && languageTranslations[key]) {
      return languageTranslations[key]
    }
    
    return key
  }

  return { t, locale: currentLanguage }
}

export const getServerSideTranslations = async (locale: string = 'de') => {
  return {
    props: {
      locale,
    },
  }
}

export const getStaticTranslations = async (context: GetStaticPropsContext) => {
  const locale = context.locale || 'de'
  
  return {
    props: {
      locale,
    },
  }
}