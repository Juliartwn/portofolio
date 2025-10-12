import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import SocialIcon from '../ui/SocialIcon';

const Hero: React.FC = () => {
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Frontend Developer',
    'Backend Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-25">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block animate-zoom-in">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300">
              JD
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-fade-in-down delay-100">
            Juli Artawan
          </h1>

          <div className="h-16 flex items-center justify-center mb-4 animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-gray-300">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg animate-fade-in-up delay-300">
            Crafting beautiful and functional web experiences with modern technologies.
            Passionate about clean code and intuitive design.
          </p>

          <div className="flex gap-4 justify-center mb-12 animate-fade-in-up delay-400">
            <SocialIcon
              icon={<Github className="w-6 h-6" />}
              href="#"
              label="GitHub"
              variant="glass"
            />
            <SocialIcon
              icon={<Linkedin className="w-6 h-6" />}
              href="#"
              label="LinkedIn"
              variant="glass"
            />
            <SocialIcon
              icon={<Mail className="w-6 h-6" />}
              href="#"
              label="Email"
              variant="glass"
            />
          </div>

          <div className="animate-fade-in-up delay-500">
            <Button variant="primary" size="lg" onClick={scrollToProjects}>
              View My Work
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none p-2 hover:text-purple-400 transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;