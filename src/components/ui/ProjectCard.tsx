"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string; 
  repoLink?: string; 
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="bg-lightBgGrey rounded-lg shadow-md overflow-hidden
                    transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
                    cursor-pointer"
    >
      <div className="relative w-full h-60 mb-4">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-medium text-gray-900 mb-4 font-manrope">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-700 text-sm mb-8">{project.description}</p>
        <div className="flex gap-4 ">
          {project.liveLink && (
            <Button
              variant="primary"
              text="Live Demo"
              className="py-2 px-4 text-sm"
            />
          )}
          {project.repoLink && (
            <Button
              variant="secondary"
              text="GitHub Repo"
              className="py-2 px-4 text-sm"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
