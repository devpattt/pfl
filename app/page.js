"use client";import React, { useState } from 'react';

export default function SimplifiedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      
      {/* Header Navigation */}
      <nav className="w-full z-50 bg-white border-b border-gray-100">
        <div className="w-full px-6 lg:px-12 py-6 flex justify-between items-center">
          <div className="font-bold text-xl text-black">devyuji</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#design" className="text-gray-600 hover:text-black transition-colors">Design</a>
            <a href="#photos" className="text-gray-600 hover:text-black transition-colors">Photos</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a>
            <div className="flex space-x-2 text-sm text-gray-400">
              <span>PH</span>
              <span>EN</span>
            </div>
            <a href="mailto:patsandesu@gmail.com" className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors">
              patsandesu@gmail.com
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            <a href="#design" className="block text-gray-600">Design</a>
            <a href="#photos" className="block text-gray-600">Photos</a>
            <a href="#about" className="block text-gray-600">About</a>
            <a href="mailto:patsandesu@gmail.com" className="block bg-black text-white px-4 py-2 rounded text-sm text-center">
              patsandesu@gmail.com
            </a>
          </div>
        )}
      </nav>

      {/* Main Content - Full Screen Layout */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 relative bg-white">
        {/* Intro */}
        <div className="w-full max-w-3xl mx-auto text-center mb-8">
          <p className="text-2xl mb-4 flex items-center justify-center gap-2">
            <span role="img" aria-label="wave">👋</span>
            my name is Patrick Nobleza and I am a freelance
          </p>
        </div>

        {/* Main Title */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="relative z-10 text-center">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-black leading-none">
              Webdeveloper
              <span className="inline-block align-super ml-2">
                <svg className="inline w-7 h-7 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="white"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black leading-none text-transparent stroke-text">
              & Video Editor
            </span>
          </h1>

          {/* Photo with transparent background (PNG recommended) */}
          <div className="relative flex justify-center mt-[-40px] mb-8 z-0">
            <div className="relative w-72 h-96 md:w-96 md:h-[500px] lg:w-[420px] lg:h-[540px]">
              <img 
                src="assets\img\shrekkkkkk-removebg-preview.png" // Use a PNG with transparent background
                alt="Patrick Nobleza"
                className="w-full h-full object-contain"
                style={{ background: "none" }}
              />
            </div>
          </div>
        </div>
       
        <div className="flex flex-row gap-4 justify-center mb-8">
          {/* Remove these buttons if you don't want them */}
          {/* 
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors font-medium text-base">
            You need a designer
          </button>
          <button className="border border-gray-400 text-black px-6 py-3 rounded hover:bg-gray-50 transition-colors font-medium text-base">
            You need a photographer
          </button>
          */}
        </div>

        {/* Logos/Clients (optional, add here if needed) */}
      </div>

      {/* Custom CSS for stroke text effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px #333;
          -webkit-text-fill-color: transparent;
        }
        @media (max-width: 1024px) {
          .stroke-text {
            -webkit-text-stroke: 1px #333;
          }
        }
      `}</style>












        <br></br>
      {/* Portfolio Section - Education, Achievements, Past Works */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my educational background, achievements, and professional work
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Education Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">BS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Bachelor of Science in Information technology</h4>
                      <p className="text-blue-600 font-medium">Bestlink college of the Philippines</p>
                      <p className="text-gray-500 text-sm">2021 - 2025</p>
                      <p className="text-gray-600 text-sm mt-2">
                        Specialized in Information technology and Web Development
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">HS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">School Diploma</h4>
                      <p className="text-blue-600 font-medium">Novaliches Highschool</p>
                      <p className="text-gray-500 text-sm">2018 - 2020</p>
                      <p className="text-gray-600 text-sm mt-2">
                        ICT Track with focus on Computer System Servicing
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Seminars Attended</h4>
                  <div className="space-y-2">
                    <div className="bg-blue-50 px-3 py-2 rounded-lg">
                      <span className="text-blue-800 text-sm font-medium">Understanding the Innovators Role in Digital Transformation</span>
                    </div>
                    <div className="bg-green-50 px-3 py-2 rounded-lg">
                      <span className="text-green-800 text-sm font-medium">Basic Knowledge with the Research Trends rom Multidisciplinary Perspective in Engineering, Information and Communication Technology</span>
                    </div>
                    <div className="bg-purple-50 px-3 py-2 rounded-lg">
                      <span className="text-purple-800 text-sm font-medium">Green IT Innovation in Our daily Life</span>
                    </div>
                     <div className="bg-purple-50 px-3 py-2 rounded-lg">
                      <span className="text-purple-800 text-sm font-medium">Techscape: Discover Innovation in the Cool Climes in BSIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Achievements Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Achievements</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🥇</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">First Place - University Hackathon</h4>
                      <p className="text-gray-500 text-sm">2024</p>
                      <p className="text-gray-600 text-sm mt-2">
                        Built a social impact web application in 48 hours
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">⭐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Dean's List</h4>
                      <p className="text-gray-500 text-sm">2022 - 2024</p>
                      <p className="text-gray-600 text-sm mt-2">
                        Maintained GPA above 3.5 for 4 consecutive semesters
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Open Source Contributor</h4>
                      <p className="text-gray-500 text-sm">2023 - Present</p>
                      <p className="text-gray-600 text-sm mt-2">
                        200+ contributions to various React and Next.js projects
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Innovation Award</h4>
                      <p className="text-gray-500 text-sm">2023</p>
                      <p className="text-gray-600 text-sm mt-2">
                        Recognized for developing an AI-powered study assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Past Works Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Past Works</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">E</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">E-Commerce Platform</h4>
                      <p className="text-gray-500 text-sm mb-2">Full Stack Project</p>
                      <p className="text-gray-600 text-sm mb-3">
                        Built a complete online store with React, Node.js, and MongoDB
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">T</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">Task Management App</h4>
                      <p className="text-gray-500 text-sm mb-2">Mobile & Web App</p>
                      <p className="text-gray-600 text-sm mb-3">
                        Collaborative task manager with real-time updates
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Next.js</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">TypeScript</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">Portfolio Website</h4>
                      <p className="text-gray-500 text-sm mb-2">Client Project</p>
                      <p className="text-gray-600 text-sm mb-3">
                        Responsive portfolio for a digital artist
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Tailwind</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Framer Motion</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">AI Chat Assistant</h4>
                      <p className="text-gray-500 text-sm mb-2">Personal Project</p>
                      <p className="text-gray-600 text-sm mb-3">
                        Intelligent chatbot with natural language processing
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Python</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">FastAPI</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">OpenAI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
            <div className="w-24 h-1 bg-lime-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-colors placeholder-white/60"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-colors placeholder-white/60"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-colors placeholder-white/60"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-colors placeholder-white/60"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-colors placeholder-white/60 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-4 rounded-lg transition-colors transform hover:scale-105 duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                <p className="text-blue-200 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a chat about technology and development.
                </p>
              </div>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center">
                      <span className="text-black text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-blue-200">your.email@domain.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-blue-200">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-blue-200">Your City, Country</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow me on</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white font-bold text-sm">Li</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white font-bold text-sm">Gh</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white font-bold text-sm">Tw</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white font-bold text-sm">Ig</span>
                  </a>
                </div>
              </div>
              
              {/* Availability Status */}
              <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-400">Available for new projects</span>
                </div>
                <p className="text-green-200 text-sm mt-2">
                  Currently accepting freelance and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
        </footer>
    </div>
  );
}