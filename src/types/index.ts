export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  gender: 'male' | 'female' | 'other';
  doctor: string;
  department: string;
  message: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface ContactInfo {
  type: string;
  title: string;
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
}