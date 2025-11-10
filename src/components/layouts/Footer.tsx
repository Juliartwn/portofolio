import React, { useState } from "react";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { RiReactjsFill, RiTailwindCssFill, RiVercelFill } from 'react-icons/ri';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [likes, setLikes] = useState(99);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <footer className="w-full py-12 border-t border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-900/95 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left Column - Social Media & Likes */}
            <div className="flex flex-col lg:items-start items-center space-y-6">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/julltwn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary-600 to-pink-500 rounded-lg hover:scale-110 transition-transform duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/juliartawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary-700 to-primary-800 rounded-lg hover:scale-110 transition-transform duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/juliartwn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-lg hover:scale-110 transition-transform duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Like Button */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className="group relative flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-full transition-all duration-300"
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      isLiked
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-neutral-400 group-hover:text-red-400"
                    }`}
                  />
                  <span className="text-sm text-neutral-300 group-hover:text-white">
                    Likes
                  </span>
                </button>
                <span
                  className={`text-2xl font-bold transition-all duration-300 ${
                    isLiked ? "text-red-500 scale-110" : "text-neutral-400"
                  }`}
                >
                  {likes}
                </span>
              </div>
            </div>

            {/* Middle Column - Built With */}
            <div className="flex flex-col items-center space-y-6">
              <div className="grid grid-cols-1 gap-3 w-full max-w-xs py-6">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <span className="text-neutral-400 text-sm">Built with</span>
                  <div className="flex items-center gap-2">
                    <RiReactjsFill className="text-3xl" />
                    <span className="text-neutral-300 text-sm font-medium">
                      React
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <span className="text-neutral-400 text-sm">Styled with</span>
                  <div className="flex items-center gap-2">
                    <RiTailwindCssFill className="text-3xl" />
                    <span className="text-neutral-300 text-sm font-medium">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <span className="text-neutral-400 text-sm">Deployed on</span>
                  <div className="flex items-center gap-2">
                    <RiVercelFill className="text-2xl" />
                    <span className="text-neutral-300 text-sm font-medium">
                      Vercel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Spotify */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <div className="w-full max-w-xs">
                <iframe
                  style={{ borderRadius: "12px", border: 0 }}
                  src="https://open.spotify.com/embed/playlist/5n2SQSCUSXQpL0AdFoyZeY?si=d535f12ac05e4a9a?utm_source=generator&theme=0"
                  className="w-full h-40"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Playlist"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <p className="text-center text-sm text-neutral-400">
              <span className="block sm:inline">
                © {currentYear}{" "}
                <a
                  href="https://julltwn.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
                >
                  Julltwn
                </a>
                . All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;