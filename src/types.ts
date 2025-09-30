export interface Dentist {
  id: number;
  name: string;
  specialty: string;
  branch: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  publishedDate: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  patientName: string;
  service: string;
}
