import React, { useState } from "react";
import { ChevronLeft, Maximize2 } from "lucide-react";
import Footer from "../layouts/Footer";
import Button from "../ui/Button";
import StarryBackground from '../ui/StarryBackground';

const Certificates: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      image: "/img/sertifikat/sertifikat sololearn Phyton.jpg",
      title: "Python Certificate",
    },
    {
      id: 2,
      image: "/img/sertifikat/Sertifikat Sololearn HTML.jpg",
      title: "HTML Certificate",
    },
    {
      id: 3,
      image: "/img/sertifikat/Sertifikat Sololearn CSS.jpg",
      title: "CSS Certificate",
    },
    {
      id: 4,
      image: "/img/sertifikat/Sertifikat Sololearn C++.jpg",
      title: "C++ Certificate",
    },
    {
      id: 5,
      image: "/img/sertifikat/Sertifikat UI Design Introduction.jpg",
      title: "UI Design Certificate",
    },
    {
      id: 6,
      image: "/img/sertifikat/Sertifikat UI Design Introduction.jpg",
      title: "Design Elements Certificate",
    },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-8 lg:px-20">
      {/* Back Button */}
      <StarryBackground />

      <div className="fixed m-4 left-6 top-6 z-50 animate-fade-in-left">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors duration-300"
        >
          <ChevronLeft className="w-8 h-8" />
          <span className="hidden md:inline text-2xl font-medium">Back</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="mt-16 md:mt-20 text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-500 animate-fade-in-down">
          Certificates
        </h1>

        <div className="max-w-5xl mx-auto text-lg md:text-xl text-neutral-300 mb-16 animate-fade-in-up">
          <p>
            A showcase of my professional certifications that reflect my
            continuous learning, growth, and dedication to excellence.
          </p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="relative group block p-2 cursor-pointer animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(cert.image)}
            >
              <div className="relative z-20 overflow-hidden transition-all duration-300 rounded-lg border border-neutral-700 hover:border-primary-500/50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-12 h-12 md:w-16 md:h-16 text-neutral-900 drop-shadow-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button (Optional) */}
        <div className="flex justify-center mt-12">
          <button className="px-12 py-3 bg-white text-neutral-900 font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-105">
            See More
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
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
    </div>
  );
};

export default Certificates;
