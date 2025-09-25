export interface FormSubmission {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
}

export const submitToGoogleSheets = async (formData: FormSubmission): Promise<boolean> => {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      console.log('Form submitted successfully');
      return true;
    } else {
      console.error('Form submission error:', data.error);
      return false;
    }

  } catch (error) {
    console.error('Network error:', error);
    return false;
  }
};