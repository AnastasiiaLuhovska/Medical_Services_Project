import { useRouter } from 'next/router'
import { Language } from '../../../lib/translations'
import styles from './LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
  const router = useRouter()
  const currentLocale = router.locale as Language

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'DE' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ]

  const changeLanguage = (locale: Language) => {
    router.push(router.asPath, router.asPath, { locale })
  }

  return (
    <div className={styles.languageSwitcher}>
      {languages.map((lang, index) => (
        <span key={lang.code} className={styles.languageContainer}>
          <button
            onClick={() => changeLanguage(lang.code)}
            className={`${styles.languageButton} ${
              currentLocale === lang.code ? styles.active : ''
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className={styles.separator}>|</span>
          )}
        </span>
      ))}
    </div>
  )
}

export default LanguageSwitcher