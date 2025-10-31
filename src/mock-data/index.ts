import { Researcher, Project, Publication, Media, Organization } from '../types';

export const mockOrganization: Organization = {
  name: "Argil Research Institute",
  description: "Leading-edge research organization focused on advanced materials and environmental sustainability",
  founded: "2018",
  mission: "To advance scientific knowledge through interdisciplinary research that addresses critical environmental and technological challenges",
  contactEmail: "contact@argil-research.org",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Research City, RC 12345"
};

export const mockResearchers: Researcher[] = [
  {
    id: "researcher-1",
    name: "Dr. Sarah Chen",
    title: "Director of Research",
    bio: "PhD in Materials Science with 15+ years experience in advanced materials research",
    photoUrl: "/samples/sample-research-photo-1.jpg",
    email: "sarah.chen@argil-research.org",
    specialties: ["Materials Science", "Sustainable Chemistry", "Green Technology"],
    projects: ["project-1", "project-2"]
  },
  {
    id: "researcher-2",
    name: "Dr. Michael Rodriguez",
    title: "Lead Environmental Scientist",
    bio: "Environmental scientist specializing in climate impact assessment and sustainable development",
    photoUrl: "/samples/sample-research-photo-2.jpg",
    email: "michael.rodriguez@argil-research.org",
    specialties: ["Environmental Science", "Climate Research", "Sustainable Development"],
    projects: ["project-2", "project-3"]
  },
  {
    id: "researcher-3",
    name: "Prof. Emily Watson",
    title: "Senior Research Fellow",
    bio: "Professor with expertise in data analysis and computational modeling",
    photoUrl: "/samples/sample-research-photo-3.jpg",
    email: "emily.watson@argil-research.org",
    specialties: ["Data Science", "Computational Modeling", "Statistics"],
    projects: ["project-1", "project-3"]
  },
  {
    id: "researcher-4",
    name: "Dr. Ahmed Hassan",
    title: "Research Associate",
    bio: "Materials engineer focused on developing next-generation sustainable materials",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    email: "ahmed.hassan@argil-research.org",
    specialties: ["Materials Engineering", "Sustainability", "Innovation"],
    projects: ["project-1"]
  }
];

export const mockProjects: Project[] = [
  {
    id: "project-1",
    title: "Sustainable Cement Alternatives Research",
    description: "Developing low-carbon cement alternatives that reduce CO₂ emissions by 60% compared to traditional cement production",
    researchers: ["researcher-1", "researcher-3", "researcher-4"],
    funding: "$2.5M (NSF Grant)",
    startDate: "2022-01-01",
    endDate: "2024-12-31",
    mediaUrls: ["/samples/sample-research-project.jpg"],
    tags: ["Sustainability", "Materials", "Green Technology", "Construction"]
  },
  {
    id: "project-2",
    title: "Urban Heat Island Mitigation Study",
    description: "Comprehensive study of urban heat islands and deployment of advanced cooling materials in metropolitan areas",
    researchers: ["researcher-1", "researcher-2"],
    funding: "$1.8M (DOE Grant)",
    startDate: "2023-03-01",
    mediaUrls: ["media-3", "media-6"],
    tags: ["Urban Planning", "Climate Change", "Environmental Science"]
  },
  {
    id: "project-3",
    title: "Bio-Materials for Water Purification",
    description: "Developing biodegradable filter materials for efficient and sustainable water treatment solutions",
    researchers: ["researcher-2", "researcher-3"],
    funding: "$1.2M (EPA Grant)",
    startDate: "2023-06-01",
    mediaUrls: ["media-4"],
    tags: ["Water Treatment", "Bio-Materials", "Sustainability"]
  }
];

export const mockPublications: Publication[] = [
  {
    id: "pub-1",
    title: "Novel Approaches to Low-Carbon Cement Production",
    authors: ["Dr. Sarah Chen", "Prof. Emily Watson", "Dr. Ahmed Hassan"],
    abstract: "This paper presents innovative approaches to reducing carbon emissions in cement production through alternative binder materials and process optimization.",
    doiUrl: "https://doi.org/10.1234/cement-research.2024.001",
    pdfUrl: "sample-publication-1.pdf",
    publicationDate: "2024-02-15",
    journal: "Journal of Sustainable Materials",
    tags: ["Cement", "Carbon Reduction", "Materials Science"]
  },
  {
    id: "pub-2",
    title: "Impact of Advanced Materials on Urban Temperature Regulation",
    authors: ["Dr. Michael Rodriguez", "Dr. Sarah Chen"],
    abstract: "A comprehensive analysis of how specialized materials can mitigate urban heat island effects, with case studies from five major cities.",
    doiUrl: "https://doi.org/10.1234/urban-climate.2024.002",
    pdfUrl: "sample-publication-2.pdf",
    publicationDate: "2024-01-08",
    journal: "Urban Climate Journal",
    tags: ["Urban Heat Islands", "Materials", "Climate Impact"]
  },
  {
    id: "pub-3",
    title: "Biodegradable Polymers for Enhanced Water Filtration",
    authors: ["Dr. Michael Rodriguez", "Prof. Emily Watson"],
    abstract: "Development and testing of new biodegradable polymer membranes for water purification applications.",
    pdfUrl: "sample-publication-3.pdf",
    publicationDate: "2023-11-22",
    journal: "Water Research & Technology",
    tags: ["Water Purification", "Bio-Polyymers", "Filtration"]
  }
];

export const mockMedia: Media[] = [
  {
    id: "media-1",
    type: "video",
    url: "sample-video-1.mp4",
    title: "Cement Production Research Timelapse",
    caption: "Research process showing the development of sustainable cement alternatives",
    projectId: "project-1",
    tags: ["Video", "Research", "Materials"]
  },
  {
    id: "media-2",
    type: "image",
    url: "/samples/sample-research-photo-1.jpg",
    title: "Laboratory Setup for Cement Testing",
    caption: "Advanced laboratory equipment used in materials testing",
    projectId: "project-1",
    tags: ["Lab", "Equipment", "Materials"]
  },
  {
    id: "media-3",
    type: "image",
    url: "/samples/sample-research-photo-2.jpg",
    title: "Urban Temperature Study Setup",
    caption: "Sensors deployed for collecting urban heat data",
    projectId: "project-2",
    tags: ["Urban", "Sensors", "Data Collection"]
  },
  {
    id: "media-4",
    type: "image",
    url: "/samples/sample-research-photo-3.jpg",
    title: "Bio-Material Filter Prototype",
    caption: "Prototype of biodegradable water purification filter",
    projectId: "project-3",
    tags: ["Prototype", "Bio-Materials", "Water"]
  },
  {
    id: "media-5",
    type: "video",
    url: "sample-video-2.mp4",
    title: "Materials Research Presentation",
    caption: "Overview presentation of current research initiatives",
    projectId: "project-1",
    tags: ["Presentation", "Research", "Overview"]
  },
  {
    id: "media-6",
    type: "document",
    url: "sample-document-1.pdf",
    title: "Research Methodology Document",
    caption: "Detailed methodology for urban heat study",
    projectId: "project-2",
    tags: ["Documentation", "Methodology", "Urban Study"]
  }
];
