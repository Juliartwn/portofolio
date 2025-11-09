import React, { useState } from "react";
import { Award, ExternalLink, Calendar, Eye } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Modal from "../ui/Modal";

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
  skills,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden bg-neutral-900 border border-neutral-700 hover:border-primary-500/50">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>

          <div className="absolute top-4 right-4">
            <div className="p-2 bg-primary-500/20 backdrop-blur-sm rounded-full border border-primary-500/30">
              <Award className="w-5 h-5 text-primary-300" />
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-primary-400 font-medium text-sm">{issuer}</p>
          </div>

          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>

          <p className="text-neutral-400 text-sm line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="primary" size="sm">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium group/btn"
            >
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </button>

            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors duration-300 text-sm font-medium group/link"
              >
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                <span>Credential</span>
              </a>
            )}
          </div>
        </div>
      </Card>

      {/* Modal for Certificate Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        size="lg"
      >
        <div className="space-y-6">
          {/* Certificate Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Certificate Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <Award className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{issuer}</h3>
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-md font-semibold text-white mb-2">
                Description
              </h4>
              <p className="text-neutral-300 leading-relaxed">{description}</p>
            </div>

            <div>
              <h4 className="text-md font-semibold text-white mb-3">
                Skills Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="primary" size="md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {credentialUrl && (
              <div className="pt-4">
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Credential</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CertificateCard;
