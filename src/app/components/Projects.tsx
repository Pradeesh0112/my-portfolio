
/* eslint-disable react/no-unescaped-entities */
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import TextIcons from "./commonUi/TextIcons";
import { Tilt } from "./commonUi/Tilt";
import { SpotlightCard } from "./commonUi/SpotlightCard";
import { Magnetic } from "./commonUi/Magnetic";

const projects = [
  {
    title: "HRMS Modules Suite",
    description:
      `Developed comprehensive HR management modules with geolocation tracking and QR/barcode generation.
      Implemented solutions that reduced package weight and improved application performance
- Technologies: Next.js, Webpack, Git`,
    tags: [
      { title: "Nest.js", url: "https://skillicons.dev/icons?i=nestjs" },
      { title: "Firebase", url: "https://skillicons.dev/icons?i=firebase" },
      { title: "Next.js", url: "https://skillicons.dev/icons?i=nextjs" },
      { title: "CSS", url: "https://skillicons.dev/icons?i=css" },
      { title: "TailwindCSS", url: "https://skillicons.dev/icons?i=tailwind" },
      { title: "JS", url: "https://skillicons.dev/icons?i=js" },
    ],
    image: "/assets/generated-image.png", // replace with your image path
    links: {
      github: "",
      external: "https://abshrms.in/",
    },
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-2xl font-bold text-lightest-slate mb-10">
        <span className="text-green font-mono mr-2">03.</span> Some Things I’ve
        Built
      </h2>

      <div className="flex flex-col gap-24">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col md:flex-row items-center gap-6  ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image Card with Tilt and Spotlight */}
            <div className="md:w-3/5 w-full">
              <Tilt rotationFactor={10}>
                <SpotlightCard className="p-0 border-white/5 overflow-hidden shadow-2xl">
                  <div className="relative h-[240px] w-full group overflow-hidden">
                    <Image
                      src={project.image}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      alt={project.title}
                      width={800}
                      height={450}
                    />
                    {/* Modern Overlay */}
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </SpotlightCard>
              </Tilt>
            </div>


            {/* Text */}
            <div className="md:w-2/5 w-full text-left md:text-right">
              <p className="text-green font-mono text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-xl font-bold text-lightest-slate mb-4">
                {project.title}
              </h3>
              <div className="bg-light-navy text-slate p-6 rounded-md text-[15px] mb-4 shadow-md">
                {project.description}
              </div>
              {/* Tags */}
              <ul className="flex flex-wrap gap-3 text-slate text-xs font-mono mb-4">
                {project.tags.map((tag: any, i) => (
                  <li key={i}>
                    <TextIcons url={tag?.url} title={tag?.title} />
                  </li>
                ))}
              </ul>
              {/* Links */}
              <div className="flex gap-6 justify-start md:justify-end items-center mt-2">
                {project.links.github && (
                  <Magnetic strength={0.2}>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green transition-colors p-2"
                    >
                      <Github size={20} />
                    </a>
                  </Magnetic>
                )}
                <Magnetic strength={0.2}>
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-green transition-colors p-2"
                  >
                    <ExternalLink size={20} />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
