'use client'

import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ArrowRight, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      company: "Caskayd",
      period: "April 2025 - Present",
      role: "Co-Founder,  CEO",
      tags: ["Backend Development", "Leadership"],
      breakdown: "Led the creation and growth of Caskayd, a brand and influencer marketplace, while also handling backend development by building core systems, managing databases, and payments."
    },
    {
      id: 2,
      company: "Toraaah",
      period: "January 2025 - March 2025",
      role: "Front-end and Mobile Developer",
      tags: ["Web Development", "Mobile Development"],
      breakdown: "Developed and optimized Toraaah web and mobile apps, migrating React functionalities server-side to improve performance. Implemented and refined video playback for seamless streaming. Ensured cross platform consistency and enhanced user experience across web and mobile, using React, Next.js, Expo, and React Native."
    },
    {
      id: 3,
      company: "9mobile",
      period: "July 2022 - August 2022",
      role: "IT Intern",
      tags: ["Backend Development", "System Diagnostics"],
      breakdown: "Worked on backend systems by monitoring, optimizing, and troubleshooting services, while also performing hardware diagnostics to ensure smooth operations."
    }
  ];

  const projects = [
    {
      id: 1,
      title: "SyncHealth (Cavista '26 Hackathon Award Winner)",
      category: "Backend and AI Engineering",
      image: "/synchealth.png",
      link: "https://sync-health.vercel.app/"
    },
    {
      id: 2,
      title: "RideShare",
      category: "Full-Stack Development",
      image: "/logo.png",
      link: "https://github.com/Jacey77nDIL/RideShare"
    },
    {
      id: 3,
      title: "Toraaah",
      category: "Mobile Development",
      image: "/toraaah.png",
      link: "https://apps.apple.com/us/app/toraaah/id6748251324"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">Jason Nwaeze</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['Home', 'About', 'Portfolio'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
              >
                Send a mail
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              {['Home', 'About', 'Portfolio'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-600 hover:text-gray-900"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-8 text-sm text-gray-500 mb-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">+3</div>
                <div>Years Building Software</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">1</div>
                <div>Production App (App Store)</div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
              Hello
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              I’m a software engineer focused on backend systems, APIs, and thoughtful product engineering.
            </p>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center gap-2 text-gray-900 hover:gap-4 transition-all group"
            >
              Scroll Down <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-4/5 bg-gray-200 rounded-3xl overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Portrait"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-semibold text-gray-500 mb-4">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-16 mb-3">            
            <div>
              <div className="mb-8">
                <img
                  src="/profile2.jpg"
                  alt="About"
                  className="w-full aspect-3/4 object-cover rounded-2xl grayscale mb-8"
                />
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Designed and implemented backend APIs to support core application features, including authentication flows, data validation, and service integrations.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Worked with production codebases, collaborating with mobile and product teams to maintain, debug, and extend backend systems used in a live application.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    When I'm not coding, I enjoy listening to music, exploring new sounds, and writing about it on Substack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">© Since 2018</h2>
          <h3 className="text-4xl font-light mb-16">Explore My Developer Journey</h3>
          
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{exp.company}</h4>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ChevronDown
                      className={`shrink-0 transition-transform ${
                        expandedExp === exp.id ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </div>
                </button>
                
                {expandedExp === exp.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                    <h5 className="font-semibold mb-3">{exp.role}</h5>
                    <p className="text-gray-600 leading-relaxed mb-4">{exp.breakdown}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 mb-4">© Portfolio</h2>
            <h3 className="text-4xl font-light mb-8">Latest Works</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <a href={project.link} target="_blank">
                  <div className="aspect-4/3 bg-gray-200 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="https://github.com/Jacey77nDIL" target='_blank' className="text-sm font-medium hover:underline">View More</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Got a Vision... Let's Bring It to Life</h2>
          <p className="text-gray-600 mb-12">
            I'm currently available for freelance work or open roles. If you have a project you'd like to discuss,
            <br />please feel free to contact me at
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="tel:+2349019999049"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-900 transition-all group"
            >
              <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-900 transition-colors">
                <Phone className="group-hover:text-white transition-colors" size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-1">Phone</div>
                <div className="font-medium">+234 901 999 9049</div>
              </div>
            </a>

            <a
              href="jjaskme77@gmail.com"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-900 transition-all group"
            >
              <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-900 transition-colors">
                <Mail className="group-hover:text-white transition-colors" size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="font-medium">jjaskme77@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/Jacey77nDIL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-900 transition-all group"
            >
              <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-900 transition-colors">
                <Github className="group-hover:text-white transition-colors" size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-1">GitHub</div>
                <div className="font-medium">@Jacey77nDIL</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/jacey77n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-900 transition-all group"
            >
              <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-900 transition-colors">
                <Linkedin className="group-hover:text-white transition-colors" size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
                <div className="font-medium">Jason Nwaeze</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8 text-sm">
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-300">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-300">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-gray-300">Portfolio</button>
              <a href="https://docs.google.com/document/d/16YbCVBiV8QLtu2ZL0fJu-5tKbTn1zBqExL_LfRbLiEc/edit?usp=sharing" target='_blank' className="hover:text-gray-300">Resume</a>
            </div>
            <div className="text-2xl font-light">Jason Nwaeze &copy; 2026</div>
          </div>
        </div>
      </footer>
    </div>
  );
}