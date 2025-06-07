import React, { useState } from "react";
import portfolio from '../assets/portfolio.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import portfolio5 from '../assets/portfolio5.png';
import emailFilter from '../assets/email-filter.png';
import dictionary from '../assets/dictionary.png';
import footy from '../assets/footy.jpg';
import health from '../assets/health.png';
import nerual from '../assets/nerual.png';
import ghosthunter from '../assets/ghosthunter.jpg';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Carleton University AI Email Filter",
    description: "AI-powered email filtering system for Carleton University.",
    technologies: ["Python", "Pandas", "APIs"],
    github: "https://github.com/oualiCode/porfolio-reactJs-tailwindCss-Vite-2024-",
    demo: "https://oualicode-portfolio-reactjs-2024.netlify.app/",
    image: emailFilter
  },
  {
    id: 2,
    title: "Football Database Optimization Engine",
    description: "Optimized database engine for football statistics.",
    technologies: ["Python", "pgAdmin", "UML", "PostgreSQL"],
    github: "https://github.com/oualiCode/Portfolio-website",
    demo: "https://portfolio-website-codepink.netlify.app/",
    image: footy
  },
  {
    id: 3,
    title: "Meridian Health Tracker",
    description: "App for tracking health metrics and visualizing data.",
    technologies: ["C++", "QTCreator", "VirtualBox", "SSH"],
    github: "#",
    demo: "#",
    image: health
  },
  {
    id: 4,
    title: "Dictionary Website",
    description: "A web-based dictionary application for word definitions.",
    technologies: ["JavaScript", "HTML", "MongoDB", "APIs"],
    github: "#",
    demo: "#",
    image: dictionary
  },
  {
    id: 5,
    title: "Neural Network Image Classifier",
    description: "Image classification using neural networks.",
    technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy"],
    github: "#",
    demo: "#",
    image: nerual
  },
  {
    id: 6,
    title: "Ghost Hunter Mulithread Game",
    description: "A multithreaded game where players hunt ghosts in a haunted house.",
    technologies: ["C", "Threads", "Linux", "Makefile"],
    github: "#",
    demo: "#",
    image: ghosthunter
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - projectsPerPage : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section data-aos="fade-up" data-aos-delay="250" id="projects" className="w-full py-20 px-4 sm:px-8 
    relative bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold text-gray-100 mb-2">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works and contributions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-300 p-2
             rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <FiChevronLeft className="text-gray-700 text-xl" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-300 p-2 
            rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <FiChevronRight className="text-gray-700 text-xl" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow
                 duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-red-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full ${currentIndex === index * projectsPerPage ? 'bg-blue-600' 
                : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;