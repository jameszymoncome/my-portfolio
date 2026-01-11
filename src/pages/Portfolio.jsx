import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Terminal, ExternalLink, Menu, X, Moon, Sun, ArrowRight, Sparkles, Zap, Layout, Database, Monitor, Settings, Edit, FileText, File } from 'lucide-react';
import profile from '/portfolio_pic.png';
import html_pic from '/html.png';
import css_pic from '/css.png';
import js_pic from '/JavaScript.png';
import react_pic from '/react.png';
import tailwind_pic from '/tailwindcss.png';
import java from '/java.png';
import python from '/python.png';
import php from '/php.png';
import vb from '/vb.png';
import mongoDB from '/mongodb.png';
import mysql from '/mysql.png';
import firebase from '/firebase.png';
import github from '/github.png';
import as from '/as.png';
import vscode from '/vscode.png';
import figma from '/figma.png';
import canva from '/canva.png';
import adpremiere from '/adpremiere.png';
import adaftereffects from '/adaftereffects.png';
import capcut from '/capcut.png';
import unrealengine from '/unrealengine.png';
import word from '/word.png';
import excel from '/excel.png';
import powerpoint from '/ppt.png';
import dsmax from '/3dsmax.jpg';
import nodejs from '/nodejs.png';

function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Education', href: 'education' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Certifications', href: 'certifications' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    // Scroll listener for Navbar background
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section tracking
    const observerOptions = { threshold: [0, 0.25, 0.5, 0.75, 1] };
    const observer = new IntersectionObserver((entries) => {
      let maxVisible = { id: '', ratio: 0 };
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxVisible.ratio) {
          maxVisible = { id: entry.target.id, ratio: entry.intersectionRatio };
        }
      });
      if (maxVisible.id) setActiveSection(maxVisible.id);
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [navItems]);

  const themeColors = darkMode 
    ? 'bg-slate-950/90 border-slate-800/50 text-white' 
    : 'bg-white/90 border-gray-200/50 text-gray-900';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled ? `${themeColors} backdrop-blur-md py-3 shadow-lg` : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg transition-transform group-hover:scale-110">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            JZC
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === item.href
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : `${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} hover:bg-gray-500/10`
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <div className={`w-[1px] h-6 mx-2 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`} />
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-gray-100'}`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-gray-100'}`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={darkMode ? 'text-white' : 'text-black'} /> : <Menu className={darkMode ? 'text-white' : 'text-black'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-full left-0 w-full p-4 transition-all duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <ul className={`rounded-2xl p-4 shadow-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl mb-1 ${
                  activeSection === item.href 
                    ? 'bg-purple-600 text-white' 
                    : darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/**
 * Hero Component
 * Improved with high-performance mouse tracking and smooth animations
 */
function Hero({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
    
    let frameId;
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for 60fps performance
      frameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden pt-20 px-6 transition-colors duration-500 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Dynamic Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 800px at ${mousePos.x}px ${mousePos.y}px, ${
            darkMode ? 'rgba(124, 58, 237, 0.12)' : 'rgba(147, 51, 234, 0.08)'
          }, transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Left Content */}
        <div className={`flex-1 text-center md:text-left transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${
            darkMode ? 'bg-slate-900 border-slate-800 text-purple-400' : 'bg-white border-gray-200 text-purple-600 shadow-sm'
          }`}>
            <Sparkles size={14} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            James Zymon <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Come</span>
          </h1>

          <p className={`text-lg md:text-xl mb-8 max-w-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I enjoy building web applications while continuously improving my skills in user experience and clean code practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-xl shadow-purple-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className={`px-8 py-4 rounded-2xl font-bold border-2 transition-all ${
              darkMode ? 'border-slate-800 hover:bg-slate-900' : 'border-gray-200 hover:bg-white hover:shadow-md'
            }`}>
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className={`flex-1 flex justify-center transition-all duration-1000 delay-300 transform ${
          isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}>
          <div className="relative group">
            {/* Animated Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity animate-spin-slow" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl animate-float transform -translate-y-2">
              <img 
                src="/portfolio_pic.png" 
                alt="James Zymon Come" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Navbar, Hero };

function About({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '3+', label: 'Years Experience', icon: Zap },
    { value: '15+', label: 'Projects Completed', icon: Layout },
    { value: '10+', label: 'Happy Clients', icon: Sparkles },
    { value: '98%', label: 'Success Rate', icon: Terminal }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-32 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-1 w-12 rounded-full ${
              darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'
            }`} />
            <span className={`text-sm font-semibold tracking-wider uppercase ${
              darkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>About Me</span>
          </div>
          
          <h2 
            className={`text-5xl md:text-6xl font-bold mb-16 tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Turning Vision Into Reality
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a passionate Full Stack Developer with a strong focus on creating elegant, efficient, and user-centered digital solutions. With expertise spanning web technologies, I bring ideas to life through code.
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              My journey in development started with a curiosity for how things work, which evolved into a career dedicated to building impactful applications. I specialize in React and Node.js, combining creativity with technical expertise.
            </p>
          </div>
          
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects. I believe in continuous learning and staying ahead of industry trends.
            </p>
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <p className={`text-base italic ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "Code is like humor. When you have to explain it, it's bad." - Cory House
              </p>
            </div>
          </div>
        </div>

        {/* <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-slate-800/50 border border-slate-700 hover:border-purple-500/50' 
                  : 'bg-white border border-gray-200 hover:border-purple-500/50 shadow-sm'
              }`}
            >
              <stat.icon className={`w-8 h-8 mb-3 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <div className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>{stat.value}</div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

function Education({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationHistory = [
    {
      period: '2022 - Present',
      institution: 'Camarines Norte State College',
      degree: 'Bachelor of Science in Information Technology',
      honors: null,
    },
    {
      period: '2020 - 2022',
      institution: 'Camarines Norte Senior High School',
      degree: 'STEM Strand',
      honors: 'Graduated with High Honors',
    },
    {
      period: '2016 - 2020',
      institution: 'Moreno Integrated School',
      degree: 'High School',
      honors: 'Graduated with Honors',
    },
    {
      period: '2010 - 2016',
      institution: 'Daet Elementary School',
      degree: 'Elementary Education',
      honors: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className={`py-32 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-1 w-12 rounded-full ${
              darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'
            }`} />
            <span className={`text-sm font-semibold tracking-wider uppercase ${
              darkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>Education</span>
          </div>

          <h2 className={`text-5xl md:text-6xl font-bold mb-16 tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education & Achievements
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-4 top-0 bottom-0 w-1 ${
            darkMode ? 'bg-gradient-to-b from-purple-600 via-blue-600 to-indigo-600' : 'bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500'
          }`} />

          {/* Timeline Items */}
          <div className="space-y-8 relative">
            {educationHistory.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="relative flex items-start gap-8">
                  <div className={`absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                    darkMode ? 'bg-slate-950 border-purple-600' : 'bg-white border-purple-500'
                  } transform -translate-x-2`}>
                    <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-purple-500'}`} />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-slate-900 border border-slate-800 hover:border-purple-600/50'
                      : 'bg-gray-50 border border-gray-200 hover:border-purple-400/50 shadow-md'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className={`text-xl font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.institution}
                        </h3>
                        <p className={`text-sm font-medium ${
                          darkMode ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                          {item.period}
                        </p>
                      </div>
                    </div>

                    <p className={`mb-2 text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {item.degree}
                    </p>

                    {item.honors && (
                      <p className={`flex items-center gap-2 text-sm font-medium ${
                        darkMode ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                        <span>⭐</span>
                        {item.honors}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
  {
    title: 'Front-End Development',
    icon: Layout,
    color: darkMode
      ? 'from-purple-600 to-pink-600'
      : 'from-purple-500 to-pink-500',
    skills: [
      { name: 'HTML5', logo: html_pic },
      { name: 'CSS3', logo: css_pic },
      { name: 'JavaScript (ES6+)', logo: js_pic },
      { name: 'React.js', logo: react_pic },
      { name: 'Tailwind CSS', logo: tailwind_pic },
    ],
  },

  {
    title: 'Back-End & Web Development',
    icon: Code,
    color: darkMode
      ? 'from-blue-600 to-indigo-600'
      : 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'Node.js', logo: nodejs },
      { name: 'PHP', logo: php },
      { name: 'MySQL', logo: mysql },
      { name: 'MongoDB', logo: mongoDB },
      { name: 'Firebase', logo: firebase },
    ],
  },

  {
    title: 'Programming Languages',
    icon: Terminal,
    color: darkMode
      ? 'from-cyan-600 to-blue-600'
      : 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Java', logo: java },
      { name: 'Python', logo: python },
      { name: 'JavaScript', logo: js_pic },
      { name: 'PHP', logo: php },
      { name: 'Visual Basic .NET', logo: vb },
    ],
  },

  {
    title: 'Databases',
    icon: Database,
    color: darkMode
      ? 'from-green-600 to-emerald-600'
      : 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MySQL', logo: mysql },
      { name: 'MongoDB', logo: mongoDB },
    ],
  },

  {
    title: 'Tools & Platforms',
    icon: Settings,
    color: darkMode
      ? 'from-yellow-600 to-orange-600'
      : 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'VS Code', logo: vscode },
      { name: 'Android Studio', logo: as },
      { name: 'Git & GitHub', logo: github },
      { name: 'Firebase Console', logo: firebase },
    ],
  },

  {
    title: 'UI / UX & Creative Tools',
    icon: Edit,
    color: darkMode
      ? 'from-pink-600 to-rose-600'
      : 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Figma', logo: figma },
      { name: 'Canva', logo: canva },
      { name: 'Adobe Premiere Pro', logo: adpremiere },
      { name: 'Adobe After Effects', logo: adaftereffects },
      { name: 'CapCut', logo: capcut },
    ],
  },

  {
    title: '3D & Game Development',
    icon: Zap,
    color: darkMode
      ? 'from-emerald-600 to-green-600'
      : 'from-emerald-500 to-green-500',
    skills: [
      { name: 'Unreal Engine', logo: unrealengine },
      { name: '3ds Max', logo: dsmax },
    ],
  },

  {
    title: 'Office Applications',
    icon: FileText,
    color: darkMode
      ? 'from-indigo-600 to-purple-600'
      : 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Microsoft Word', logo: word },
      { name: 'Microsoft Excel', logo: excel },
      { name: 'Microsoft PowerPoint', logo: powerpoint },
    ],
  },
];


  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-32 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`h-1 w-12 rounded-full ${
                darkMode
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                  : 'bg-gradient-to-r from-purple-500 to-blue-500'
              }`}
            />
            <span
              className={`text-sm font-semibold tracking-wider uppercase ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}
            >
              Expertise
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold mb-16 tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                darkMode
                  ? 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                  : 'bg-gray-50 border border-gray-200 hover:border-gray-300'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                        : 'bg-white hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {/* Logo Placeholder */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${
                      darkMode ? 'bg-slate-700' : 'bg-gray-200'
                    }`}>
                      {skill.logo ? (
                        <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                      ) : (
                        <Code className={`w-6 h-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium text-center ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {skill.name}
                    </span>
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


function Projects({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'CNSC RFID Monitoring System',
      description:
        'Developed an IoT-based monitoring system using RFID technology to enhance vehicle tracking and campus security at Camarines Norte State College.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: '#',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      title: 'Bicolicious',
      description:
        'Created a mobile application dedicated to Bicolano culinary heritage, providing video tutorials and authentic local recipes.',
      tech: ['Android Studio'],
      link: '#',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      title: 'PPE Management System',
      description:
        'Developed an inventory management system with NFC integration to streamline asset tracking and monitoring for LGU Daet.',
      tech: ['Vite React', 'Node.js', 'PHP', 'Arduino', 'MySQL'],
      link: '#',
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-32 transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`h-1 w-12 rounded-full ${
                darkMode
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                  : 'bg-gradient-to-r from-purple-500 to-blue-500'
              }`}
            />
            <span
              className={`text-sm font-semibold tracking-wider uppercase ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}
            >
              Portfolio
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold mb-16 tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                darkMode
                  ? 'bg-slate-950 border border-slate-800 hover:border-slate-700'
                  : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-base mb-5 leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`text-sm px-3 py-1 rounded-lg ${
                        darkMode
                          ? 'bg-slate-800 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-all ${
                    darkMode
                      ? 'text-purple-400 hover:text-purple-300'
                      : 'text-purple-600 hover:text-purple-700'
                  }`}
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Civil Service Examination – Professional Level Passer',
      issuer: 'Civil Service Commission, Philippines',
      date: '2025',
      description: 'Successfully passed the Civil Service Examination at the Professional Level',
      image: '/cse.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className={`py-32 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-1 w-12 rounded-full ${
              darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'
            }`} />
            <span className={`text-sm font-semibold tracking-wider uppercase ${
              darkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>Certifications</span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold mb-16 tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Professional Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-600'
                  : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-purple-400 shadow-md hover:shadow-xl'
              }`}>
                <div className="grid md:grid-cols-1 gap-6 p-8">
                  {/* Image */}
                  <div className="flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-purple-600 text-xl">✓</span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                      }`}>Achieved</span>
                    </div>
                    
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {cert.issuer} • {cert.date}
                    </p>
                    
                    <p className={`text-lg leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`py-32 transition-colors duration-300 ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Get in Touch
        </h2>

        <p className={`text-lg leading-relaxed mb-12 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          I'm currently available for freelance work and open to discussing new
          opportunities. Let’s build something meaningful together.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:zymoncome14@gmail.com"
            className={`flex items-center gap-3 text-lg transition-colors ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Mail className="w-5 h-5" />
            zymoncome14@gmail.com
          </a>

          <a
            href="https://github.com/jameszymoncome"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 text-lg transition-colors ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/james-zymon-come/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 text-lg transition-colors ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        <div className={`text-center mt-32 pt-8 border-t ${
          darkMode ? 'border-slate-800 text-gray-600' : 'border-gray-200 text-gray-400'
        }`}>
          <p className="text-sm font-light">
            © 2026 James Zymon Come
          </p>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`transition-colors duration-300 ${
      darkMode ? 'bg-slate-950' : 'bg-white'
    }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default Portfolio;

