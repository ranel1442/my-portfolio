import React from 'react';

const projectsData = [
  {
    id: 1,
    title: "Yomi-AI",
    description: "An advanced, AI-powered platform for learning Japanese. Features dynamic flashcards, personalized AI stories, and neural text-to-speech for full immersion.",
    techStack: ["Next.js", "Node.js", "Supabase", "Tailwind CSS", "Google Cloud TTS"],
    liveLink: "https://yomi-ai-cyan.vercel.app/",
    githubLink: "https://github.com/ranel1442/Yomi-ai",
  },
  {
    id: 2,
    title: "AnimeBlog",
    description: "A fully automated, AI-driven anime community. Features autonomous news scraping, auto-generated Instagram Reels with virtual avatars, and an interactive user forum.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Gemini AI", "Azure TTS", "Tailwind CSS"],
    liveLink: "https://anime-blog-platform.vercel.app/",
    githubLink: "https://github.com/ranel1442/anime-blog-platform",
  },
  {
    id: 3,
    title: "FileShrink",
    description: "A powerful, full-stack file compressor and converter. Independently processes PDFs, images, videos, and audio using robust open-source engines directly on the backend.",
    techStack: ["React", "TypeScript", "Node.js", "FFmpeg", "Ghostscript", "Docker"],
    liveLink: "https://file-shrink-app.vercel.app",
    githubLink: "https://github.com/ranel1442/FileShrink-App",
  },
  {
    id: 4,
    title: "J.A.R.V.I.S AI Assistant",
    description: "A futuristic desktop assistant featuring system automation, web scraping, and Generative AI. Control your PC, manage files, and generate content seamlessly via voice or text.",
    techStack: ["Python", "Google Gemini AI", "System Automation", "Speech Recognition", "GUI"],
    liveLink: null,
    githubLink: "https://github.com/ranel1442/jarvis-AI-Asistent3.0",
  },
  {
    id: 5,
    title: "Compiler-in-C",
    description: "A custom compiler built in C that parses Assembly code. It validates syntax, pinpoints errors, and translates valid source code into binary and hexadecimal machine code formats.",
    techStack: ["C", "Assembly", "Compiler Design", "Data Structures"],
    liveLink: null,
    githubLink: "https://github.com/ranel1442/Compiler-in-C",
  },
  {
    id: 6,
    title: "Deep Sharingan",
    description: "A real-time computer vision system that detects Naruto hand signs using the YOLOX deep learning object detection model to simulate ninjutsu activation.",
    techStack: ["Python", "YOLOX", "TensorFlow", "OpenCV", "ONNX"],
    liveLink: null,
    githubLink: "https://github.com/ranel1442/Naruto-Battle",
  },
  {
    id: 7,
    title: "RSVP Management System",
    description: "A full-stack event management application for tracking guest RSVPs. Features real-time attendance dashboards and automated SMS reminders scheduled via Twilio.",
    techStack: ["React", "Node.js", "Prisma ORM", "PostgreSQL", "Twilio API"],
    liveLink: null,
    githubLink: "https://github.com/ranel1442/rsvp-system-fullstack",
  },
  {
    id: 8,
    title: "Timeline Music Game",
    description: "A hybrid physical/digital card game for Israeli music history. Includes a PWA with a QR scanner and a custom automated print engine for physical card generation.",
    techStack: ["React", "TypeScript", "Supabase", "PWA", "Vite"],
    liveLink: "https://music-cards-game.vercel.app/",
    githubLink: "https://github.com/ranel1442/timeline-music-game",
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
      
      <main className="pt-20 pb-16 px-6 max-w-6xl mx-auto">
        <section id="about" className="flex flex-col items-center text-center space-y-6 mb-32 mt-12">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-500">Ranel</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Computer Science Student at the Open University & Software Developer. 
            I build intelligent full-stack web applications, system automations, and complex software solutions.
          </p>
          
          <div className="pt-8">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
              View My Work
            </a>
          </div>
        </section>

        <section id="projects" className="py-16 scroll-mt-10">
          <h3 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4 text-center md:text-left">
            Featured <span className="text-blue-500">Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
                <h4 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors text-center">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-gray-800/50 border border-gray-700 text-blue-300 text-xs px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-800/50 justify-center md:justify-start">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white bg-blue-600/20 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                      Live Site
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-gray-800 mt-20 py-10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Designed and built by RSS Web Development.</p>
        <p className="mt-1">All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;