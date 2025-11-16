import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Button from '../ui/Button';

interface CertificateCarouselProps {
  certificates: Array<{
    image: string;
    title: string;
  }>;
}

const CertificateCarousel: React.FC<CertificateCarouselProps> = ({ certificates }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Duplicate certificates for seamless loop
  const duplicatedCertificates = [...certificates, ...certificates];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Carousel Container */}
      <div className="relative overflow-hidden h-[14rem] sm:h-[16rem] md:h-[18rem] flex items-center">
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex gap-4 animate-scroll-certificates hover:pause-animation py-4">
          {duplicatedCertificates.map((cert, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-[265px] sm:w-[280px] md:w-[340px] lg:w-[355px] h-auto rounded-md md:rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(cert.image)}
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Maximize2 className="w-10 h-10 text-white drop-shadow-xl mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Screen View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <Button
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-white"
            onClick={closeModal}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </Button>
          
          <div className="max-w-5xl max-h-[90vh] overflow-auto">
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll-certificates {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-certificates {
          animation: scroll-certificates 80s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll-certificates {
            animation-duration: 60s;
          }
        }
      `}</style>
    </>
  );
};

export default CertificateCarousel;