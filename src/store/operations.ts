import { createAsyncThunk } from '@reduxjs/toolkit'
import { submitToGoogleSheets } from '../utils/googleSheets'

export interface AppointmentData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  message: string
}

export const postContact = createAsyncThunk(
  'contact/postContact',
  async (data: AppointmentData, { rejectWithValue }) => {
    try {
      const success = await submitToGoogleSheets(data)
      if (!success) {
        throw new Error('Failed to submit to Google Sheets')
      }
      return data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)