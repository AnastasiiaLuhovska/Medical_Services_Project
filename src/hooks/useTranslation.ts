import { useAppSelector, useAppDispatch } from '../store/hooks'
import { setLanguage, Language } from '../store/slices/languageSlice'
import { getTranslation } from '../utils/translations'

export const useTranslation = () => {
  const language = useAppSelector((state) => state.language.currentLanguage)
  const dispatch = useAppDispatch()

  const changeLanguage = (newLanguage: Language) => {
    dispatch(setLanguage(newLanguage))
  }

  const t = (key: string): string => {
    return getTranslation(language, key)
  }

  return {
    language,
    changeLanguage,
    t
  }
}