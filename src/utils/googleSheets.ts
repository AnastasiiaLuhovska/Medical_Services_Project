const url = process.env.NEXT_PUBLIC_SCRIPT_URL


export interface FormSubmission {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  timestamp?: string;
}

export const submitToGoogleSheets = async (formData: FormSubmission): Promise<boolean> => {
  try {
    if (!url) {
      console.error('NEXT_PUBLIC_SCRIPT_URL не настроен');
      return false;
    }

    const dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toLocaleString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Berlin'
      })
    };

    const formDataObj = new FormData();
    Object.entries(dataWithTimestamp).forEach(([key, value]) => {
      formDataObj.append(key, value.toString());
    });

    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formDataObj
    });

    return true; // no-cors режим всегда возвращает opaque response
  } catch (error) {
    console.error('Ошибка отправки в Google Sheets:', error);
    return false;
  }
};

