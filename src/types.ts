export interface Researcher {
  id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  email: string;
  specialties: string[];
  projects: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  researchers: string[];
  funding: string;
  startDate: string;
  endDate?: string;
  mediaUrls: string[];
  tags: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  doiUrl?: string;
  pdfUrl: string;
  publicationDate: string;
  journal: string;
  tags: string[];
}

export interface Media {
  id: string;
  type: 'video' | 'image' | 'document';
  url: string;
  title: string;
  caption: string;
  projectId?: string;
  tags: string[];
}

export interface Organization {
  name: string;
  description: string;
  founded: string;
  mission: string;
  contactEmail: string;
  phone?: string;
  address?: string;
}

export type ThemeMode = 'light' | 'dark';

export interface AppState {
  themeMode: ThemeMode;
  currentPath: string;
  loading: boolean;
  error?: string;
}
