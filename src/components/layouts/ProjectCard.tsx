import React, { useState } from "react";
import { ExternalLink, Github, Eye, Figma, Code } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Modal from "../ui/Modal";
import Carousel from "../ui/Carousel";
import { useMouseTilt } from "@/hooks/useMouseTilt";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  github?: string;
  demo?: string;
  figma?: string;
  type: "development" | "design" | "both";
  fullDescription?: string;
  features?: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  images,
  tags,
  github,
  demo,
  figma,
  type,
  fullDescription,
  features = [],
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tilt = useMouseTilt({ maxTilt: 10, scale: 1.02, speed: 300 });

  // Combine single image with images array
  const allImages = images && images.length > 0 ? images : [image];

  const getTypeIcon = () => {
    switch (type) {
      case "development":
        return <Code className="w-4 h-4" />;
      case "design":
        return <Figma className="w-4 h-4" />;
      case "both":
        return (
          <div className="flex gap-1">
            <Code className="w-4 h-4" />
            <Figma className="w-4 h-4" />
          </div>
        );
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "development":
        return "Development";
      case "design":
        return "UI/UX Design";
      case "both":
        return "Full Project";
    }
  };

  return (
    <>
      <div ref={tilt.ref} style={tilt.style}>
        <Card className={`group${className}`}>
          <div className="relative overflow-hidden h-48">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60 pointer-events-none"></div>

            {/* Type Badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-400 rounded-full border border-primary-500/30 text-primary-100 text-xs font-medium">
                {getTypeIcon()}
                <span>{getTypeLabel()}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-neutral-400 mb-4 text-sm line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="primary" size="sm">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="info" size="sm">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
              >
                <Eye className="w-4 h-4" />
                <span>Details</span>
              </button>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              )}

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors duration-300 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              )}

              {figma && (
                <a
                  href={figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium"
                >
                  <Figma className="w-4 h-4" />
                  <span>Design</span>
                </a>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Modal for Project Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        size="lg"
      >
        <div className="space-y-6">
          {/* Project Images Carousel */}
          {allImages.length > 1 ? (
            <Carousel
              images={allImages}
              alt={title}
              className="w-full h-96 rounded-xl"
              showIndicators={true}
            />
          ) : (
            <div className="rounded-xl overflow-hidden">
              <img
                src={allImages[0]}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <Badge
            variant="primary"
            size="md"
            className="inline-flex items-center gap-2"
          >
            {getTypeIcon()}
            <span>{getTypeLabel()}</span>
          </Badge>

          {/* Description */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              About This Project
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {fullDescription || description}
            </p>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="primary" size="md">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-700">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-full transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}

            {figma && (
              <a
                href={figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300"
              >
                <Figma className="w-5 h-5" />
                <span>View Design</span>
              </a>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
