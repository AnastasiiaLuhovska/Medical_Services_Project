import { createSlice } from '@reduxjs/toolkit'
import { postContact } from '../operations'
import toast from 'react-hot-toast'

interface ContactState {
  isLoading: boolean
  error: string | null
  lastSubmission: any | null
}

const initialState: ContactState = {
  isLoading: false,
  error: null,
  lastSubmission: null
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postContact.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.lastSubmission = action.payload
        state.error = null
        
        const locale = typeof window !== 'undefined' && window.location.pathname.includes('/ru') ? 'ru' :
                      typeof window !== 'undefined' && window.location.pathname.includes('/en') ? 'en' : 'de'
        
        const successMessages = {
          de: 'Anfrage erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.',
          ru: 'Запрос успешно отправлен! Мы свяжемся с вами в ближайшее время.',
          en: 'Request sent successfully! We will contact you shortly.'
        }
        
        toast.success(successMessages[locale])
      })
      .addCase(postContact.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
        
        const locale = typeof window !== 'undefined' && window.location.pathname.includes('/ru') ? 'ru' :
                      typeof window !== 'undefined' && window.location.pathname.includes('/en') ? 'en' : 'de'
        
        const errorMessages = {
          de: 'Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte kontaktieren Sie uns direkt per Email oder Telefon.',
          ru: 'Произошла ошибка при отправке вашего запроса. Пожалуйста, свяжитесь с нами напрямую по электронной почте или телефону.',
          en: 'There was an error sending your request. Please contact us directly via email or phone.'
        }
        
        toast.error(errorMessages[locale])
      })
  }
})

export const { clearError } = contactSlice.actions
export default contactSlice.reducer