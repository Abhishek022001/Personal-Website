import React, { useState } from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Online Travel Agency',
    description: 'A comprehensive hotel booking platform built with Spring Boot, offering seamless booking experiences.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'Spring Boot', 'Web Apps'],
    githubUrl: 'https://github.com/Abhishek022001/GoStopsClone',
  },
  {
    title: 'Weather Information App',
    description: 'Real-time weather updates with detailed forecasts and interactive maps.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Web Apps'],
    githubUrl: 'https://github.com/Abhishek022001/Weather-information-getter',
  },
  {
    title: 'Currency Converter',
    description: 'A utility application for real-time currency conversion with historical rates.',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
    tags: ['Web Apps', 'JavaScript'],
    githubUrl: 'https://github.com/Abhishek022001/currency-converter-app',
  },
];

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

export function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeTag === 'All' || project.tags.includes(activeTag)
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeTag === tag
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tags, githubUrl }) {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}