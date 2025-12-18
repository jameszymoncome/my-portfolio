import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code, Terminal, Sparkles } from 'lucide-react';

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

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Floating orbs */}
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 
          className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            James Zymon Come
          </span>
        </h1>

        {/* Subtitle with icons */}
        <div 
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Terminal className="w-6 h-6 text-blue-400" />
          <p className="text-2xl md:text-3xl text-blue-100/90 font-light">
            Full Stack Developer
          </p>
          <Code className="w-6 h-6 text-blue-400" />
        </div>

        {/* Description */}
        <p 
          className={`text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Crafting elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
          >
            View Projects
            <ArrowDown className="inline-block ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <a
            href="mailto:james@example.com"
            className="px-8 py-4 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div 
          className={`flex gap-6 justify-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110 backdrop-blur-sm group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110 backdrop-blur-sm group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          </a>
          <a
            href="mailto:james@example.com"
            className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110 backdrop-blur-sm group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-slate-400">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </div>
      </div>
    </section>
  );
}

export default Hero;