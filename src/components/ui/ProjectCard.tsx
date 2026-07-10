"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

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
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="rounded-t-lg object-cover"
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
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex px-5 py-2 font-normal transition-colors duration-300 ease-in-out cursor-pointer rounded-full bg-softOrange text-darkText hover:bg-lightYellow text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
