import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    id: "ai-website-generator",
    name: "AI Website Generator",
    category: "Generative UI",
    featured: true,
    description: "Turns natural-language prompts into live, editable website interfaces with streaming AI-generated code.",
    technologies: ["Next.js", "TypeScript", "OpenRouter", "PostgreSQL"],
    githubUrl: "https://github.com/th32kim/WebsiteGenerator",
    videoUrl: "/media/projects/WebsiteGeneratorDemo-optimized.mp4",
    fullVideoUrl: "/media/projects/WebsiteGeneratorDemo-hq.mp4",
    image: {
      src: "/images/projects/website-generator.webp",
      alt: "AI Website Generator demo showing a prompt beside the generated website interface",
    },
  },
  {
    id: "ai-agent-search-engine",
    name: "AI-Agent Search Engine",
    category: "AI agents / research",
    featured: true,
    description: "Research agent that searches Google, Bing, and Reddit, then synthesizes the results into a single answer.",
    technologies: ["Python", "LangGraph", "OpenAI", "Bright Data"],
    githubUrl: "https://github.com/th32kim/AI-Agent-SearchEngine",
    videoUrl: "/media/projects/AIAgentSearch-optimized.mp4",
    fullVideoUrl: "/media/projects/AIAgentSearch-hq.mp4",
    hasAudio: true,
    captionsUrl: "/media/projects/ai-agent-search.en.vtt",
    image: {
      src: "/images/projects/ai-agent-search.webp",
      alt: "AI-Agent Search Engine demo showing its research workflow and running terminal output",
    },
  },
  {
    id: "rag-ai-chatbot",
    name: "RAG AI Chatbot",
    category: "RAG / cloud AI",
    featured: false,
    description: "Retrieval-augmented chatbot that grounds responses in uploaded documents using AWS Bedrock and vector search.",
    technologies: ["AWS Bedrock", "OpenSearch", "LlamaIndex", "Docker"],
    githubUrl: "https://github.com/th32kim/RAG-AI-Chatbot",
  },
  {
    id: "eventbook",
    name: "Eventbook",
    category: "Full-stack engineering",
    featured: false,
    description: "Full-stack event platform for discovering, managing, and discussing events in real time.",
    technologies: ["C#", "ASP.NET Core", "React", "SignalR"],
    githubUrl: "https://github.com/th32kim/Eventbook",
  },
];
