"use client"
import { useState } from "react";

const experiences = [
  {
    company: "Ardens Business Solutions",
    role: " Frontend Developer",
    period: "Mar 2023 - Present",
    details: [
      "Engineered API integrations and optimized backend services for smooth data retrieval and functionality",
      "Streamlined API integration and reduced package weight to enhance application performance",
      "Built HR UI modules (attendance, leave, performance, reimbursement) with geolocation tracking",
      "Developed reusable components for dynamic dropdowns, data filtering, and configurable data tables",
      "Coordinated project tasks ensuring adherence to engineering standards",
    ],
  }
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to "Starry"

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
        {/* border-l border-slate  */}
        <div className="flex md:flex-col text-sm font-mono">
          {experiences?.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-left transition-colors duration-300 border-l-2 ${
                activeIndex === idx
                  ? "text-green border-green bg-light-navy"
                  : "text-slate border-transparent hover:text-green hover:bg-light-navy/50"
              }`}
            >
              {exp?.company}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-lightest-slate">
            {experiences[activeIndex]?.role}{" "}
            <span className="text-green">@ {experiences[activeIndex]?.company}</span>
          </h3>
          <p className="text-slate text-sm mb-4">{experiences[activeIndex]?.period}</p>

          <ul className="space-y-3 text-slate text-[15px]">
            {experiences[activeIndex]?.details.map((detail, i) => (
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
