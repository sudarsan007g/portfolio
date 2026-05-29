'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';
import { CinematicFooter } from '@/components/ui/motion-footer';
import BentoItem from '@/components/ui/holographic-interface';
import { Sparkles, Cpu, Radio, Code2, X } from 'lucide-react';

export default function Home() {
  const { personal, about, skills, experience, education, projects, services, contact } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const sectionVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="relative w-full bg-background min-h-screen selection:bg-emerald-500/20">
      
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index and minimum height to allow the user 
        to scroll down and reveal the footer securely underneath.
      */}
      <main className="relative z-10 w-full bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center text-neutral-900 dark:text-neutral-50 border-b border-neutral-300 dark:border-neutral-800 shadow-xl rounded-b-[3rem] pb-32">
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">
          
          {/* 1. HERO SECTION */}
          <motion.section 
            className="min-h-screen flex flex-col justify-center items-start py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.p variants={itemVariants} className="text-emerald-600 dark:text-emerald-400 font-mono tracking-wider mb-4">
              Hello, I am
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              {personal.name}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-600 dark:text-neutral-400 mb-6">
              {personal.title}
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
              {personal.tagline}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <a href="#contact" className="px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-neutral-950 font-medium rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-400 transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 bg-transparent border border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-medium rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors">
                View Projects
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg overflow-hidden transition-colors hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                <div className="absolute inset-0 w-full h-full bg-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Resume
                </span>
              </a>
            </motion.div>
          </motion.section>

          {/* 2. ABOUT & SKILLS */}
          <motion.section 
            id="about" 
            className="py-24 border-t border-neutral-200 dark:border-neutral-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xl">01.</span> About Me
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>{about}</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-bold mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-emerald-600 dark:text-emerald-400 text-sm rounded-lg shadow-sm dark:shadow-none">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* 3. EXPERIENCE & EDUCATION */}
          <motion.section 
            id="experience" 
            className="py-24 border-t border-neutral-200 dark:border-neutral-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Experience */}
              <div>
                <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xl">02.</span> Experience
                </motion.h3>
                <div className="space-y-8">
                  {experience.map(exp => (
                    <motion.div key={exp.id} variants={itemVariants} className="relative pl-6 border-l w-full border-neutral-200 dark:border-neutral-800">
                      <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[1.5px] top-2 transform -translate-x-[5px]" />
                      <h4 className="text-xl font-bold">{exp.role}</h4>
                      <div className="text-emerald-600 dark:text-emerald-400 font-medium my-1">{exp.company} <span className="text-neutral-500 font-normal">| {exp.year}</span></div>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm leading-relaxed">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xl">03.</span> Education
                </motion.h3>
                <div className="space-y-8">
                  {education.map(edu => (
                    <motion.div key={edu.id} variants={itemVariants} className="relative pl-6 border-l w-full border-neutral-200 dark:border-neutral-800">
                      <div className="absolute w-3 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full -left-[1.5px] top-2 transform -translate-x-[5px]" />
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <div className="text-emerald-600 dark:text-emerald-400 font-medium my-1">{edu.institution} <span className="text-neutral-500 font-normal">| {edu.year}</span></div>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">{edu.score}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. PROJECTS */}
          <motion.section 
            id="projects" 
            className="py-24 border-t border-neutral-200 dark:border-neutral-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xl">04.</span> Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div 
                  layoutId={`project-${project.id}`}
                  key={project.id} 
                  variants={itemVariants} 
                  onClick={() => setSelectedProject(project)}
                  className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.3)] transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <motion.div layoutId={`project-category-${project.id}`} className="text-emerald-600 dark:text-emerald-400 font-mono text-xs mb-3">{project.category}</motion.div>
                  <motion.h4 layoutId={`project-title-${project.id}`} className="text-xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{project.title}</motion.h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm flex-grow mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 text-xs rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 5. SERVICES (Holographic Interface) */}
          <motion.section 
            id="services" 
            className="py-24 border-t border-neutral-200 dark:border-neutral-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xl">05.</span> Freelance Services
            </motion.h3>
            
            <div className="main-container bg-neutral-900 rounded-[2rem] p-8 md:p-12 mt-8 shadow-2xl overflow-hidden">
                <div className="aurora-bg"></div>
                <div className="w-full h-full relative z-10">
                    
                    <div className="bento-grid">
                        
                        <BentoItem className="col-span-1 md:col-span-2 md:row-span-2 flex flex-col justify-between p-8">
                            <svg className="animated-border"><rect width="100%" height="100%" rx="16"/></svg>
                            <div>
                                <Sparkles className="w-10 h-10 text-emerald-400 mb-6" />
                                <h2 className="text-3xl font-bold text-white mb-4">{services[0].title}</h2>
                                <p className="text-neutral-300 text-lg leading-relaxed">{services[0].description}</p>
                            </div>
                            <div className="mt-8 h-48 bg-black/40 border border-white/10 rounded-xl flex items-center justify-center text-emerald-500/50 font-mono overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                                <span className="relative z-10">[ Model Matrix Live Analysis ]</span>
                            </div>
                        </BentoItem>

                        <BentoItem className="flex flex-col items-start justify-between min-h-[220px] p-6">
                             <svg className="animated-border"><rect width="100%" height="100%" rx="16"/></svg>
                             <div className="h-full flex flex-col">
                                <Radio className="w-8 h-8 text-emerald-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mt-auto">{services[1].title}</h3>
                                <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{services[1].description}</p>
                             </div>
                        </BentoItem>

                        <BentoItem className="flex flex-col items-start justify-between min-h-[220px] p-6">
                            <svg className="animated-border"><rect width="100%" height="100%" rx="16"/></svg>
                            <div className="h-full flex flex-col">
                                <Code2 className="w-8 h-8 text-emerald-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mt-auto">{services[2].title}</h3>
                                <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{services[2].description}</p>
                            </div>
                        </BentoItem>
                        
                        <BentoItem className="col-span-1 md:col-span-3 mt-4 p-6">
                            <svg className="animated-border"><rect width="100%" height="100%" rx="16"/></svg>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                              <div>
                                <h3 className="text-xl font-bold text-white">Full-Stack Data Engineering</h3>
                                <p className="mt-2 text-neutral-400 text-sm max-w-xl">From hardware sensor arrays (IoT) to the predictive neural networks, delivering uncompromising data pipeline architecture.</p>
                              </div>
                              <a href="#contact" className="shrink-0 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-colors inline-block text-center">
                                Request a Quote
                              </a>
                            </div>
                        </BentoItem>
                    </div>
                </div>
            </div>
          </motion.section>
        </div>

        {/* Modal for Projects */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-[100]"
              />
              <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[110] p-4 sm:p-6">
                <motion.div
                  layoutId={`project-${selectedProject.id}`}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-full max-w-2xl rounded-2xl p-8 pointer-events-auto relative shadow-2xl flex flex-col"
                >
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <motion.div layoutId={`project-category-${selectedProject.id}`} className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-4">
                    {selectedProject.category}
                  </motion.div>
                  <motion.h4 layoutId={`project-title-${selectedProject.id}`} className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
                    {selectedProject.title}
                  </motion.h4>
                  
                  <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-8 leading-relaxed">
                    {selectedProject.description}
                    
                    <p className="mt-4">
                      This project demonstrates core competencies in data engineering and intelligent system design. By leveraging modern tools, the architecture ensures scalability and high performance.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h5 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.techStack.map((tech: string) => (
                        <span key={tech} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm rounded-md font-medium border border-neutral-200 dark:border-neutral-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a href="#" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors inline-block text-center shadow-lg shadow-emerald-500/20">
                        View Live Project
                      </a>
                      <a href={contact.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors inline-block text-center">
                        Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

      </main>

      {/* The Cinematic Footer is injected here (Replaces generic 06. Contact Section) */}
      <CinematicFooter />
      
    </div>
  );
}