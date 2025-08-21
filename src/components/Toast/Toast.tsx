import { useEffect } from 'react'
import styles from './Toast.module.css'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const Toast = ({ message, type, isVisible, onClose, duration = 4000 }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose, duration])

  if (!isVisible) return null

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅'
      case 'error':
        return '❌'
      case 'info':
        return 'ℹ️'
      default:
        return '📋'
    }
  }

  return (
    <div className={`${styles.toast} ${styles[type]} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.toastContent}>
        <span className={styles.toastIcon}>{getIcon()}</span>
        <span className={styles.toastMessage}>{message}</span>
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default Toast