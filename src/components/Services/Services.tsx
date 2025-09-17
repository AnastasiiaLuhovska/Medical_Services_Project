import { useRouter } from 'next/router'
import styles from './Services.module.css'
import Image from 'next/image'
import { useTranslation } from '../../../lib/i18n'

const Services = () => {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const services = [
    {
      id: 1,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      icon: '📅',
      image: '/images/3.jpg'
    },
    {
      id: 2,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      icon: '🌐',
      image: '/images/4.png'
    },
    {
      id: 3,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      icon: '📋',
      image: '/images/5.png'
    },
    {
      id: 4,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      icon: '🩺',
      image: '/images/6.png'
    },
    {
      id: 5,
      title: t('services.service5.title'),
      description: t('services.service5.description'),
      icon: '🚑',
      image: '/images/7.png'
    },
    {
      id: 6,
      title: t('services.service6.title'),
      description: t('services.service6.description'),
      icon: '👨‍⚕️',
      image: '/images/8.png'
    },
    {
      id: 7,
      title: t('services.service7.title'),
      description: t('services.service7.description'),
      icon: '💬',
      image: '/images/9.jpg'
    },
    {
      id: 8,
      title: t('services.service8.title'),
      description: t('services.service8.description'),
      icon: '📞',
      image: '/images/10.png'
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
                  <Image
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceSvg}
                    width={300}
                    height={250}
                  />
                </div>
              </div>
              
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <span className={styles.serviceIconEmoji}>{service.icon}</span>
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