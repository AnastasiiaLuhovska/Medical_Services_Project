import { RootState } from './index'

export const selectCurrentLanguage = (state: RootState) => state.language.currentLanguage

export const selectContactState = (state: RootState) => state.contact

export const selectContactIsLoading = (state: RootState) => state.contact?.isLoading || false

export const selectContactError = (state: RootState) => state.contact?.error || null