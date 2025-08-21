import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Language = 'de' | 'ru' | 'en'

interface LanguageState {
  currentLanguage: Language
}

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const urlPath = window.location.pathname
    if (urlPath.startsWith('/ru')) return 'ru'
    if (urlPath.startsWith('/en')) return 'en'
  }
  return 'de'
}

const initialState: LanguageState = {
  currentLanguage: getInitialLanguage()
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload
      
      // Update URL and HTML lang attribute
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname
        const newLang = action.payload
        
        // Remove existing language prefix
        const cleanPath = currentPath.replace(/^\/(ru|en)/, '') || '/'
        
        // Add new language prefix (except for German which is default)
        const newPath = newLang === 'de' ? cleanPath : `/${newLang}${cleanPath}`
        
        // Update URL without page reload
        window.history.pushState({}, '', newPath)
        
        // Update HTML lang attribute
        document.documentElement.lang = newLang
      }
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer