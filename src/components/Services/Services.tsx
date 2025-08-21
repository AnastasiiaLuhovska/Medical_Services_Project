import styles from './Services.module.css'
import { useTranslation } from '../../hooks/useTranslation'

const Services = () => {
  const { t } = useTranslation()
  const services = [
    {
      id: 1,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      iconSvg: '/src/assets/images/4.svg'
    },
    {
      id: 2,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      iconSvg: '/src/assets/images/5.svg'
    },
    {
      id: 3,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      iconSvg: '/src/assets/images/6.svg'
    },
    {
      id: 4,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      iconSvg: '/src/assets/images/7.svg'
    },
    {
      id: 5,
      title: t('services.service5.title'),
      description: t('services.service5.description'),
      iconSvg: '/src/assets/images/8.svg'
    },
    {
      id: 6,
      title: t('services.service6.title'),
      description: t('services.service6.description'),
      iconSvg: '/src/assets/images/9.svg'
    },
    {
      id: 7,
      title: t('services.service7.title'),
      description: t('services.service7.description'),
      iconSvg: '/src/assets/images/10.svg'
    },
    {
      id: 8,
      title: t('services.service8.title'),
      description: t('services.service8.description'),
      iconSvg: '/src/assets/images/11.svg'
    }
  ]

  return (
    <section id="services" className={`${styles.services} section`}>
      <div className="container">
        <div className="section-title">
          <div className="section-subtitle">{t('services.subtitle')}</div>
          <h2 className="section-heading">{t('services.title')}</h2>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={styles.serviceCard}
              data-animate="scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.serviceImage}>
                <div className={styles.servicePlaceholder}>
                  <svg viewBox="0 0 300 200" className={styles.serviceSvg}>
                    <defs>
                      <linearGradient id={`serviceGradient${service.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--light-blue)" />
                        <stop offset="100%" stopColor="var(--accent-blue)" />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="200" fill={`url(#serviceGradient${service.id})`} rx="10" />
                    
                    <circle cx="150" cy="80" r="30" fill="var(--white)" opacity="0.9" />
                    <rect x="120" y="120" width="60" height="50" fill="var(--white)" opacity="0.8" rx="5" />
                    
                    <circle cx="140" cy="140" r="12" fill="var(--primary-blue)" opacity="0.7" />
                    <circle cx="160" cy="140" r="12" fill="var(--primary-blue)" opacity="0.7" />
                    
                    <text x="150" y="190" textAnchor="middle" fill="var(--white)" fontSize="12" fontWeight="bold">
                      Medical Care
                    </text>
                  </svg>
                </div>
              </div>
              
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <img 
                    src={service.iconSvg} 
                    alt={service.title}
                    className={styles.serviceIconImage}
                  />
                </div>
                
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                
                <button 
                  className={`btn btn-secondary ${styles.serviceBtn}`}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('services.learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services