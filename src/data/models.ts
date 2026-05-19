export interface Program {
  id: string;
  slug: string;
  title: string;
  summary: string;
  overview: string;
  audience: string;
  level?: string;
  duration: string;
  format: string;
  outcomes: string[];
  eligibility: string[];
  structure: string[];
  timings: string;
  facultyIds: string[];
  relatedPrograms: string[];
  image: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  specialization: string;
  bio: string;
  courses: string[];
  image: string;
  badges?: string[];
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQ {
  category: string;
  items: { question: string; answer: string }[];
}
