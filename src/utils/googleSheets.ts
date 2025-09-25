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

const submitViaForm = async (data: FormSubmission & { timestamp: string }): Promise<boolean> => {
  return new Promise((resolve) => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url!;
    form.target = '_blank';
    form.style.display = 'none';

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    });

    document.body.appendChild(form);

    setTimeout(() => {
      form.submit();
      document.body.removeChild(form);
      resolve(true);
    }, 100);
  });
};

export const submitToGoogleSheets = async (formData: FormSubmission): Promise<boolean> => {
  try {
    console.log('Environment check:', {
      url,
      isDefined: !!url,
      hostname: typeof window !== 'undefined' ? window.location.hostname : 'server',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server'
    });

    if (!url) {
      console.error('NEXT_PUBLIC_SCRIPT_URL не настроен');
      return false;
    }

    console.log('Отправка данных в Google Sheets:', { url, formData });

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

    // Попробуем сначала fetch
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithTimestamp)
      });

      console.log('Ответ Google Sheets получен', {
        type: response.type,
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      return true;
    } catch (fetchError) {
      console.warn('Fetch не удался, пробуем форму:', fetchError);

      // Если fetch не работает, используем форму
      if (typeof window !== 'undefined') {
        return await submitViaForm(dataWithTimestamp);
      }

      throw fetchError;
    } 
  } catch (error) {
    console.error('Ошибка отправки в Google Sheets:', error);
    return false;
  }
};

