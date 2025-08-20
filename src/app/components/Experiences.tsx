"use client"
import { useState } from "react";

const experiences = [
  {
    company: "Upstatement",
    role: "Software Engineer",
    period: "Jan – Jun 2015",
    details: [
      "Worked on front-end development with modern JavaScript and CSS.",
      "Collaborated closely with designers and backend engineers.",
      "Improved accessibility and performance for client projects.",
    ],
  },
  {
    company: "Apple",
    role: "Frontend Developer",
    period: "Jul – Dec 2015",
    details: [
      "Developed UI components for Apple internal tools.",
      "Ensured cross-browser compatibility and pixel-perfect designs.",
      "Contributed to design system improvements.",
    ],
  },
  {
    company: "Scout Studio",
    role: "Web Developer",
    period: "Jan – Jun 2016",
    details: [
      "Created websites for student-led organizations.",
      "Implemented responsive layouts with HTML, CSS, JS.",
      "Introduced automation tools to improve workflows.",
    ],
  },
  {
    company: "Starry",
    role: "Software Engineer Co-op",
    period: "Jul – Dec 2016",
    details: [
      "Engineered and improved features of Starry's Android web app using ES6, Handlebars, Backbone, Marionette, and CSS.",
      "Proposed and implemented scalable solutions to issues identified with cloud services.",
      "Collaborated with designers to ensure consistent experiences across iOS and Android apps.",
    ],
  },
  {
    company: "MullenLowe",
    role: "Frontend Engineer",
    period: "2017 – 2018",
    details: [
      "Built marketing websites with React and GSAP animations.",
      "Worked with backend APIs for content integration.",
      "Optimized code for SEO and page performance.",
    ],
  },
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Default to "Starry"

  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto py-20 px-6"
    >
      {/* Heading */}
      <h2 className="text-2xl font-bold text-lightest-slate mb-10">
        <span className="text-green font-mono mr-2">02.</span> Where I’ve Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Tabs */}
        <div className="flex md:flex-col border-l border-slate text-sm font-mono">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-left transition-colors duration-300 border-l-2 ${
                activeIndex === idx
                  ? "text-green border-green bg-light-navy"
                  : "text-slate border-transparent hover:text-green hover:bg-light-navy/50"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-lightest-slate">
            {experiences[activeIndex].role}{" "}
            <span className="text-green">@ {experiences[activeIndex].company}</span>
          </h3>
          <p className="text-slate text-sm mb-4">{experiences[activeIndex].period}</p>

          <ul className="space-y-3 text-slate text-[15px]">
            {experiences[activeIndex].details.map((detail, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green mr-3">▹</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
