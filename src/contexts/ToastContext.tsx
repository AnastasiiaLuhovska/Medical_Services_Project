import { ReactNode } from 'react'

export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    // Простое браузерное уведомление
    if (type === 'success') {
      alert(`✅ ${message}`)
    } else if (type === 'error') {
      alert(`❌ ${message}`)
    } else {
      alert(`ℹ️ ${message}`)
    }
  }

  return { showToast }
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return <>{children}</>
}