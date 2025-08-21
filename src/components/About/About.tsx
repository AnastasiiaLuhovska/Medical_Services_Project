import { useState } from 'react'
import styles from './About.module.css'
import { useTranslation } from '../../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const features = [
    {
      icon: '🔒',
      title: t('about.feature1'),
      description: t('about.feature1.description')
    },
    {
      icon: '🎓',
      title: t('about.feature2'),
      description: t('about.feature2.description')
    },
    {
      icon: '🤝',
      title: t('about.feature3'),
      description: t('about.feature3.description')
    },
    {
      icon: '📝',
      title: t('about.feature4'),
      description: t('about.feature4.description')
    },
    {
      icon: '💬',
      title: t('about.feature5'),
      description: t('about.feature5.description')
    },
    {
      icon: '⭐',
      title: t('about.feature6'),
      description: t('about.feature6.description')
    }
  ]

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText} data-animate="fade-right">
            <div className="section-title">
              <div className="section-subtitle">{t('about.subtitle')}</div>
              <h2 className="section-heading">{t('about.title')}</h2>
            </div>
            
            <p className={styles.aboutDescription}>
              {t('about.description')}
            </p>
            
            <div className={styles.features}>
              {features.slice(0, showAllFeatures ? features.length : 3).map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <span className={styles.featureIconEmoji}>{feature.icon}</span>
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className={`${styles.readMoreBtn} ${showAllFeatures ? styles.expanded : ''}`}
              onClick={() => setShowAllFeatures(!showAllFeatures)}
            >
              {showAllFeatures ? t('about.showLess') : t('about.showMore')}
              <span className={styles.readMoreIcon}>
                {showAllFeatures ? '−' : '+'}
              </span>
            </button>
            
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
                  src="/assets/images/2.jpg"
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
      </div>
    </section>
  )
}

export default About