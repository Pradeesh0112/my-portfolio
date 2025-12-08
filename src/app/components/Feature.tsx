/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Global carbons",
      description:
        "Engineered a Next.js site for a carbon manufacturer to boost global SEO and lead generation.",
      technologies: ["Next js", "TailwindCSS"],
      featured: true,
      url:"https://globalcarbons.com"
    },
      {
    "title": "Licensed NLP Practitioner Course",
    "description": "Unlock your true potential with our Licensed NLP Practitioner Course. Transform your personal and professional life through advanced Neuro-Linguistic Programming techniques.",
    "technologies": ["Next.js", "TailwindCSS"],
    "url": "https://nlp-register.panaceavalley.com/",
    "featured": true
  }
  ];

  return (
    <section className="py-20 bg-navy text-lightSlate">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-green mb-2 text-center"
        >
          Other Noteworthy Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Here are some of the projects I've worked on over my 2.7 years of
          experience.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative rounded-xl bg-[#112240] p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Folder Icon (like your right screenshot) */}
              <div className="flex items-center justify-between mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5V6a2.25 2.25 0 012.25-2.25h5.379c.464 0 .909.184 1.237.513l1.121 1.121c.329.329.773.513 1.237.513H18.75A2.25 2.25 0 0121 8.25v8.25A2.25 2.25 0 0118.75 18.75H5.25A2.25 2.25 0 013 16.5V7.5z"
                  />
                </svg>
                {/* External Link */}
           
           <a href={project?.url} target="_blank" >
                <ExternalLink className="w-5 h-5 text-slate hover:text-green transition" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green transition">
                {project?.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-4">{project?.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-mono">
                {project && (project?.technologies||[]).map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
