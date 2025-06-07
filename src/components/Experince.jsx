import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

// Array of professional and educational experiences
const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Ajile Light Industries",
    period: "Jan 2025 - Present",
    description:
      "Developed and tested application software for advanced 3D imaging systems, and contributed to enhancing machine vision and robotics applications.",
    icon: <FaBriefcase className="text-blue-500 text-xl" />,
    type: "work",
  },
  {
    id: 2,
    role: "Undergraduate Teaching Assistant",
    company: "Carleton University",
    period: "May 2024 - Sept 2024",
    description:
      "Instructed 120+ students in core programming concepts such as OOP principles, looping mechanisms, file I/O, and recursion, by providing weekly tutorials, office hours, and assignment marking to ensure thorough understanding and academic success.",
    icon: <FaBriefcase className="text-green-500 text-xl" />,
    type: "work",
  },
  {
    id: 3,
    role: "Bachelor's in Computer Science",
    company: "Carleton University",
    period: "2022 - Present",
    description:
      "Specialized in Artificial Intelligence and Machine Learning Specialization, Minor in Mathematics.",
    icon: <FaGraduationCap className="text-purple-500 text-xl" />,
    type: "education",
  },
];

const Experience = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="250"
      id="experience"
      className="w-full py-20 px-4 sm:px-8 bg-gray-50/40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path and educational background
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden sm:block absolute left-1/2 h-full w-1 bg-red-300"></div>

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-12 flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="sm:w-1/2 p-6 rounded-xl shadow-2xl bg-white border border-red-400">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    {exp.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                </div>
                <p className="text-gray-500 italic mb-2">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>

                {/* Conditional tag */}
                {exp.type === "work" ? (
                  <div className="mt-4 px-3 py-1 rounded-full text-sm inline-block bg-blue-100 text-blue-800">
                    Work Experience
                  </div>
                ) : (
                  <div className="mt-4 px-3 py-1 rounded-full text-sm inline-block bg-purple-100 text-purple-800">
                    Education
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
