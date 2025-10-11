import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import SocialIcon from '../ui/SocialIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-25">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300">
              JD
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Juli Artawan
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer & UI/UX Enthusiast
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Crafting beautiful and functional web experiences with modern technologies.
            Passionate about clean code and intuitive design.
          </p>

          <div className="flex gap-4 justify-center mb-12">
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

          <Button variant="primary" size="lg">
            View My Work
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;