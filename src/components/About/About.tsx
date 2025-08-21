import styles from './About.module.css'
import { useTranslation } from '../../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()
  const features = [
    {
      iconSvg: '/src/assets/images/12.svg',
      title: t('about.feature1'),
      description: 'Ihre persönlichen Daten und medizinischen Informationen sind bei uns sicher.'
    },
    {
      iconSvg: '/src/assets/icons/icon.svg',
      title: t('about.feature2'),
      description: 'Langjährige Erfahrung im deutschen Gesundheitssystem.'
    },
    {
      iconSvg: '/src/assets/images/4.svg',
      title: t('about.feature3'),
      description: 'Wir begleiten Sie zu jedem Termin und übersetzen alles für Sie.'
    },
    {
      iconSvg: '/src/assets/images/6.svg',
      title: t('about.feature4'),
      description: 'Hilfe bei komplexen Formularen und Anträgen aller Art.'
    },
    {
      iconSvg: '/src/assets/images/5.svg',
      title: t('about.feature5'),
      description: 'Wir erklären alles verständlich und nehmen uns Zeit für Sie.'
    },
    {
      iconSvg: '/src/assets/images/7.svg',
      title: t('about.feature6'),
      description: 'Jeder Kunde erhält individuelle und persönliche Betreuung.'
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
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <img 
                      src={feature.iconSvg} 
                      alt={feature.title}
                      className={styles.featureIconImage}
                    />
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
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
                <svg viewBox="0 0 500 600" className={styles.doctorsSvg}>
                  <defs>
                    <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--light-blue)" />
                      <stop offset="100%" stopColor="var(--primary-blue)" />
                    </linearGradient>
                  </defs>
                  <rect width="500" height="600" fill="url(#aboutGradient)" rx="25" />
                  
                  <circle cx="180" cy="180" r="50" fill="var(--white)" opacity="0.9" />
                  <circle cx="320" cy="160" r="45" fill="var(--white)" opacity="0.8" />
                  
                  <rect x="130" y="240" width="100" height="180" fill="var(--white)" opacity="0.7" rx="10" />
                  <rect x="275" y="220" width="90" height="170" fill="var(--white)" opacity="0.6" rx="10" />
                  
                  <circle cx="160" cy="300" r="20" fill="var(--accent-blue)" opacity="0.8" />
                  <circle cx="305" cy="280" r="18" fill="var(--accent-blue)" opacity="0.7" />
                  
                  <text x="250" y="520" textAnchor="middle" fill="var(--white)" fontSize="18" fontWeight="bold">
                    Medical Professionals
                  </text>
                </svg>
              </div>
              
              <div className={styles.statsCard}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Erfolgreiche Termine</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Partnerkliniken</div>
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