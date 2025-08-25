import { useRouter } from 'next/router'
import styles from './Contact.module.css'
import { useTranslation } from '../../../lib/i18n'

const Contact = () => {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const contactInfo = [
    {
      type: 'phone',
      title: t('contact.phone'),
      details: [
        '+49 17684727849'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
    {
      type: 'email',
      title: t('contact.email'),
      details: [
        'medizinischeassistenzlue@gmail.com'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <div className="section-title">
          <h2 className="section-heading">{t('contact.title')}</h2>
        </div>
        
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            {contactInfo.map((info, index) => (
              <div 
                key={info.type} 
                className={styles.contactCard}
                data-animate
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.contactIcon}>
                  {info.icon}
                </div>
                
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactTitle}>
                    {info.title}
                  </h3>
                  
                  <div className={styles.contactDetails}>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className={styles.contactDetail}>
                        {info.type === 'email' ? (
                          <a href={`mailto:${detail}`} className={styles.contactLink}>
                            {detail}
                          </a>
                        ) : info.type === 'phone' ? (
                          <a href={`tel:${detail.replace(/[^\d+]/g, '')}`} className={styles.contactLink}>
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaContent}>
                <div className={styles.ctaIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className={styles.ctaTitle}>{t('contact.ctaTitle')}</h3>
                <p className={styles.ctaDescription}>
                  {t('contact.ctaDescription')}
                </p>
                <div className={styles.ctaButtons}>
                  <a 
                    href="tel:+4917684727849" 
                    className={`btn btn-primary ${styles.ctaBtn}`}
                  >
                    {t('contact.callNow')}
                  </a>
                  <a 
                    href="mailto:medizinischeassistenzlue@gmail.com" 
                    className={`btn btn-primary ${styles.ctaBtn}`}
                  >
                    {t('contact.sendEmail')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact