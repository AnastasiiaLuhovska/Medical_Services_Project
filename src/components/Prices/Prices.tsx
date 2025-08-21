import styles from './Prices.module.css'
import { useTranslation } from '../../hooks/useTranslation'

const Prices = () => {
  const { t } = useTranslation()

  const prices = [
    {
      service: t('services.service1.title'),
      price: t('prices.terminvereinbarung'),
      icon: '📅'
    },
    {
      service: t('services.service2.title'),
      price: t('prices.uebersetzungen'),
      icon: '🌐'
    },
    {
      service: t('services.service3.title'),
      price: t('prices.dokumentenausfuellung'),
      icon: '📋'
    },
    {
      service: t('services.service4.title'),
      price: t('prices.erstbesuch'),
      icon: '🩺'
    },
    {
      service: t('services.service5.title'),
      price: t('prices.notfall'),
      icon: '🚑'
    },
    {
      service: t('services.service6.title'),
      price: t('prices.hausarzt'),
      icon: '👨‍⚕️'
    },
    {
      service: t('services.service7.title'),
      price: t('prices.vorgespraeche'),
      icon: '💬'
    },
    {
      service: t('services.service8.title'),
      price: t('prices.telefonisch'),
      icon: '📞'
    }
  ]

  return (
    <section id="prices" className={`${styles.prices} section`}>
      <div className="container">
        <div className="section-title">
          <div className="section-subtitle">{t('prices.subtitle')}</div>
          <h2 className="section-heading">{t('prices.title')}</h2>
        </div>
        
        <div className={styles.pricesContainer}>
          <div className={styles.pricesTable}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>
                <span className={styles.headerIcon}>🛍️</span>
                {t('prices.service')}
              </div>
              <div className={styles.headerCell}>
                <span className={styles.headerIcon}>💰</span>
                {t('prices.price')}
              </div>
            </div>
            
            <div className={styles.tableBody}>
              {prices.map((item, index) => (
                <div 
                  key={index} 
                  className={styles.tableRow}
                  data-animate
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.serviceCell}>
                    <span className={styles.serviceIcon}>{item.icon}</span>
                    <span className={styles.serviceName}>{item.service}</span>
                  </div>
                  <div className={styles.priceCell}>
                    <span className={styles.priceValue}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.priceNote} data-animate>
            <div className={styles.noteIcon}>ℹ️</div>
            <p className={styles.noteText}>
              {t('prices.note')}
            </p>
          </div>
          
          <div className={styles.ctaSection} data-animate>
            <h3 className={styles.ctaTitle}>{t('hero.ctaTitle')}</h3>
            <p className={styles.ctaText}>
              {t('hero.ctaDescription')}
            </p>
            <button 
              className={`btn btn-primary ${styles.ctaButton}`}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices