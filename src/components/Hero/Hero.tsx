
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
                <img 
                  src="/images/1.png"
                  alt="Medical Services" 
                  className={styles.doctorSvg}
                />
              </div>
              
              <div className={styles.floatingCards}>
                <div className={`${styles.floatingCard} ${styles.cardTop}`}>
                  <div className={styles.cardIcon}>📞</div>
                  <span>{t('hero.floatingCard1')}</span>
                </div>
                
                <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
                  <div className={styles.cardIcon}>🩺</div>
                  <span>{t('hero.floatingCard2')}</span>
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