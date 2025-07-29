"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description:
      "A modern and responsive e-commerce platform built with Next.js, featuring product Browse, cart management, and secure checkout.",
    imageUrl: "/images/project-ecommerce.jpg", 
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe API"],
    liveLink: "#", 
    repoLink: "#",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "An interactive dashboard for managing tasks, tracking progress, and collaborating with team members. Features drag-and-drop functionality.",
    imageUrl: "/images/project-blog.jpg", 
    technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with user authentication, private messaging, and group chats, leveraging WebSockets.",
    imageUrl: "/images/project-chat.jpg",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"],
    liveLink: "#",
    repoLink: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Focus on Impactful Results"
          subtitle="My Projects - Portfolio"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
