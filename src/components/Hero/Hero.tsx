
import styles from './Hero.module.css'
import { smoothScrollTo } from '../../utils/scrollAnimation'
import { useTranslation } from '../../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroSubtitle}>
              <span className={styles.subtitle}>{t('hero.title')}</span>
              <span className={styles.accent}>{t('hero.subtitle')}</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              {t('brand.name')}
            </h1>
            
            <p className={styles.heroDescription}>
              {t('hero.description')}
            </p>
            
            <div className={styles.heroButtons}>
              <button 
                className="btn btn-primary"
                onClick={() => smoothScrollTo('#services')}
              >
                {t('hero.services')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => smoothScrollTo('#appointment')}
              >
                {t('hero.appointment')}
              </button>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <div className={styles.doctorPlaceholder}>
                <svg viewBox="0 0 400 500" className={styles.doctorSvg}>
                  <defs>
                    <linearGradient id="doctorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--light-blue)" />
                      <stop offset="100%" stopColor="var(--accent-blue)" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#doctorGradient)" rx="20" />
                  <circle cx="200" cy="150" r="60" fill="var(--white)" opacity="0.9" />
                  <rect x="150" y="220" width="100" height="200" fill="var(--white)" opacity="0.8" rx="10" />
                  <circle cx="180" cy="280" r="25" fill="var(--primary-blue)" opacity="0.7" />
                  <text x="200" y="450" textAnchor="middle" fill="var(--white)" fontSize="16" fontWeight="bold">
                    Healthcare Professional
                  </text>
                </svg>
              </div>
              
              <div className={styles.floatingCards}>
                <div className={`${styles.floatingCard} ${styles.cardTop}`}>
                  <div className={styles.cardIcon}>📞</div>
                  <span>Schnelle Termine</span>
                </div>
                
                <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
                  <div className={styles.cardIcon}>🩺</div>
                  <span>Medizinische Begleitung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero