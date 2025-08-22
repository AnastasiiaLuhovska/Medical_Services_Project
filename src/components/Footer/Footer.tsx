import styles from './Footer.module.css'
import { useTranslation } from '../../hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3 className={styles.logoText}>LÜ Medizinische Assistenz</h3>
              <p className={styles.tagline}>
                {t('footer.tagline')}
              </p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>{t('footer.importantLinks')}</h4>
            <ul className={styles.linkList}>
              <li><a href="#appointment" className={styles.footerLink}>{t('nav.appointment')}</a></li>
              <li><a href="#about" className={styles.footerLink}>{t('nav.about')}</a></li>
              <li><a href="#services" className={styles.footerLink}>{t('nav.services')}</a></li>
              <li><a href="#prices" className={styles.footerLink}>{t('nav.prices')}</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>{t('footer.contactUs')}</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Telefon:</span>
                <a href="tel:+4917684727849" className={styles.contactLink}>
                  +49 176 84727849
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:medizinischeassistenzlue@gmail.com" className={styles.contactLink}>
                  medizinischeassistenzlue@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer