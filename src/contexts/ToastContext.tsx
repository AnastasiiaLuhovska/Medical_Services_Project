import { ReactNode } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    if (type === 'success') {
      toast.success(message)
    } else if (type === 'error') {
      toast.error(message)
    } else {
      toast(message)
    }
  }

  return { showToast }
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </>
  )
}