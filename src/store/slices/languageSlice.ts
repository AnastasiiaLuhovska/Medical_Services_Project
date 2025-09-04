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
      
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname
        const newLang = action.payload
        
        const cleanPath = currentPath.replace(/^\/(ru|en)/, '') || '/'
        
        const newPath = newLang === 'de' ? cleanPath : `/${newLang}${cleanPath}`
        
        window.history.pushState({}, '', newPath)
        document.documentElement.lang = newLang
      }
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer