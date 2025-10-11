import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  description,
  image,
  credentialUrl,
  skills
}) => {
  return (
    <Card className="group overflow-hidden bg-slate-900 border border-slate-700 hover:border-purple-500/50">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        <div className="absolute top-4 right-4">
          <div className="p-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
            <Award className="w-5 h-5 text-purple-300" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-purple-400 font-medium text-sm">{issuer}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="primary" size="sm">
              {skill}
            </Badge>
          ))}
        </div>

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium group/link"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        )}
      </div>
    </Card>
  );
};

export default CertificateCard;