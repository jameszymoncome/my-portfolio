import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code, Terminal, Sparkles, ExternalLink, Menu, X, Award, Briefcase, Users, TrendingUp } from 'lucide-react';
import profileImg from '../assets/profile.png';

// Using a placeholder image - replace with your actual profile image

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">JZC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hidden sm:block">
              James Zymon Come
            </span>
          </a>

          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors duration-300 relative group font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="md:hidden mt-6 space-y-4 pb-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
              >
                Hire Me
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
          animationDelay: '1s',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="relative group">
            <img
              src={profileImg}
              alt="James Zymon Come"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500/40 shadow-2xl shadow-blue-500/30 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500" />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-3 border-4 border-slate-950 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div 
          className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full backdrop-blur-sm transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-green-300 font-medium">Available for Freelance & Full-time</span>
        </div>

        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            James Zymon Come
          </span>
        </h1>

        <div 
          className={`flex flex-wrap items-center justify-center gap-3 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span className="text-lg md:text-xl text-blue-100 font-medium">Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
            <Code className="w-5 h-5 text-purple-400" />
            <span className="text-lg md:text-xl text-purple-100 font-medium">Game Developer</span>
          </div>
        </div>

        <p 
          className={`text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Passionate developer crafting innovative digital experiences. Specialized in building scalable web applications and immersive game environments with cutting-edge technologies.
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>

        <div 
          className={`flex gap-4 justify-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://github.com/jameszymoncome"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110 backdrop-blur-sm group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110 backdrop-blur-sm group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
          </a>
          <a
            href="mailto:zymoncome14@gmail.com"
            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110 backdrop-blur-sm group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Briefcase, label: 'Projects Completed', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '10+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-400 text-lg">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer and Game Developer with a strong focus on creating elegant, efficient, and user-centered digital solutions. With expertise spanning web technologies and game development, I bring ideas to life through code.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My journey in development started with a curiosity for how things work, which evolved into a career dedicated to building impactful applications. I specialize in React, Node.js, and Unreal Engine, combining creativity with technical expertise.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or working on game prototypes. I believe in continuous learning and staying ahead of industry trends.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: '⚛️'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Express', level: 85 },
        { name: 'RESTful APIs', level: 90 },
      ],
      color: 'from-green-500 to-emerald-500',
      icon: '🔧'
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ],
      color: 'from-orange-500 to-red-500',
      icon: '💾'
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'Unreal Engine', level: 85 },
        { name: 'Blueprint', level: 90 },
        { name: 'C++', level: 75 },
        { name: '3D Modeling', level: 70 },
      ],
      color: 'from-purple-500 to-pink-500',
      icon: '🎮'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-lg">Technologies and tools I master</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'PPE Management System for LGU Daet',
      description: 'Enterprise-grade asset management system for local government units featuring real-time inventory tracking, automated reporting, barcode scanning, and comprehensive audit trails. Built with modern web technologies for optimal performance.',
      tech: ['React', 'PHP', 'MySQL', 'REST API'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '#',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack online shopping platform with secure payment gateway integration, real-time order tracking, inventory management dashboard, and customer analytics. Handles 1000+ concurrent users.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-purple-500 to-pink-500',
      link: '#',
      featured: true
    },
    {
      title: 'Game Analytics Dashboard',
      description: 'Real-time analytics platform for Unreal Engine games tracking player behavior, performance metrics, engagement statistics, and monetization data. Processes millions of events daily.',
      tech: ['React', 'Unreal Engine', 'PostgreSQL', 'WebSocket'],
      gradient: 'from-orange-500 to-red-500',
      link: '#',
      featured: false
    },
    {
      title: 'Task Management SaaS',
      description: 'Cloud-based project management tool with team collaboration features, automated workflows, time tracking, and integration with popular development tools.',
      tech: ['React', 'Node.js', 'Firebase', 'TypeScript'],
      gradient: 'from-green-500 to-emerald-500',
      link: '#',
      featured: false
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation platform leveraging machine learning to generate marketing copy, blog posts, and social media content with SEO optimization.',
      tech: ['React', 'Python', 'TensorFlow', 'OpenAI'],
      gradient: 'from-indigo-500 to-purple-500',
      link: '#',
      featured: false
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable messaging platform with end-to-end encryption, file sharing, video calls, and group chat functionality. Supports thousands of concurrent connections.',
      tech: ['React', 'Node.js', 'Socket.io', 'WebRTC'],
      gradient: 'from-pink-500 to-rose-500',
      link: '#',
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg">Showcasing my best work and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full z-10">
                  Featured
                </div>
              )}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs border border-slate-600/50 hover:border-slate-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link font-medium"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/jameszymoncome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-slate-400 text-lg">Have a project in mind? Let's discuss how I can help bring your ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:zymoncome14@gmail.com"
            className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
            <p className="text-slate-400 group-hover:text-blue-400 transition-colors font-medium">
              zymoncome14@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/jameszymoncome"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                <Github className="w-7 h-7 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-slate-400 group-hover:text-purple-400 transition-colors font-medium">
              github.com/jameszymoncome
            </p>
          </a>
        </div>

        <div className="text-center mb-12">
          <p className="text-slate-400 mb-6">Or connect with me on</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/jameszymoncome"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-slate-300 hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-300 hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:zymoncome14@gmail.com"
              className="p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-slate-300 hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Ready to Start Your Project?</h3>
          <p className="text-slate-300 text-center mb-6">
            I'm currently available for freelance work and open to discussing new opportunities. Let's create something extraordinary together.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:zymoncome14@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Me a Message
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-slate-800">
        <p className="text-slate-500 mb-4">© 2025 James Zymon Come. All rights reserved.</p>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="bg-slate-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Portfolio;