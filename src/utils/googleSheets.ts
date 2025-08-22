const url = import.meta.env.VITE_SCRIPT_URL


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
    console.log('Environment variable VITE_SCRIPT_URL:', import.meta.env.VITE_SCRIPT_URL);
    console.log('Final Script URL:', url);
    
    if (!url || url.includes('your_google_script_url_here')) {
      console.error('SCRIPT_URL не настроен правильно. URL:', url);
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

    try {
      const responseJson = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithTimestamp)
      });
      console.log('JSON Response:', responseJson);
    } catch (jsonError) {
      console.error('JSON request failed:', jsonError);
    }

    // Способ 2: Form data
    const formDataObj = new FormData();
    Object.entries(dataWithTimestamp).forEach(([key, value]) => {
      formDataObj.append(key, value.toString());
    });

    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formDataObj
    });

    console.log('Response:', response);
    return true;
  } catch (error) {
    console.error('Ошибка отправки в Google Sheets:', error);
    return false;
  }
};

