export interface FormSubmission {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
}

export interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
  details?: string;
  status?: number;
  timestamp?: string;
}

// Метод через API route (рекомендуемый)
const submitViaAPI = async (formData: FormSubmission): Promise<{ success: boolean; error?: string }> => {
  try {
    console.log('Отправка через API route:', formData);

    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data: ApiResponse = await response.json();

    console.log('Ответ API:', {
      status: response.status,
      ok: response.ok,
      data
    });

    if (response.ok && data.success) {
      return { success: true };
    } else {
      return {
        success: false,
        error: data.error || `HTTP ${response.status}: ${response.statusText}`
      };
    }

  } catch (error) {
    console.error('Ошибка API запроса:', error);
    return {
      success: false,
      error: `Ошибка сети: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
    };
  }
};

// Резервный метод через прямой запрос к Google Sheets
const submitDirectToGoogle = async (formData: FormSubmission): Promise<{ success: boolean; error?: string }> => {
  const url = process.env.NEXT_PUBLIC_SCRIPT_URL;

  if (!url) {
    return { success: false, error: 'NEXT_PUBLIC_SCRIPT_URL не настроен' };
  }

  try {
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

    console.log('Резервная отправка напрямую в Google Sheets');

    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithTimestamp)
    });

    return { success: true };

  } catch (error) {
    return {
      success: false,
      error: `Ошибка прямой отправки: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
    };
  }
};

export const submitToGoogleSheets = async (formData: FormSubmission): Promise<boolean> => {
  console.log('Начинаем отправку формы:', {
    hasData: Object.keys(formData).length > 0,
    hostname: typeof window !== 'undefined' ? window.location.hostname : 'server'
  });

  // Сначала пробуем через API route
  const apiResult = await submitViaAPI(formData);

  if (apiResult.success) {
    console.log('Успешно отправлено через API');
    return true;
  }

  console.warn('API не сработал, пробуем прямую отправку:', apiResult.error);

  // Если API не работает, пробуем прямую отправку
  const directResult = await submitDirectToGoogle(formData);

  if (directResult.success) {
    console.log('Успешно отправлено напрямую');
    return true;
  }

  console.error('Все методы отправки не сработали:', {
    apiError: apiResult.error,
    directError: directResult.error
  });

  return false;
};