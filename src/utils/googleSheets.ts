// Google Sheets интеграция для отправки форм
// Инструкция по настройке:
// 1. Создайте новую Google Таблицу
// 2. Перейдите в "Расширения" -> "Apps Script"
// 3. Вставьте код doPost функции (см. инструкцию ниже)
// 4. Замените SCRIPT_URL на ваш Web App URL

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyO2gytRzKFli-BGFePXbxKkDrvZ6BbymoWxmWiKDLGiEowDkTIy3gHhCzQyvtztrFhNQ/exec'; // Замените на ваш URL

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

    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Важно для Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithTimestamp)
    });

    return true;
  } catch (error) {
    console.error('Ошибка отправки в Google Sheets:', error);
    return false;
  }
};

/*
ИНСТРУКЦИЯ ПО НАСТРОЙКЕ GOOGLE SHEETS:

1. Создайте новую Google Таблицу со следующими заголовками в первой строке:
   A1: Timestamp
   B1: Name  
   C1: Email
   D1: Phone
   E1: Date
   F1: Time
   G1: Message

2. Перейдите в "Расширения" -> "Apps Script"

3. Вставьте следующий код:

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.date,
      data.time,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

4. Нажмите "Развернуть" -> "Новое развертывание"
5. Выберите тип: "Веб-приложение"
6. Установите:
   - Выполнить как: "Я"
   - У кого есть доступ: "Все"
7. Скопируйте URL веб-приложения и замените YOUR_GOOGLE_SCRIPT_WEB_APP_URL

АЛЬТЕРНАТИВНЫЙ СПОСОБ (через Formspree или аналогичные сервисы):

Если Google Sheets сложно настроить, можно использовать Formspree:
1. Зарегистрируйтесь на https://formspree.io
2. Создайте новую форму
3. Замените SCRIPT_URL на URL от Formspree
4. Измените метод отправки на обычный fetch без mode: 'no-cors'
*/