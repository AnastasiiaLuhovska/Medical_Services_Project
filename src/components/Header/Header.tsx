import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { smoothScrollTo } from '../../utils/scrollAnimation'
import { useTranslation } from '../../hooks/useTranslation'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.prices'), href: '#prices' },
    { label: t('nav.contact'), href: '#contact' }
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    smoothScrollTo(href)
  }

  const handleLogoClick = () => {
    smoothScrollTo('#hero')
  }


  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo} onClick={handleLogoClick}>
            <div className={styles.logoIcon}>
              <img 
                src="/assets/icons/icon.svg"
                alt="Medical Assistance Icon" 
                className={styles.iconImage}
              />
            </div>
            <span className={styles.logoText}>{t('brand.name')}</span>
          </div>
          
          <div className={styles.desktopLanguageSwitcher}>
            <LanguageSwitcher />
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <div className={styles.mobileLanguageSwitcher}>
              <LanguageSwitcher />
            </div>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className={`btn btn-primary ${styles.appointmentBtn}`}
              onClick={() => smoothScrollTo('#appointment')}
            >
              {t('nav.appointment')}
            </button>
          </nav>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header