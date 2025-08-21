import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './Appointment.module.css'
import { useTranslation } from '../../hooks/useTranslation'
import { useToast } from '../../contexts/ToastContext'
import { submitToGoogleSheets } from '../../utils/googleSheets'

interface SimplifiedAppointmentFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  message: string
}

const Appointment = () => {
  const { t } = useTranslation()
  const { showToast } = useToast()
  const initialValues: SimplifiedAppointmentFormData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t('validation.nameMin'))
      .max(50, t('validation.nameMax'))
      .required(t('validation.nameRequired')),
    email: Yup.string()
      .email(t('validation.emailInvalid'))
      .required(t('validation.emailRequired')),
    phone: Yup.string()
      .matches(/^[\+]?[0-9\s\-\(\)]+$/, t('validation.phoneInvalid'))
      .required(t('validation.phoneRequired')),
    date: Yup.date()
      .min(new Date(), t('validation.datePast'))
      .required(t('validation.dateRequired')),
    time: Yup.string()
      .required(t('validation.timeRequired')),
    message: Yup.string()
      .max(500, t('validation.messageMax'))
  })


  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30',
    '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00'
  ]

  const handleSubmit = async (values: SimplifiedAppointmentFormData, { setSubmitting, resetForm }: any) => {
    try {
      console.log('Form submitted:', values)
      
      // Отправка в Google Sheets
      const success = await submitToGoogleSheets(values)
      
      if (success) {
        showToast(t('toast.success'), 'success')
        resetForm()
      } else {
        const formattedData = `
Name: ${values.name}
Email: ${values.email}
Telefon: ${values.phone}
Datum: ${values.date}
Uhrzeit: ${values.time}
Nachricht: ${values.message}

Bitte senden Sie diese Daten per Email an: medizinischeassistenzlue@gmail.com
        `
        
        if (confirm(t('toast.copyConfirm'))) {
          navigator.clipboard.writeText(formattedData)
          showToast(t('toast.copySuccess'), 'info')
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      showToast(t('toast.error'), 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="appointment" className={`${styles.appointment} section`}>
      <div className="container">
        <div className="section-title">
          <h2 className="section-heading">{t('appointment.title')}</h2>
        </div>
        
        <div className={styles.appointmentContent}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.appointmentForm}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      {t('appointment.name')} *
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={styles.formInput}
                      placeholder={t('appointment.namePlaceholder')}
                    />
                    <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      {t('appointment.email')} *
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={styles.formInput}
                      placeholder={t('appointment.emailPlaceholder')}
                    />
                    <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      {t('appointment.phone')} *
                    </label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className={styles.formInput}
                      placeholder={t('appointment.phonePlaceholder')}
                    />
                    <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="date" className={styles.formLabel}>
                      {t('appointment.date')} *
                    </label>
                    <Field
                      type="date"
                      id="date"
                      name="date"
                      className={styles.formInput}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <ErrorMessage name="date" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="time" className={styles.formLabel}>
                      {t('appointment.time')} *
                    </label>
                    <Field as="select" id="time" name="time" className={styles.formSelect}>
                      <option value="">{t('appointment.timePlaceholder')}</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time} Uhr
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="time" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    {t('appointment.message')}
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    className={styles.formTextarea}
                    placeholder={t('appointment.messagePlaceholder')}
                  />
                  <ErrorMessage name="message" component="div" className={styles.errorMessage} />
                </div>

                <div className={styles.submitContainer}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${styles.submitBtn}`}
                  >
                    {isSubmitting ? t('appointment.submitting') : t('appointment.submit')}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Appointment