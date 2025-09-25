import { NextApiRequest, NextApiResponse } from 'next'

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, date, time, message }: FormData = req.body

    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({
        error: 'Отсутствуют обязательные поля',
        missing: { name: !name, email: !email, phone: !phone, date: !date, time: !time }
      })
    }

    const url = process.env.NEXT_PUBLIC_SCRIPT_URL

    console.log('Environment variables check:', {
      hasUrl: !!url,
      nodeEnv: process.env.NODE_ENV,
      allEnvKeys: Object.keys(process.env).filter(k => k.includes('SCRIPT')),
    })

    if (!url) {
      console.error('NEXT_PUBLIC_SCRIPT_URL не настроен на сервере')
      return res.status(500).json({
        error: 'Конфигурация сервера не настроена',
        debug: {
          nodeEnv: process.env.NODE_ENV,
          availableKeys: Object.keys(process.env).filter(k => k.includes('SCRIPT'))
        }
      })
    }

    console.log('Отправляем данные в Google Sheets:', { url, hasData: !!name })

    const dataWithTimestamp = {
      name,
      email,
      phone,
      date,
      time,
      message: message || '',
      timestamp: new Date().toLocaleString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Berlin'
      })
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithTimestamp)
    })

    console.log('Ответ от Google Sheets:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      headers: Object.fromEntries(response.headers.entries())
    })

    if (response.ok) {
      return res.status(200).json({
        success: true,
        message: 'Данные успешно отправлены',
        timestamp: dataWithTimestamp.timestamp
      })
    } else {
      const errorText = await response.text()
      console.error('Ошибка Google Sheets:', errorText)

      return res.status(500).json({
        error: 'Ошибка при отправке в Google Sheets',
        details: errorText,
        status: response.status
      })
    }

  } catch (error) {
    console.error('Ошибка API:', error)

    return res.status(500).json({
      error: 'Внутренняя ошибка сервера',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}