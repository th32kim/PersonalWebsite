/** Shared card content. Video assets are stored separately from live demo links. */
export type Project = {
  id: string;
  name: string;
  category: string;
  featured: boolean;
  description: string;
  technologies: readonly string[];
  githubUrl: string;
  videoUrl?: string;
  fullVideoUrl?: string;
  hasAudio?: boolean;
  captionsUrl?: string;
  demoUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
};
