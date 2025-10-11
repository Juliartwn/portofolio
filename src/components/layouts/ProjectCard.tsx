import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  demo
}) => {
  return (
    <Card className="group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="primary" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={github}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={demo}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;