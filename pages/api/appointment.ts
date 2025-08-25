import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, date, time, message } = req.body

    // Here you would typically integrate with your Google Sheets API or email service
    // For now, we'll just log the data and return success
    console.log('Appointment request received:', {
      name,
      email,
      phone,
      date,
      time,
      message,
      timestamp: new Date().toISOString()
    })

    // In a real implementation, you might:
    // 1. Send email notification
    // 2. Save to Google Sheets
    // 3. Integrate with calendar systems
    // 4. Send confirmation email to client

    res.status(200).json({ 
      message: 'Appointment request submitted successfully',
      success: true 
    })
  } catch (error) {
    console.error('Error processing appointment:', error)
    res.status(500).json({ 
      message: 'Error processing your request',
      success: false 
    })
  }
}