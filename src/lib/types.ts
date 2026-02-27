export interface Project {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  location: string;
  coverImage: string;
  images: string[];
  description: string;
  services: string[];
  featured: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
