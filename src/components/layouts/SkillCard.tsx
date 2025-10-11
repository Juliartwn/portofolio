import React from 'react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <ProgressBar
            key={index}
            label={skill.name}
            percentage={skill.level}
          />
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;