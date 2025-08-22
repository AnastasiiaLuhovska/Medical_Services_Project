import styles from './About.module.css'
import { useTranslation } from '../../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()
  const features = [
    {
      icon: '🔒',
      title: t('about.feature1')
    },
    {
      icon: '🎓',
      title: t('about.feature2')
    },
    {
      icon: '🤝',
      title: t('about.feature3')
    },
    {
      icon: '📝',
      title: t('about.feature4')
    },
    {
      icon: '💬',
      title: t('about.feature5')
    },
    {
      icon: '⭐',
      title: t('about.feature6')
    }
  ]

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutMain}>
            <div className={styles.aboutText} data-animate="fade-right">
              <div className="section-title">
                <div className="section-subtitle">{t('about.subtitle')}</div>
                <h2 className="section-heading">{t('about.title')}</h2>
              </div>
              
              <p className={styles.aboutDescription}>
                {t('about.description')}
              </p>
              
              <button 
                className="btn btn-primary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('about.learnMore')}
              </button>
            </div>
            
            <div className={styles.aboutImage} data-animate="fade-left">
              <div className={styles.imageContainer}>
                <div className={styles.doctorsPlaceholder}>
                  <img 
                    src="/images/2.jpg"
                    alt="Medical Professional"
                    className={styles.doctorsSvg}
                  />
                </div>
                
                <div className={styles.statsCard}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>{t('about.stat1Number')}</div>
                    <div className={styles.statLabel}>{t('about.stat1Label')}</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>{t('about.stat2Number')}</div>
                    <div className={styles.statLabel}>{t('about.stat2Label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <span className={styles.featureIconEmoji}>{feature.icon}</span>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About