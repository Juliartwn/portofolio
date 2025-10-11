import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import SocialIcon from "../ui/SocialIcon";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Building digital experiences that make a difference. Let's create
              something amazing together.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-3">
              <SocialIcon
                icon={<Github className="w-5 h-5" />}
                href="#"
                label="GitHub"
                variant="default"
              />
              <SocialIcon
                icon={<Linkedin className="w-5 h-5" />}
                href="#"
                label="LinkedIn"
                variant="default"
              />
              <SocialIcon
                icon={<Twitter className="w-5 h-5" />}
                href="#"
                label="Twitter"
                variant="default"
              />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with{" "}
            <Heart className="w-4 h-4 text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
