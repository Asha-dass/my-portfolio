"use client";

import { useState } from "react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  color: string;
  textColor: string;
}

const experiences: Experience[] = [
  {
    company: "TATA ELXSI",
    position: "ADAS Function Validation Engineer",
    duration: "2022 – 2023",
    description: "At Tata Elxsi, I specialized in the validation and verification of Advanced Driver Assistance Systems (ADAS), focusing on feature testing, integration, and regulatory compliance. I designed and executed comprehensive test scripts to validate sensor-based functionalities and autonomous driving algorithms, ensuring safety and performance standards were met. Collaborating with cross-functional teams, I contributed to the debugging and analysis of complex automotive systems, supporting the development of next-generation autonomous and safety-critical driving technologies.",
    color: "#A7EBF2",
    textColor: "text-zinc-900"
  },
  {
    company: "Chennai Sunday System Pvt. Ltd",
    position: "Full-Stack Developer",
    duration: "2023 – 2024",
    description: "As a Full-Stack Developer, I was responsible for designing and implementing dynamic, responsive user interfaces using React.js, HTML, CSS, and JavaScript, while building and managing RESTful APIs and backend logic with Node.js and MySQL. I optimized performance and conducted extensive debugging to ensure seamless user experiences and robust application behavior. Additionally, I contributed to DevOps processes, handled cloud deployments, and worked to enhance the reliability and scalability of production systems, ensuring smooth end-to-end delivery.",
    color: "#54ACBF",
    textColor: "text-zinc-900"
  },
  {
    company: "Niyati Technologies Pvt. Ltd",
    position: "Front-End Developer",
    duration: "2024 - 2025",
    description: "At Niyati Technologies, I developed and maintained responsive web interfaces using HTML, JavaScript, React.js, TypeScript, and Vue.js across multiple high-impact projects. I collaborated closely with UI/UX designers to craft modern, intuitive interfaces leveraging Bootstrap, SCSS, and Tailwind CSS for full cross-device compatibility. Working alongside backend developers, I ensured seamless API integrations and optimized front-end performance for scalability and maintainability. My role also involved active participation in code reviews, agile sprints, and project planning, contributing to the overall quality and timely delivery of products.",
    color: "#26658C",
    textColor: "text-white"
  }
];

export default function Home() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [showExperienceCard, setShowExperienceCard] = useState(false);
  const [showContactCard, setShowContactCard] = useState(false);
  const [showTechnicalSkillsModal, setShowTechnicalSkillsModal] = useState(false);
  const [showSoftSkillsModal, setShowSoftSkillsModal] = useState(false);

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  const toggleExperienceCard = () => {
    setShowExperienceCard(!showExperienceCard);
  };

  const toggleContactCard = () => {
    setShowContactCard(!showContactCard);
  };

  const openTechnicalSkillsModal = () => {
    setShowTechnicalSkillsModal(true);
  };

  const closeTechnicalSkillsModal = () => {
    setShowTechnicalSkillsModal(false);
  };

  const openSoftSkillsModal = () => {
    setShowSoftSkillsModal(true);
  };

  const closeSoftSkillsModal = () => {
    setShowSoftSkillsModal(false);
  };

  return (
    <main className="relative min-h-screen w-full text-zinc-900 dark:text-zinc-100">
      <div
        className="fixed inset-0 z-0 w-screen h-screen"
        style={{
          backgroundImage: "url('/blue-3.jpg?v=new')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative z-10 min-h-screen w-full bg-black/30">
        <section className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Portfolio</p>
          <div className="mt-3 flex items-start justify-between gap-4 overflow-visible">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-none mb-0 pb-0">
                Asha Bramadass
                <span 
                  className="ml-4 text-lg sm:text-xl font-normal text-blue-950"
                  style={{
                    textShadow: '0 0 10px rgba(167, 235, 242, 0.6), 0 0 20px rgba(84, 172, 191, 0.5), 0 0 30px rgba(38, 101, 140, 0.4)',
                    filter: 'drop-shadow(0 0 8px rgba(167, 235, 242, 0.7)) drop-shadow(0 0 12px rgba(84, 172, 191, 0.6)) drop-shadow(0 0 16px rgba(38, 101, 140, 0.5))'
                  }}
                >
                  Open to Relocation and Visa Sponsorship
                </span>
              </h1>
              <p className="mt-12 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                Frontend Developer crafting fast, accessible web experiences with React.js, Vue.js, Next.js, Node.js, MySQL, Postgres, REST APIs, TypeScript, HTML, CSS, Bootstrap and Tailwind CSS.
              </p>
            </div>
            <div className="flex flex-col items-center overflow-visible">
              <div
                className="rounded-full p-[3px] profile-border-glow"
                style={{
                  background: "linear-gradient(135deg, #A7EBF2 0%, #54ACBF 50%, #26658C 100%)"
                }}
              >
                <img
                  src="/blue-4.jfif"
                  alt="Profile"
                  className="h-32 w-32 rounded-full object-cover sm:h-44 sm:w-44"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={toggleExperienceCard}
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
            >
              {showExperienceCard ? "Hide Experience" : "View Experience"}
            </button>
            <button
              onClick={toggleContactCard}
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900/40"
            >
              {showContactCard ? "Hide Contact" : "Contact Me"}
            </button>
          </div>

          {/* First row of 2 cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Experience Card */}
            {showExperienceCard ? (
              <div
                className="rounded-lg p-[3px] shadow-sm transition-shadow hover:shadow-md"
                style={{
                  background: "linear-gradient(135deg, #A7EBF2 0%, #54ACBF 50%, #26658C 100%)"
                }}
              >
                <div className="rounded-lg bg-white p-4 dark:bg-zinc-900">
                  <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Experience</h3>
                  <div className="flex max-h-[200px] flex-col gap-3 overflow-y-auto pr-2">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        onClick={() => openModal(exp)}
                        className="cursor-pointer rounded-lg p-3 transition-transform hover:scale-[1.02]"
                        style={{ backgroundColor: exp.color }}
                      >
                        <h4 className={`font-semibold ${exp.textColor}`}>{exp.company}</h4>
                        <p className={`mt-1 text-xs ${exp.textColor === "text-white" ? "text-zinc-100" : "text-zinc-700"}`}>
                          {exp.position} | {exp.duration}
                        </p>
                        <p className={`mt-2 line-clamp-2 text-xs ${exp.textColor === "text-white" ? "text-zinc-200" : "text-zinc-600"}`}>
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
                <div className="flex flex-col items-center justify-center py-8">
                  <svg
                    className="h-12 w-12 text-zinc-400 dark:text-zinc-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <p className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Click "View Experience" to unlock
          </p>
        </div>
              </div>
            )}

            {/* Contact Me Card */}
            {showContactCard ? (
              <div
                className="rounded-lg p-[3px] shadow-sm transition-shadow hover:shadow-md"
                style={{
                  background: "linear-gradient(135deg, #A7EBF2 0%, #54ACBF 50%, #26658C 100%)"
                }}
              >
                <div
                  className="rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-white">Contact Me</h3>
                  <div className="mt-4 space-y-4">
                    {/* Phone Number */}
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href="tel:+90 8300971243"
                        className="text-white transition-colors hover:text-zinc-100"
                      >
                        +90 8300971243
                      </a>
                    </div>

                    {/* Alternative Phone Number */}
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href="tel:+91 9092042692"
                        className="text-white transition-colors hover:text-zinc-100"
                      >
                        +91 9092042692
                      </a>
                    </div>

                    {/* LinkedIn Link */}
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <a
                        href="https://www.linkedin.com/in/asha-bramadas/"
            target="_blank"
            rel="noopener noreferrer"
                        className="text-white transition-colors hover:text-zinc-100"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
                <div className="flex flex-col items-center justify-center py-8">
                  <svg
                    className="h-12 w-12 text-zinc-400 dark:text-zinc-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <p className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Click "Contact Me" to unlock
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Second row of 2 cards */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div
              className="rounded-lg p-[3px] shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #A7EBF2 0%, #54ACBF 50%, #26658C 100%)"
              }}
            >
              <div
                onClick={openSoftSkillsModal}
                className="relative cursor-pointer overflow-hidden rounded-lg p-4 min-h-[280px]"
                style={{
                  backgroundImage: "url('/blue-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent"
                }}
              >
                <h3 className="mb-3 text-xl font-semibold text-dark">Soft Skills</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                    </svg>
                    <p className="text-sm text-dark">Teamwork & Collaboration</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                    </svg>
                    <p className="text-sm text-dark">Problem-Solving, Communication...</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                    </svg>
                    <p className="text-sm text-dark">Click to view all skills</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={openTechnicalSkillsModal}
              className="cursor-pointer rounded-lg p-[3px] shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #A7EBF2 0%, #54ACBF 50%, #26658C 100%)"
              }}
            >
              <div className="rounded-lg bg-white p-4 dark:bg-zinc-900">
                <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Technical Skills</h3>
                <div className="space-y-2">
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#A7EBF2" }}>
                    <h4 className="text-sm font-semibold text-zinc-900">Languages</h4>
                    <p className="mt-1 line-clamp-1 text-xs text-zinc-700">
                      JavaScript, TypeScript, Core Java
                    </p>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#54ACBF" }}>
                    <h4 className="text-sm font-semibold text-zinc-900">Frameworks & Libraries</h4>
                    <p className="mt-1 line-clamp-1 text-xs text-zinc-700">
                      React.js, Next.js, Vue.js, Redux, Express.js...
                    </p>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#26658C" }}>
                    <h4 className="text-sm font-semibold text-white">Click to view all skills</h4>
                    <p className="mt-1 line-clamp-1 text-xs text-zinc-200">
                      Web Technologies, Backend, Database, Tools & more...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Used - Glassmorphism Container */}
          <div className="mt-12">
            <div
              className="glassmorphism-container mx-auto max-w-4xl rounded-2xl p-6 backdrop-blur-xl"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(167, 235, 242, 0.4)",
              }}
            >
              <h2 className="mb-6 text-2xl font-bold text-blue-800">Technologies Used to Build This Portfolio</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-blue-700">Languages</h3>
                  <ul className="space-y-2 text-sm text-blue-950/100">
                    <li>• TypeScript</li>
                    <li>• JavaScript</li>
                    <li>• HTML5</li>
                    <li>• CSS3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-blue-700">Frameworks</h3>
                  <ul className="space-y-2 text-sm text-blue-950/100">
                    <li>• Next.js</li>
                    <li>• React.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-blue-700">Libraries</h3>
                  <ul className="space-y-2 text-sm text-blue-950/100">
                    <li>• Tailwind CSS</li>
                    <li>• React Hooks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-blue-700">Styling</h3>
                  <ul className="space-y-2 text-sm text-blue-950/100">
                    <li>• Tailwind CSS</li>
                    <li>• Custom CSS</li>
                    <li>• Glassmorphism</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Popup */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-4"
          onClick={closeModal}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: selectedExperience.color, opacity: 0.5 }}
          />
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg p-6 shadow-2xl"
            style={{ backgroundColor: selectedExperience.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: selectedExperience.textColor === "text-white" ? "white" : "#18181b" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className={`mb-2 text-2xl font-bold ${selectedExperience.textColor}`}>
              {selectedExperience.company}
            </h2>
            <p className={`mb-4 text-sm font-medium ${selectedExperience.textColor === "text-white" ? "text-zinc-100" : "text-zinc-700"}`}>
              {selectedExperience.position} | {selectedExperience.duration}
            </p>
            <p className={`text-base leading-relaxed ${selectedExperience.textColor === "text-white" ? "text-zinc-200" : "text-zinc-600"}`}>
              {selectedExperience.description}
            </p>
          </div>
        </div>
      )}

      {/* Technical Skills Modal */}
      {showTechnicalSkillsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-4"
          onClick={closeTechnicalSkillsModal}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#54ACBF", opacity: 0.5 }}
          />
          <div
            className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-lg p-4 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #A7EBF2 0%, #54ACBF 50%, #26658C 100%)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeTechnicalSkillsModal}
              className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 transition-colors hover:bg-white/30"
              aria-label="Close"
            >
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="mb-4 text-xl font-bold text-white">Technical Skills</h2>

            <div className="space-y-2.5">
              {/* Languages */}
              <div className="rounded-lg p-3" style={{ backgroundColor: "#A7EBF2" }}>
                <h3 className="mb-1 text-base font-semibold text-zinc-900">Languages:</h3>
                <p className="text-sm text-zinc-700">JavaScript, TypeScript, Core Java</p>
              </div>

              {/* Frameworks & Libraries */}
              <div className="rounded-lg p-3" style={{ backgroundColor: "#54ACBF" }}>
                <h3 className="mb-1 text-base font-semibold text-zinc-900">Frameworks & Libraries:</h3>
                <p className="text-sm text-zinc-700">React.js, Next.js, Vue.js, Redux, Express.js, Bootstrap, Tailwind CSS, SCSS</p>
              </div>

              {/* Web Technologies */}
              <div className="rounded-lg p-3" style={{ backgroundColor: "#A7EBF2" }}>
                <h3 className="mb-1 text-base font-semibold text-zinc-900">Web Technologies:</h3>
                <p className="text-sm text-zinc-700">HTML5, CSS3, Media Queries, Responsive Web Design</p>
              </div>

              {/* Backend & Database */}
              <div className="rounded-lg p-3" style={{ backgroundColor: "#54ACBF" }}>
                <h3 className="mb-1 text-base font-semibold text-zinc-900">Backend & Database:</h3>
                <p className="text-sm text-zinc-700">Node.js, MySQL, PostgreSQL, REST / RESTful APIs</p>
              </div>

              {/* Tools & Platforms */}
              <div className="rounded-lg p-3" style={{ backgroundColor: "#26658C" }}>
                <h3 className="mb-1 text-base font-semibold text-white">Tools & Platforms:</h3>
                <p className="text-sm text-zinc-200">Visual Studio Code, Git / GitHub, Azure DevOps, CI/CD Pipelines, AI Development Tools (AI-assisted workflows)</p>
              </div>

              {/* Testing & Validation */}
              <div className="rounded-lg p-3" style={{ backgroundColor: "#26658C" }}>
                <h3 className="mb-1 text-base font-semibold text-white">Testing & Validation:</h3>
                <p className="text-sm text-zinc-200">Software Loop Testing, Function Validation, ADAS Feature Validation</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Soft Skills Modal */}
      {showSoftSkillsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-4"
          onClick={closeSoftSkillsModal}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#54ACBF", opacity: 0.5 }}
          />
          <div
            className="relative max-h-[80vh] w-full max-w-md overflow-y-auto rounded-lg p-3 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #A7EBF2 0%, #54ACBF 50%, #26658C 100%)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeSoftSkillsModal}
              className="absolute right-2 top-2 rounded-full bg-white/20 p-1 transition-colors hover:bg-white/30"
              aria-label="Close"
            >
              <svg
                className="h-3 w-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="mb-3 text-lg font-bold text-white">Soft Skills</h2>

            <div className="space-y-2">
              {/* Teamwork & Collaboration */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#A7EBF2" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Teamwork & Collaboration</p>
              </div>

              {/* Problem-Solving */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#54ACBF" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Problem-Solving</p>
              </div>

              {/* Communication Skills */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#A7EBF2" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Communication Skills</p>
              </div>

              {/* Adaptability */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#54ACBF" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Adaptability</p>
              </div>

              {/* Time Management */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#26658C" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-white">Time Management</p>
              </div>

              {/* Leadership */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#A7EBF2" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Leadership</p>
              </div>

              {/* Attention to Detail */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#54ACBF" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Attention to Detail</p>
              </div>

              {/* Analytical Thinking */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#26658C" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-white">Analytical Thinking</p>
              </div>

              {/* Continuous Learning */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#A7EBF2" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Continuous Learning</p>
              </div>

              {/* Creativity */}
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ backgroundColor: "#54ACBF" }}>
                <svg className="h-4 w-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
                <p className="text-sm text-zinc-900">Creativity</p>
              </div>
            </div>
          </div>
        </div>
      )}
      </main>
  );
}
