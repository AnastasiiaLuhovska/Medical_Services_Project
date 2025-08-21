import { useTranslation } from '../../hooks/useTranslation'
import { Language } from '../../store/slices/languageSlice'
import styles from './LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation()

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'DE' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ]

  return (
    <div className={styles.languageSwitcher}>
      {languages.map((lang, index) => (
        <span key={lang.code} className={styles.languageContainer}>
          <button
            onClick={() => changeLanguage(lang.code)}
            className={`${styles.languageButton} ${
              language === lang.code ? styles.active : ''
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